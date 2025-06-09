"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CostCalculatorForm } from "@/components/apps/cost-calculator/CostCalculatorForm";
import { CalculationResults } from "@/components/apps/cost-calculator/CalculationResults";
import { FileUpload } from "@/components/apps/cost-calculator/FileUpload";
import { Product, CostCalculation } from "@/lib/types";
import { Calculator, Upload, FileText, TrendingUp } from "lucide-react";

export default function CostCalculatorPage() {
  const [calculations, setCalculations] = useState<CostCalculation[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculationComplete = (newCalculations: CostCalculation[]) => {
    setCalculations(newCalculations);
  };

  const handleFileUpload = async (products: Product[]) => {
    setIsCalculating(true);
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Process calculations for uploaded products
    const { calculateBulkProducts } = await import(
      "@/lib/calculations/tariff-calculator"
    );
    const { calculations: newCalculations } = calculateBulkProducts(products);

    setCalculations(newCalculations);
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center">
              <Calculator className="h-6 w-6 text-orange" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Emergency Cost Calculator
              </h1>
              <p className="text-muted-foreground">
                Upload your purchase order or enter product details to get
                instant landed cost calculations
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="status-info">
              <TrendingUp className="w-4 h-4 mr-1" />
              Instant Results
            </Badge>
            <Badge variant="secondary" className="status-active">
              <FileText className="w-4 h-4 mr-1" />
              PDF Export
            </Badge>
            <Badge variant="secondary" className="status-warning">
              <Upload className="w-4 h-4 mr-1" />
              Bulk Upload
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Calculate Your Landed Costs</CardTitle>
                <CardDescription>
                  Choose how you want to input your product information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="manual" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                    <TabsTrigger value="upload">File Upload</TabsTrigger>
                  </TabsList>

                  <TabsContent value="manual" className="mt-6">
                    <CostCalculatorForm
                      onCalculationComplete={handleCalculationComplete}
                      isCalculating={isCalculating}
                    />
                  </TabsContent>

                  <TabsContent value="upload" className="mt-6">
                    <FileUpload
                      onFileUpload={handleFileUpload}
                      isProcessing={isCalculating}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-orange">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Enter Product Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Add your products manually or upload a CSV/Excel file
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-orange">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Get Instant Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      See tariff rates, shipping costs, and total landed costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-orange">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Export Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Download professional reports for your team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sample Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Try the calculator with sample data to see how it works.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    // Load sample data
                    import("@/lib/data/sample-products").then(
                      ({ sampleProducts }) => {
                        const sampleProduct = sampleProducts[0];
                        import("@/lib/calculations/tariff-calculator").then(
                          ({ generateCostCalculation }) => {
                            const calculation =
                              generateCostCalculation(sampleProduct);
                            setCalculations([calculation]);
                          },
                        );
                      },
                    );
                  }}
                >
                  Load Sample Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        {calculations.length > 0 && (
          <div className="mt-8">
            <CalculationResults calculations={calculations} />
          </div>
        )}
      </div>
    </div>
  );
}
