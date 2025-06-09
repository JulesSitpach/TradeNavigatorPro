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
    <div className="min-h-screen bg-background" data-oid="_bf0f-a">
      {/* Header */}
      <div className="border-b border-border bg-muted/30" data-oid="kymhdgr">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="a5uq:1w"
        >
          <div className="flex items-center space-x-4 mb-4" data-oid="l:fhg9k">
            <div
              className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
              data-oid="hjqvojc"
            >
              <Calculator className="h-6 w-6 text-orange" data-oid="lv72gcc" />
            </div>
            <div data-oid="wlr5zru">
              <h1
                className="text-3xl font-bold text-foreground"
                data-oid="6x-:vea"
              >
                Emergency Cost Calculator
              </h1>
              <p className="text-muted-foreground" data-oid=".kc.8wc">
                Upload your purchase order or enter product details to get
                instant landed cost calculations
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4" data-oid="jf6u5jd">
            <Badge
              variant="secondary"
              className="status-info"
              data-oid="r84oi::"
            >
              <TrendingUp className="w-4 h-4 mr-1" data-oid="j8vhix." />
              Instant Results
            </Badge>
            <Badge
              variant="secondary"
              className="status-active"
              data-oid="jag8ev7"
            >
              <FileText className="w-4 h-4 mr-1" data-oid="tvq3vfv" />
              PDF Export
            </Badge>
            <Badge
              variant="secondary"
              className="status-warning"
              data-oid="wesk69v"
            >
              <Upload className="w-4 h-4 mr-1" data-oid="s3:qid:" />
              Bulk Upload
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-oid="h9y1awi"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="d92-2:f"
        >
          {/* Input Section */}
          <div className="lg:col-span-2" data-oid="--s0.8.">
            <Card data-oid="knv.:28">
              <CardHeader data-oid="4s-4c9w">
                <CardTitle data-oid="t7x_4ct">
                  Calculate Your Landed Costs
                </CardTitle>
                <CardDescription data-oid="h381j77">
                  Choose how you want to input your product information
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="ao34yty">
                <Tabs
                  defaultValue="manual"
                  className="w-full"
                  data-oid="x1w:pem"
                >
                  <TabsList
                    className="grid w-full grid-cols-2"
                    data-oid="5tbkfz2"
                  >
                    <TabsTrigger value="manual" data-oid="fsmgoj1">
                      Manual Entry
                    </TabsTrigger>
                    <TabsTrigger value="upload" data-oid="6dufu.x">
                      File Upload
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="manual"
                    className="mt-6"
                    data-oid="1ax_qqg"
                  >
                    <CostCalculatorForm
                      onCalculationComplete={handleCalculationComplete}
                      isCalculating={isCalculating}
                      data-oid="fbssxr7"
                    />
                  </TabsContent>

                  <TabsContent
                    value="upload"
                    className="mt-6"
                    data-oid="6-ncfvq"
                  >
                    <FileUpload
                      onFileUpload={handleFileUpload}
                      isProcessing={isCalculating}
                      data-oid="08x9f8-"
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6" data-oid="m71pj5w">
            <Card data-oid="co_-l4d">
              <CardHeader data-oid="8010h2k">
                <CardTitle className="text-lg" data-oid="j7x4nt:">
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="tn-qvse">
                <div className="flex items-start space-x-3" data-oid="y80dtpx">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="x_hw5rk"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="_aaf3ni"
                    >
                      1
                    </span>
                  </div>
                  <div data-oid="9wsmwsh">
                    <h4 className="font-medium" data-oid="cl40.p6">
                      Enter Product Details
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="jhq77m7"
                    >
                      Add your products manually or upload a CSV/Excel file
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-oid="2m9n:05">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="_o4xpu6"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="4ap60eu"
                    >
                      2
                    </span>
                  </div>
                  <div data-oid="4_95uvi">
                    <h4 className="font-medium" data-oid="aoq9..2">
                      Get Instant Analysis
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="zly_q0b"
                    >
                      See tariff rates, shipping costs, and total landed costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-oid="2h1xxj.">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="ct66gzy"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="5smeow9"
                    >
                      3
                    </span>
                  </div>
                  <div data-oid="0pcnp-8">
                    <h4 className="font-medium" data-oid="7ydfvh:">
                      Export Results
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="h5ppn9o"
                    >
                      Download professional reports for your team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="0njhu6b">
              <CardHeader data-oid="chh3.7n">
                <CardTitle className="text-lg" data-oid="wiv6jwe">
                  Sample Data
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="0nj3:ty">
                <p
                  className="text-sm text-muted-foreground mb-4"
                  data-oid="9gnmw1i"
                >
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
                  data-oid="l4xscpa"
                >
                  Load Sample Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        {calculations.length > 0 && (
          <div className="mt-8" data-oid="hlq98hj">
            <CalculationResults
              calculations={calculations}
              data-oid="6hazzwg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
