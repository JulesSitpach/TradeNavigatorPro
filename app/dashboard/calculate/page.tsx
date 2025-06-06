"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useForm } from "react-hook-form";

// Types
interface Product {
  id: string;
  name: string;
  hts_code: string;
  country_of_origin: string;
  value_usd: number;
  quantity: number;
}

interface TariffRate {
  id: string;
  hts_code: string;
  country_code: string;
  rate_percentage: number;
  description?: string;
}

interface CalculationResult {
  product_id: string;
  product_name: string;
  hts_code: string;
  country_of_origin: string;
  value_usd: number;
  quantity: number;
  tariff_rate: number;
  tariff_amount: number;
}

interface CalculationSummary {
  total_products: number;
  total_value: number;
  total_tariff: number;
  average_rate: number;
  highest_tariff_product?: CalculationResult;
}

interface CalculationFormValues {
  scenario_name: string;
  custom_rates: Record<string, number>;
  include_existing_tariffs: boolean;
}

export default function CalculatePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [tariffRates, setTariffRates] = useState<TariffRate[]>([]);
  const [calculationResults, setCalculationResults] = useState<CalculationResult[]>([]);
  const [summary, setSummary] = useState<CalculationSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [exportFormat, setExportFormat] = useState<"pdf" | "csv">("pdf");
  const [isExporting, setIsExporting] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "results">("products");

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<CalculationFormValues>({
    defaultValues: {
      scenario_name: `Tariff Scenario ${new Date().toLocaleDateString()}`,
      include_existing_tariffs: true,
      custom_rates: {}
    }
  });

  const includeExistingTariffs = watch("include_existing_tariffs");

  // Fetch products and tariff rates on component mount
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      
      try {
        const supabase = supabaseBrowser();
        
        // Get the most recent file uploaded by the user
        const { data: fileData, error: fileError } = await supabase
          .from("files")
          .select("id")
          .order("created_at", { ascending: false })
          .limit(1);
          
        if (fileError) throw fileError;
        
        if (!fileData || fileData.length === 0) {
          setError("No uploaded files found. Please upload a CSV file first.");
          setIsLoading(false);
          return;
        }
        
        const fileId = fileData[0].id;
        
        // Fetch products associated with this file
        const { data: productsData, error: productsError } = await supabase
          .from("products")
          .select("*")
          .eq("file_id", fileId);
          
        if (productsError) throw productsError;
        
        // Fetch tariff rates
        const { data: ratesData, error: ratesError } = await supabase
          .from("tariff_rates")
          .select("*")
          .is("expiration_date", null)
          .order("effective_date", { ascending: false });
          
        if (ratesError) throw ratesError;
        
        setProducts(productsData || []);
        setTariffRates(ratesData || []);
        
        // Initialize custom rates form fields
        const uniqueCountries = [...new Set((productsData || []).map(p => p.country_of_origin))];
        const customRatesInit: Record<string, number> = {};
        
        uniqueCountries.forEach(country => {
          customRatesInit[country] = 0;
        });
        
        setValue("custom_rates", customRatesInit);
        
      } catch (err: any) {
        setError(`Error loading data: ${err.message || "Unknown error"}`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [setValue]);

  // Calculate tariffs based on form values
  const calculateTariffs = (data: CalculationFormValues) => {
    setIsCalculating(true);
    setError(null);
    
    try {
      const results: CalculationResult[] = products.map(product => {
        // Get base tariff rate from database
        let tariffRate = 0;
        
        if (data.include_existing_tariffs) {
          const matchingRate = tariffRates.find(
            rate => rate.hts_code === product.hts_code && 
                   rate.country_code === product.country_of_origin
          );
          
          if (matchingRate) {
            tariffRate = matchingRate.rate_percentage;
          }
        }
        
        // Add any custom rate for this country
        if (data.custom_rates[product.country_of_origin]) {
          tariffRate += data.custom_rates[product.country_of_origin];
        }
        
        // Calculate tariff amount
        const tariffAmount = (product.value_usd * tariffRate) / 100;
        
        return {
          product_id: product.id,
          product_name: product.name,
          hts_code: product.hts_code,
          country_of_origin: product.country_of_origin,
          value_usd: product.value_usd,
          quantity: product.quantity,
          tariff_rate: tariffRate,
          tariff_amount: tariffAmount
        };
      });
      
      setCalculationResults(results);
      
      // Calculate summary statistics
      const totalValue = results.reduce((sum, item) => sum + item.value_usd, 0);
      const totalTariff = results.reduce((sum, item) => sum + item.tariff_amount, 0);
      const avgRate = totalValue > 0 ? (totalTariff / totalValue) * 100 : 0;
      
      // Find product with highest tariff
      const highestTariffProduct = [...results].sort((a, b) => b.tariff_amount - a.tariff_amount)[0];
      
      setSummary({
        total_products: results.length,
        total_value: totalValue,
        total_tariff: totalTariff,
        average_rate: avgRate,
        highest_tariff_product: highestTariffProduct
      });
      
      // Switch to results tab
      setActiveTab("results");
      
      // Save calculation to database
      saveCalculation(data.scenario_name, results, totalValue, totalTariff);
      
    } catch (err: any) {
      setError(`Calculation error: ${err.message || "Unknown error"}`);
      console.error(err);
    } finally {
      setIsCalculating(false);
    }
  };

  // Save calculation to database
  const saveCalculation = async (
    name: string, 
    results: CalculationResult[], 
    totalValue: number, 
    totalDuty: number
  ) => {
    try {
      const supabase = supabaseBrowser();
      
      // Get the file ID
      const { data: fileData } = await supabase
        .from("files")
        .select("id")
        .order("created_at", { ascending: false })
        .limit(1);
        
      if (!fileData || fileData.length === 0) return;
      
      const fileId = fileData[0].id;
      
      // Save calculation
      await supabase.from("calculations").insert({
        name,
        file_id: fileId,
        total_products: results.length,
        total_value_usd: totalValue,
        total_duty_usd: totalDuty,
        details: { results }
      });
      
    } catch (err) {
      console.error("Failed to save calculation:", err);
    }
  };

  // Export calculation results
  const handleExport = async () => {
    if (!calculationResults.length || !summary) return;
    
    setIsExporting(true);
    
    try {
      const response = await fetch("/api/reports/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          format: exportFormat,
          data: {
            results: calculationResults,
            summary,
            scenarioName: watch("scenario_name")
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`Export failed with status: ${response.status}`);
      }
      
      // Handle file download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `tariff-impact-${Date.now()}.${exportFormat}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      
    } catch (err: any) {
      setError(`Export error: ${err.message || "Unknown error"}`);
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  // Handle upload more button
  const handleUploadMore = () => {
    router.push("/dashboard/upload");
  };

  // Get unique countries from products
  const uniqueCountries = [...new Set(products.map(p => p.country_of_origin))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Emergency Cost Calculator</h1>
        <p className="mt-2 text-gray-600">
          Calculate potential tariff impacts on your imported products
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
              {error?.includes("upload") && (
                <button
                  onClick={handleUploadMore}
                  className="mt-2 text-sm font-medium text-brand hover:text-brand/80"
                >
                  Upload CSV file
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No product data found</h3>
              <p className="mt-1 text-sm text-gray-500">Upload a CSV file to calculate tariff impacts</p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleUploadMore}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                >
                  Upload CSV
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button
                    className={`${
                      activeTab === "products"
                        ? "border-brand text-brand"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab("products")}
                  >
                    Products ({products.length})
                  </button>
                  <button
                    className={`${
                      activeTab === "results"
                        ? "border-brand text-brand"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab("results")}
                    disabled={calculationResults.length === 0}
                  >
                    Results
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "products" && (
                  <>
                    <form onSubmit={handleSubmit(calculateTariffs)}>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="scenario_name" className="block text-sm font-medium text-gray-700">
                            Scenario Name
                          </label>
                          <input
                            type="text"
                            id="scenario_name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                            {...register("scenario_name", { required: "Scenario name is required" })}
                          />
                          {errors.scenario_name && (
                            <p className="mt-1 text-sm text-red-600">{errors.scenario_name.message}</p>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">Tariff Settings</h3>
                          </div>
                          
                          <div className="mt-4">
                            <div className="flex items-center">
                              <input
                                id="include_existing_tariffs"
                                type="checkbox"
                                className="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded"
                                {...register("include_existing_tariffs")}
                              />
                              <label htmlFor="include_existing_tariffs" className="ml-2 block text-sm text-gray-900">
                                Include existing tariff rates
                              </label>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                              When enabled, the calculator will include current tariff rates in addition to any custom rates you specify.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-3">Additional Tariff Rates by Country</h4>
                          <div className="space-y-3">
                            {uniqueCountries.map((country) => (
                              <div key={country} className="flex items-center space-x-3">
                                <div className="w-24 flex-shrink-0">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {country}
                                  </span>
                                </div>
                                <div className="flex-grow relative rounded-md shadow-sm">
                                  <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    className="focus:ring-brand focus:border-brand block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="0.00"
                                    {...register(`custom_rates.${country}`, {
                                      valueAsNumber: true,
                                      min: { value: 0, message: "Rate cannot be negative" }
                                    })}
                                  />
                                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">%</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex justify-end">
                            <button
                              type="submit"
                              disabled={isCalculating}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                            >
                              {isCalculating ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Calculating...
                                </>
                              ) : (
                                "Calculate Impact"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Product Data</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                HTS Code
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Origin
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Value (USD)
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Quantity
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {products.slice(0, 10).map((product) => (
                              <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {product.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.hts_code}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.country_of_origin}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ${product.value_usd.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.quantity}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {products.length > 10 && (
                          <div className="px-6 py-3 bg-gray-50 text-sm text-gray-500">
                            Showing 10 of {products.length} products
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "results" && calculationResults.length > 0 && summary && (
                  <div className="space-y-8">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Impact Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-500">Total Products</p>
                          <p className="text-2xl font-bold text-gray-900">{summary.total_products}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-500">Total Value</p>
                          <p className="text-2xl font-bold text-gray-900">${summary.total_value.toFixed(2)}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-500">Total Tariff</p>
                          <p className="text-2xl font-bold text-brand">${summary.total_tariff.toFixed(2)}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-500">Average Rate</p>
                          <p className="text-2xl font-bold text-gray-900">{summary.average_rate.toFixed(2)}%</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Calculation Results</h3>
                        <div className="flex items-center space-x-2">
                          <div>
                            <label htmlFor="export-format" className="sr-only">
                              Export Format
                            </label>
                            <select
                              id="export-format"
                              name="export-format"
                              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand focus:border-brand sm:text-sm rounded-md"
                              value={exportFormat}
                              onChange={(e) => setExportFormat(e.target.value as "pdf" | "csv")}
                            >
                              <option value="pdf">PDF</option>
                              <option value="csv">CSV</option>
                            </select>
                          </div>
                          <button
                            type="button"
                            onClick={handleExport}
                            disabled={isExporting}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
                          >
                            {isExporting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Exporting...
                              </>
                            ) : (
                              "Export Report"
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                HTS Code
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Origin
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Value (USD)
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tariff Rate
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tariff Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {calculationResults.map((result) => (
                              <tr key={result.product_id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {result.product_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {result.hts_code}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {result.country_of_origin}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  ${result.value_usd.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {result.tariff_rate.toFixed(2)}%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand">
                                  ${result.tariff_amount.toFixed(2)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            <strong>Disclaimer:</strong> This calculation is an estimate based on the provided data and may not reflect all regulatory complexities. Consult with a trade professional for official guidance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
