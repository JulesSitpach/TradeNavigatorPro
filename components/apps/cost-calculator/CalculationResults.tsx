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
import { CostCalculation } from "@/lib/types";
import { formatCurrency, formatPercentage } from "@/lib/formatters";
import { CostChart } from "./CostChart";
import { ExportButton } from "./ExportButton";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Package,
  Truck,
  FileText,
} from "lucide-react";

interface CalculationResultsProps {
  calculations: CostCalculation[];
}

export function CalculationResults({ calculations }: CalculationResultsProps) {
  const [selectedCalculation, setSelectedCalculation] =
    useState<CostCalculation | null>(calculations[0] || null);

  // Calculate summary statistics
  const summary = calculations.reduce(
    (acc, calc) => ({
      totalOriginalCost: acc.totalOriginalCost + calc.originalCost,
      totalLandedCost: acc.totalLandedCost + calc.totalLandedCost,
      totalTariffCost: acc.totalTariffCost + calc.tariffAmount,
      totalShippingCost: acc.totalShippingCost + calc.shippingCost,
    }),
    {
      totalOriginalCost: 0,
      totalLandedCost: 0,
      totalTariffCost: 0,
      totalShippingCost: 0,
    },
  );

  const overallImpact =
    summary.totalOriginalCost > 0
      ? ((summary.totalLandedCost - summary.totalOriginalCost) /
          summary.totalOriginalCost) *
        100
      : 0;

  const getImpactColor = (percentage: number) => {
    if (percentage > 20) return "text-destructive";
    if (percentage > 10) return "text-warning";
    if (percentage > 5) return "text-orange";
    return "text-success";
  };

  const getImpactIcon = (percentage: number) => {
    if (percentage > 15) return AlertTriangle;
    if (percentage > 5) return TrendingUp;
    return CheckCircle;
  };

  return (
    <div className="space-y-6" data-oid="xco97vh">
      {/* Summary Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-oid="iprt3ii"
      >
        <Card data-oid="hvx_d47">
          <CardContent className="p-6" data-oid="k:k:4r9">
            <div
              className="flex items-center justify-between"
              data-oid="hrn4nbl"
            >
              <div data-oid="qzh-usg">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="p.yobjq"
                >
                  Original Cost
                </p>
                <p className="text-2xl font-bold" data-oid="snby-7a">
                  {formatCurrency(summary.totalOriginalCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center"
                data-oid="ti1lgy6"
              >
                <Package className="h-6 w-6 text-blue-500" data-oid=".in4gd4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="1_wwmzs">
          <CardContent className="p-6" data-oid="6l2en:r">
            <div
              className="flex items-center justify-between"
              data-oid="siyuczd"
            >
              <div data-oid="8.xn6ju">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="4t6uuw0"
                >
                  Tariff Cost
                </p>
                <p
                  className="text-2xl font-bold text-orange"
                  data-oid="p79bb97"
                >
                  {formatCurrency(summary.totalTariffCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
                data-oid="d0b22.i"
              >
                <DollarSign
                  className="h-6 w-6 text-orange"
                  data-oid="ibzll4p"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="lj40qoh">
          <CardContent className="p-6" data-oid="-:joqyw">
            <div
              className="flex items-center justify-between"
              data-oid="3k.tj9z"
            >
              <div data-oid="q_s.j0d">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="bz.j_0y"
                >
                  Shipping Cost
                </p>
                <p className="text-2xl font-bold text-info" data-oid="mxjl82z">
                  {formatCurrency(summary.totalShippingCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center"
                data-oid="x4f_byo"
              >
                <Truck className="h-6 w-6 text-info" data-oid="v:wwztx" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="p9f4t.7">
          <CardContent className="p-6" data-oid="du2g2h_">
            <div
              className="flex items-center justify-between"
              data-oid="._wfvdr"
            >
              <div data-oid="gv09pbf">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="wrzuv9v"
                >
                  Total Landed Cost
                </p>
                <p className="text-2xl font-bold" data-oid="om4emvx">
                  {formatCurrency(summary.totalLandedCost)}
                </p>
                <div className="flex items-center mt-1" data-oid="3pd7x2j">
                  {overallImpact > 0 ? (
                    <TrendingUp
                      className="h-4 w-4 text-destructive mr-1"
                      data-oid="rjwb5n:"
                    />
                  ) : (
                    <TrendingDown
                      className="h-4 w-4 text-success mr-1"
                      data-oid="mmxjz-n"
                    />
                  )}
                  <span
                    className={`text-sm font-medium ${getImpactColor(overallImpact)}`}
                    data-oid="tr.2v-v"
                  >
                    {formatPercentage(overallImpact)}
                  </span>
                </div>
              </div>
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  overallImpact > 15
                    ? "bg-destructive/10"
                    : overallImpact > 5
                      ? "bg-warning/10"
                      : "bg-success/10"
                }`}
                data-oid="vamvhw8"
              >
                {overallImpact > 15 ? (
                  <AlertTriangle
                    className="h-6 w-6 text-destructive"
                    data-oid="2rx-gg9"
                  />
                ) : overallImpact > 5 ? (
                  <TrendingUp
                    className="h-6 w-6 text-warning"
                    data-oid="gl9eb15"
                  />
                ) : (
                  <CheckCircle
                    className="h-6 w-6 text-success"
                    data-oid="rzb7:sf"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Analysis */}
      <Card data-oid=":gi4lib">
        <CardHeader data-oid="rj5uv.p">
          <CardTitle className="flex items-center space-x-2" data-oid="ek5j.ge">
            <span data-oid="9q-_jm3">Impact Analysis</span>
            <Badge
              variant={
                overallImpact > 15
                  ? "destructive"
                  : overallImpact > 5
                    ? "secondary"
                    : "default"
              }
              data-oid="db1q0gu"
            >
              {overallImpact > 15
                ? "High Impact"
                : overallImpact > 5
                  ? "Medium Impact"
                  : "Low Impact"}
            </Badge>
          </CardTitle>
          <CardDescription data-oid="82kath2">
            Overall cost impact:{" "}
            {formatCurrency(
              summary.totalLandedCost - summary.totalOriginalCost,
            )}
            ({formatPercentage(overallImpact)} increase)
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="72-5hem">
          <div className="space-y-4" data-oid="1v2ziex">
            {overallImpact > 20 && (
              <div
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                data-oid="ewy1n7s"
              >
                <div className="flex items-start space-x-3" data-oid="0vxwpuq">
                  <AlertTriangle
                    className="h-5 w-5 text-destructive mt-0.5"
                    data-oid="9lblozs"
                  />

                  <div data-oid="atw_ms0">
                    <h4
                      className="font-medium text-destructive"
                      data-oid="6w7u.9-"
                    >
                      High Impact Alert
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="c7a3njc"
                    >
                      This cost increase is significant and may require
                      immediate action. Consider:
                    </p>
                    <ul
                      className="text-sm text-muted-foreground mt-2 space-y-1"
                      data-oid="b:saxto"
                    >
                      <li data-oid="zcf8:og">
                        • Finding alternative suppliers in different countries
                      </li>
                      <li data-oid=":h3p2q-">
                        • Adjusting pricing strategy to maintain margins
                      </li>
                      <li data-oid="nzn85ul">
                        • Negotiating with current suppliers for better terms
                      </li>
                      <li data-oid="lste6i2">
                        • Exploring different shipping methods or routes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {overallImpact > 10 && overallImpact <= 20 && (
              <div
                className="p-4 bg-warning/10 border border-warning/20 rounded-lg"
                data-oid="ymlc:fj"
              >
                <div className="flex items-start space-x-3" data-oid="95-2ibm">
                  <TrendingUp
                    className="h-5 w-5 text-warning mt-0.5"
                    data-oid="bs..ocn"
                  />

                  <div data-oid="wfl7idj">
                    <h4 className="font-medium text-warning" data-oid="v61mk7d">
                      Medium Impact
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="oy4gh:c"
                    >
                      This cost increase is manageable but should be monitored.
                      Consider reviewing your pricing strategy.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {overallImpact <= 10 && (
              <div
                className="p-4 bg-success/10 border border-success/20 rounded-lg"
                data-oid="i60qvsw"
              >
                <div className="flex items-start space-x-3" data-oid="kadki4a">
                  <CheckCircle
                    className="h-5 w-5 text-success mt-0.5"
                    data-oid="x4.1di4"
                  />

                  <div data-oid="yssej7c">
                    <h4 className="font-medium text-success" data-oid="_5zg1_t">
                      Low Impact
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="3yajz2h"
                    >
                      This cost increase is minimal and should not significantly
                      affect your business operations.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="w8lzw3b">
        {/* Product List */}
        <Card data-oid="48431h6">
          <CardHeader data-oid="t-it7ix">
            <CardTitle data-oid="6xppsuy">Product Breakdown</CardTitle>
            <CardDescription data-oid="lcbrl4w">
              Click on a product to see detailed cost analysis
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="nzhgne9">
            <div className="space-y-3" data-oid="4mqm.e-">
              {calculations.map((calc) => (
                <div
                  key={calc.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedCalculation?.id === calc.id
                      ? "border-orange bg-orange/5"
                      : "border-border hover:border-orange/50"
                  }`}
                  onClick={() => setSelectedCalculation(calc)}
                  data-oid="a8uwiod"
                >
                  <div
                    className="flex items-center justify-between mb-2"
                    data-oid="9pwqe7-"
                  >
                    <h4 className="font-medium" data-oid="aleftua">
                      {calc.product.name}
                    </h4>
                    <Badge
                      variant={
                        calc.impactPercentage > 15 ? "destructive" : "secondary"
                      }
                      data-oid="86:60:p"
                    >
                      {formatPercentage(calc.impactPercentage)}
                    </Badge>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-4 text-sm"
                    data-oid="aa__mvz"
                  >
                    <div data-oid=":2xie55">
                      <span
                        className="text-muted-foreground"
                        data-oid="cpv4d8w"
                      >
                        Original:
                      </span>
                      <span className="ml-2 font-medium" data-oid="91k4pmq">
                        {formatCurrency(calc.originalCost)}
                      </span>
                    </div>
                    <div data-oid="4q8.dxi">
                      <span
                        className="text-muted-foreground"
                        data-oid="fe693.v"
                      >
                        Landed:
                      </span>
                      <span className="ml-2 font-medium" data-oid="2m.2yl-">
                        {formatCurrency(calc.totalLandedCost)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cost Visualization */}
        <Card data-oid="qof4d6x">
          <CardHeader data-oid="53k6tmt">
            <CardTitle data-oid="a7k710q">Cost Breakdown</CardTitle>
            <CardDescription data-oid="nhrzwgj">
              {selectedCalculation
                ? `Detailed analysis for ${selectedCalculation.product.name}`
                : "Select a product to see detailed breakdown"}
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="pq3xb0m">
            {selectedCalculation ? (
              <CostChart calculation={selectedCalculation} data-oid="3x36obu" />
            ) : (
              <div
                className="h-64 flex items-center justify-center text-muted-foreground"
                data-oid="w8mczp."
              >
                Select a product from the list to view cost breakdown
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Export Section */}
      <Card data-oid="execl8_">
        <CardHeader data-oid="grv.4qs">
          <CardTitle className="flex items-center space-x-2" data-oid="pbg_7do">
            <FileText className="h-5 w-5" data-oid="mp7ure:" />
            <span data-oid="pe-_66y">Export Results</span>
          </CardTitle>
          <CardDescription data-oid="3ogjf38">
            Download your cost analysis results in various formats
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="19xhbty">
          <div className="flex flex-wrap gap-4" data-oid="tvpoisx">
            <ExportButton
              calculations={calculations}
              format="pdf"
              variant="default"
              data-oid="s3n.2d0"
            />

            <ExportButton
              calculations={calculations}
              format="excel"
              variant="outline"
              data-oid="dqxt7x-"
            />

            <ExportButton
              calculations={calculations}
              format="csv"
              variant="outline"
              data-oid="rmb9ekm"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
