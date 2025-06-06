"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CSVUpload from "@/components/CSVUpload";

export default function UploadPage() {
  const router = useRouter();
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleUploadComplete = (data: any[], file: File) => {
    // Navigate to the calculation page after successful upload
    router.push("/dashboard/calculate");
  };

  const handleUploadError = (error: string) => {
    setUploadError(error);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload Product Data</h1>
        <p className="mt-2 text-gray-600">
          Upload your product data in CSV format to calculate potential tariff impacts
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <CSVUpload
            onUploadComplete={handleUploadComplete}
            onError={handleUploadError}
            maxFileSizeMB={10}
            allowedColumns={["name", "hts_code", "country_of_origin", "value_usd", "quantity"]}
            endpoint="/api/upload"
          />
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">CSV File Requirements</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p className="mb-2">Your CSV file must include the following columns:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>name</strong> - Product name or description</li>
                <li><strong>hts_code</strong> - Harmonized Tariff Schedule code (e.g., 8471.30.01)</li>
                <li><strong>country_of_origin</strong> - 2-letter country code (e.g., CN for China)</li>
                <li><strong>value_usd</strong> - Product value in USD (numeric, no currency symbols)</li>
                <li><strong>quantity</strong> - Number of units (integer)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Sample CSV Format</h3>
        </div>
        <div className="px-6 py-5">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">hts_code</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">country_of_origin</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">value_usd</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">quantity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Laptop Computer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8471.30.01</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CN</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1200.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mobile Phone</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8517.12.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CN</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">800.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cotton Sweater</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6110.20.20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">VN</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Download a <a href="#" className="text-brand hover:text-brand/80">sample CSV template</a> to get started.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Tips for Successful Uploads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 p-2 mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">HTS Codes</h4>
            </div>
            <p className="text-sm text-gray-600">
              Use the correct 8-10 digit HTS code for your products. You can look up codes on the{" "}
              <a href="https://hts.usitc.gov/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand/80">
                USITC website
              </a>
              .
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 p-2 mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Country Codes</h4>
            </div>
            <p className="text-sm text-gray-600">
              Use standard 2-letter ISO country codes (e.g., CN for China, MX for Mexico, VN for Vietnam).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 p-2 mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Values</h4>
            </div>
            <p className="text-sm text-gray-600">
              Enter values as plain numbers without currency symbols or commas (e.g., 1200.50, not $1,200.50).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 p-2 mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">File Size</h4>
            </div>
            <p className="text-sm text-gray-600">
              Files up to 10MB are supported. For larger datasets, consider splitting into multiple files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
