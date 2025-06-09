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
    <div className="min-h-screen bg-background" data-oid="_c9--gf">
      {/* Header */}
      <div className="border-b border-border bg-muted/30" data-oid="33al5nk">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="lgu8cux"
        >
          <div className="flex items-center space-x-4 mb-4" data-oid="mj.cdtz">
            <div
              className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
              data-oid="2.6ei_u"
            >
              <Calculator className="h-6 w-6 text-orange" data-oid="v7cj6u7" />
            </div>
            <div data-oid="kwqtcc8">
              <h1
                className="text-3xl font-bold text-foreground"
                data-oid="7b2:y8b"
              >
                Emergency Cost Calculator
              </h1>
              <p className="text-muted-foreground" data-oid="q7eyjt3">
                Upload your purchase order or enter product details to get
                instant landed cost calculations
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4" data-oid="330a3eo">
            <Badge
              variant="secondary"
              className="status-info"
              data-oid="die8voi"
            >
              <TrendingUp className="w-4 h-4 mr-1" data-oid="fk_8ln3" />
              Instant Results
            </Badge>
            <Badge
              variant="secondary"
              className="status-active"
              data-oid="dlt7r5f"
            >
              <FileText className="w-4 h-4 mr-1" data-oid="pdlc_nt" />
              PDF Export
            </Badge>
            <Badge
              variant="secondary"
              className="status-warning"
              data-oid="wa_ia1q"
            >
              <Upload className="w-4 h-4 mr-1" data-oid="vj_bhvm" />
              Bulk Upload
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-oid="mg.6l-r"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="91nqtdz"
        >
          {/* Input Section */}
          <div className="lg:col-span-2" data-oid="wpd28pf">
            <Card data-oid="mz-:g.5">
              <CardHeader data-oid=".lj35sx">
                <CardTitle data-oid="s94cis4">
                  Calculate Your Landed Costs
                </CardTitle>
                <CardDescription data-oid="3ccr185">
                  Choose how you want to input your product information
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="3ctdiwt">
                <Tabs
                  defaultValue="manual"
                  className="w-full"
                  data-oid="m0n1lwy"
                >
                  <TabsList
                    className="grid w-full grid-cols-2"
                    data-oid="bif2tbs"
                  >
                    <TabsTrigger value="manual" data-oid="-31birq">
                      Manual Entry
                    </TabsTrigger>
                    <TabsTrigger value="upload" data-oid="v41tp06">
                      File Upload
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="manual"
                    className="mt-6"
                    data-oid="rhgmnw8"
                  >
                    <CostCalculatorForm
                      onCalculationComplete={handleCalculationComplete}
                      isCalculating={isCalculating}
                      data-oid="em0pv04"
                    />
                  </TabsContent>

                  <TabsContent
                    value="upload"
                    className="mt-6"
                    data-oid="m:56jrv"
                  >
                    <FileUpload
                      onFileUpload={handleFileUpload}
                      isProcessing={isCalculating}
                      data-oid="y-4.oeg"
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6" data-oid="pdstor4">
            <Card data-oid="6t:xjm1">
              <CardHeader data-oid="l_vf3uq">
                <CardTitle className="text-lg" data-oid="i9nn_pj">
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="n3bi1fg">
                <div className="flex items-start space-x-3" data-oid="y_ft61a">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="p5p4ljq"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="a1cxneb"
                    >
                      1
                    </span>
                  </div>
                  <div data-oid="n1-z439">
                    <h4 className="font-medium" data-oid="m_cnf-s">
                      Enter Product Details
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="6jybj0e"
                    >
                      Add your products manually or upload a CSV/Excel file
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-oid="liz9bjt">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="yv_lzmh"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="dtzr6sn"
                    >
                      2
                    </span>
                  </div>
                  <div data-oid="-4rfz9-">
                    <h4 className="font-medium" data-oid="g1bmz00">
                      Get Instant Analysis
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="879af9y"
                    >
                      See tariff rates, shipping costs, and total landed costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-oid="gezdplf">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="9oq6929"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid=".70heuz"
                    >
                      3
                    </span>
                  </div>
                  <div data-oid="suu6e:j">
                    <h4 className="font-medium" data-oid="2fos:_x">
                      Export Results
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="two5jbd"
                    >
                      Download professional reports for your team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="nv_46d1">
              <CardHeader data-oid="pe6ewr9">
                <CardTitle className="text-lg" data-oid="wfshh7h">
                  Sample Data
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="h0lzh5h">
                <p
                  className="text-sm text-muted-foreground mb-4"
                  data-oid="oftzyke"
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
                  data-oid="k7mugxk"
                >
                  Load Sample Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        {calculations.length > 0 && (
          <div className="mt-8" data-oid="87l4rtb">
            <CalculationResults
              calculations={calculations}
              data-oid="c-uokf0"
            />
          </div>
        )}
      </div>
    </div>
  );
}
