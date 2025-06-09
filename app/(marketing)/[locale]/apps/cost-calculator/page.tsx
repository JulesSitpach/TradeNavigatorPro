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
    <div className="min-h-screen bg-background" data-oid="3pr20tg">
      {/* Header */}
      <div className="border-b border-border bg-muted/30" data-oid=":dnffj5">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          data-oid="r2loy60"
        >
          <div className="flex items-center space-x-4 mb-4" data-oid="8644mr1">
            <div
              className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
              data-oid="qugp5-j"
            >
              <Calculator className="h-6 w-6 text-orange" data-oid="llp1aju" />
            </div>
            <div data-oid="d241t2t">
              <h1
                className="text-3xl font-bold text-foreground"
                data-oid="kcg3sfv"
              >
                Emergency Cost Calculator
              </h1>
              <p className="text-muted-foreground" data-oid="s:cer1y">
                Upload your purchase order or enter product details to get
                instant landed cost calculations
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4" data-oid="cgger6f">
            <Badge
              variant="secondary"
              className="status-info"
              data-oid="4fhl1al"
            >
              <TrendingUp className="w-4 h-4 mr-1" data-oid="3v.ylxv" />
              Instant Results
            </Badge>
            <Badge
              variant="secondary"
              className="status-active"
              data-oid="8t.z5.f"
            >
              <FileText className="w-4 h-4 mr-1" data-oid="ih3koo-" />
              PDF Export
            </Badge>
            <Badge
              variant="secondary"
              className="status-warning"
              data-oid="jcxd3_t"
            >
              <Upload className="w-4 h-4 mr-1" data-oid="aukq_k5" />
              Bulk Upload
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-oid="kz2mec2"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="d5czz3p"
        >
          {/* Input Section */}
          <div className="lg:col-span-2" data-oid="07bdhpa">
            <Card data-oid="223ar01">
              <CardHeader data-oid="u9_o54b">
                <CardTitle data-oid="nd5sryv">
                  Calculate Your Landed Costs
                </CardTitle>
                <CardDescription data-oid="hio0:pa">
                  Choose how you want to input your product information
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="749lqfa">
                <Tabs
                  defaultValue="manual"
                  className="w-full"
                  data-oid="93sn0u-"
                >
                  <TabsList
                    className="grid w-full grid-cols-2"
                    data-oid="kio:d1b"
                  >
                    <TabsTrigger value="manual" data-oid="xe_edpb">
                      Manual Entry
                    </TabsTrigger>
                    <TabsTrigger value="upload" data-oid="-ukb5a9">
                      File Upload
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="manual"
                    className="mt-6"
                    data-oid="v.zw3j3"
                  >
                    <CostCalculatorForm
                      onCalculationComplete={handleCalculationComplete}
                      isCalculating={isCalculating}
                      data-oid=":i6z.bm"
                    />
                  </TabsContent>

                  <TabsContent
                    value="upload"
                    className="mt-6"
                    data-oid="1-fsvvy"
                  >
                    <FileUpload
                      onFileUpload={handleFileUpload}
                      isProcessing={isCalculating}
                      data-oid="6rlajeb"
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6" data-oid="l0ar63p">
            <Card data-oid="hveyqt5">
              <CardHeader data-oid="-cvpmoi">
                <CardTitle className="text-lg" data-oid="k2np0or">
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4" data-oid="3hdzyrb">
                <div className="flex items-start space-x-3" data-oid="82j6sji">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="c6jhjjq"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="w95q2lf"
                    >
                      1
                    </span>
                  </div>
                  <div data-oid="fm:qjwa">
                    <h4 className="font-medium" data-oid="63oq2x_">
                      Enter Product Details
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="uq.vo1m"
                    >
                      Add your products manually or upload a CSV/Excel file
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-oid="bfknmmw">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="7-kl8gn"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="ibm-jdu"
                    >
                      2
                    </span>
                  </div>
                  <div data-oid="ob4hr22">
                    <h4 className="font-medium" data-oid="oo3:34s">
                      Get Instant Analysis
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="tj8-k5i"
                    >
                      See tariff rates, shipping costs, and total landed costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3" data-oid="jaug0ay">
                  <div
                    className="w-6 h-6 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    data-oid="3fe3.d3"
                  >
                    <span
                      className="text-xs font-semibold text-orange"
                      data-oid="iae8mfr"
                    >
                      3
                    </span>
                  </div>
                  <div data-oid="rcs.4ut">
                    <h4 className="font-medium" data-oid="55dmld:">
                      Export Results
                    </h4>
                    <p
                      className="text-sm text-muted-foreground"
                      data-oid="g1-ojnd"
                    >
                      Download professional reports for your team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-oid="re6iz5b">
              <CardHeader data-oid="7x8ac5i">
                <CardTitle className="text-lg" data-oid="_e.zrry">
                  Sample Data
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="2.tgqgv">
                <p
                  className="text-sm text-muted-foreground mb-4"
                  data-oid="ouxg4sp"
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
                  data-oid="r.j6os4"
                >
                  Load Sample Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        {calculations.length > 0 && (
          <div className="mt-8" data-oid="hy_ptwm">
            <CalculationResults
              calculations={calculations}
              data-oid="kgng698"
            />
          </div>
        )}
      </div>
    </div>
  );
}
