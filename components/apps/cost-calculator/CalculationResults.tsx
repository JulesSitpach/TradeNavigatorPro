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
    <div className="space-y-6" data-oid="3qhruqn">
      {/* Summary Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-oid="le1ge36"
      >
        <Card data-oid="4tjgcoi">
          <CardContent className="p-6" data-oid="e5e3wbd">
            <div
              className="flex items-center justify-between"
              data-oid="9bqzu_."
            >
              <div data-oid="d47jn.:">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="vp06cvt"
                >
                  Original Cost
                </p>
                <p className="text-2xl font-bold" data-oid="09je970">
                  {formatCurrency(summary.totalOriginalCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center"
                data-oid="wl-p6xz"
              >
                <Package className="h-6 w-6 text-blue-500" data-oid="ehxxu_g" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="7zsx.bz">
          <CardContent className="p-6" data-oid="4pi_zyv">
            <div
              className="flex items-center justify-between"
              data-oid="onf578u"
            >
              <div data-oid="8ilnspz">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="ey_7:eo"
                >
                  Tariff Cost
                </p>
                <p
                  className="text-2xl font-bold text-orange"
                  data-oid="i_aj-ph"
                >
                  {formatCurrency(summary.totalTariffCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
                data-oid="-2ibwwv"
              >
                <DollarSign
                  className="h-6 w-6 text-orange"
                  data-oid="5of.sg_"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="5ivi1ur">
          <CardContent className="p-6" data-oid="zhz:3n.">
            <div
              className="flex items-center justify-between"
              data-oid="_o9lm5z"
            >
              <div data-oid="dwub_w8">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="bjo80jh"
                >
                  Shipping Cost
                </p>
                <p className="text-2xl font-bold text-info" data-oid="totch78">
                  {formatCurrency(summary.totalShippingCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center"
                data-oid="78t_v.g"
              >
                <Truck className="h-6 w-6 text-info" data-oid="e3kgy4_" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="qngrmbe">
          <CardContent className="p-6" data-oid="wm6.sxs">
            <div
              className="flex items-center justify-between"
              data-oid="y2j8f.0"
            >
              <div data-oid="aie9zib">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="iu:p6ut"
                >
                  Total Landed Cost
                </p>
                <p className="text-2xl font-bold" data-oid="80:899l">
                  {formatCurrency(summary.totalLandedCost)}
                </p>
                <div className="flex items-center mt-1" data-oid="y-c8lyj">
                  {overallImpact > 0 ? (
                    <TrendingUp
                      className="h-4 w-4 text-destructive mr-1"
                      data-oid="9st6rgk"
                    />
                  ) : (
                    <TrendingDown
                      className="h-4 w-4 text-success mr-1"
                      data-oid="v0v-:vu"
                    />
                  )}
                  <span
                    className={`text-sm font-medium ${getImpactColor(overallImpact)}`}
                    data-oid="pu-j1qz"
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
                data-oid="pjxy1ch"
              >
                {overallImpact > 15 ? (
                  <AlertTriangle
                    className="h-6 w-6 text-destructive"
                    data-oid="vnwmnol"
                  />
                ) : overallImpact > 5 ? (
                  <TrendingUp
                    className="h-6 w-6 text-warning"
                    data-oid=".ww46vl"
                  />
                ) : (
                  <CheckCircle
                    className="h-6 w-6 text-success"
                    data-oid="r6hcx01"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Analysis */}
      <Card data-oid="7_n7pto">
        <CardHeader data-oid="nu6u9ro">
          <CardTitle className="flex items-center space-x-2" data-oid="-muauem">
            <span data-oid="_29y4xl">Impact Analysis</span>
            <Badge
              variant={
                overallImpact > 15
                  ? "destructive"
                  : overallImpact > 5
                    ? "secondary"
                    : "default"
              }
              data-oid="iuit9j5"
            >
              {overallImpact > 15
                ? "High Impact"
                : overallImpact > 5
                  ? "Medium Impact"
                  : "Low Impact"}
            </Badge>
          </CardTitle>
          <CardDescription data-oid="hnqg01w">
            Overall cost impact:{" "}
            {formatCurrency(
              summary.totalLandedCost - summary.totalOriginalCost,
            )}
            ({formatPercentage(overallImpact)} increase)
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="hc.yb.7">
          <div className="space-y-4" data-oid=".ygtakx">
            {overallImpact > 20 && (
              <div
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                data-oid="h.tt2xy"
              >
                <div className="flex items-start space-x-3" data-oid="gvmd.aq">
                  <AlertTriangle
                    className="h-5 w-5 text-destructive mt-0.5"
                    data-oid=".x.jdnm"
                  />

                  <div data-oid="dl74vao">
                    <h4
                      className="font-medium text-destructive"
                      data-oid="o8tt9i3"
                    >
                      High Impact Alert
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="4ptf944"
                    >
                      This cost increase is significant and may require
                      immediate action. Consider:
                    </p>
                    <ul
                      className="text-sm text-muted-foreground mt-2 space-y-1"
                      data-oid="zvi44wk"
                    >
                      <li data-oid="znb7_u_">
                        • Finding alternative suppliers in different countries
                      </li>
                      <li data-oid="dj06.7g">
                        • Adjusting pricing strategy to maintain margins
                      </li>
                      <li data-oid="2ui_xuu">
                        • Negotiating with current suppliers for better terms
                      </li>
                      <li data-oid=":fuf3zj">
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
                data-oid="8o7xzz6"
              >
                <div className="flex items-start space-x-3" data-oid="xtauqz0">
                  <TrendingUp
                    className="h-5 w-5 text-warning mt-0.5"
                    data-oid="pd5jcm7"
                  />

                  <div data-oid="_:fg24t">
                    <h4 className="font-medium text-warning" data-oid="45i322x">
                      Medium Impact
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="tsvivke"
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
                data-oid=".vpes0z"
              >
                <div className="flex items-start space-x-3" data-oid="3mnzz.6">
                  <CheckCircle
                    className="h-5 w-5 text-success mt-0.5"
                    data-oid="kd-s_ph"
                  />

                  <div data-oid="i6b4t_k">
                    <h4 className="font-medium text-success" data-oid="p:97g2u">
                      Low Impact
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="598j1x1"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="-awdaet">
        {/* Product List */}
        <Card data-oid="mqffxa.">
          <CardHeader data-oid="29p5d:m">
            <CardTitle data-oid="y56b-ap">Product Breakdown</CardTitle>
            <CardDescription data-oid="lt30:zc">
              Click on a product to see detailed cost analysis
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="7qa8y-:">
            <div className="space-y-3" data-oid="_l2xe0c">
              {calculations.map((calc) => (
                <div
                  key={calc.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedCalculation?.id === calc.id
                      ? "border-orange bg-orange/5"
                      : "border-border hover:border-orange/50"
                  }`}
                  onClick={() => setSelectedCalculation(calc)}
                  data-oid="kyfxy1s"
                >
                  <div
                    className="flex items-center justify-between mb-2"
                    data-oid="so4ah-z"
                  >
                    <h4 className="font-medium" data-oid="ados0al">
                      {calc.product.name}
                    </h4>
                    <Badge
                      variant={
                        calc.impactPercentage > 15 ? "destructive" : "secondary"
                      }
                      data-oid="_rll7r-"
                    >
                      {formatPercentage(calc.impactPercentage)}
                    </Badge>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-4 text-sm"
                    data-oid="h5njc_z"
                  >
                    <div data-oid="25x14de">
                      <span
                        className="text-muted-foreground"
                        data-oid="p2px-0y"
                      >
                        Original:
                      </span>
                      <span className="ml-2 font-medium" data-oid="h_c.yl-">
                        {formatCurrency(calc.originalCost)}
                      </span>
                    </div>
                    <div data-oid="qfypxn4">
                      <span
                        className="text-muted-foreground"
                        data-oid="dqc-_dy"
                      >
                        Landed:
                      </span>
                      <span className="ml-2 font-medium" data-oid="mmfdlwg">
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
        <Card data-oid="r2pvb11">
          <CardHeader data-oid="1n8-q2r">
            <CardTitle data-oid="-:iovul">Cost Breakdown</CardTitle>
            <CardDescription data-oid="o1780wy">
              {selectedCalculation
                ? `Detailed analysis for ${selectedCalculation.product.name}`
                : "Select a product to see detailed breakdown"}
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="9ub1qqn">
            {selectedCalculation ? (
              <CostChart calculation={selectedCalculation} data-oid="18vdr9e" />
            ) : (
              <div
                className="h-64 flex items-center justify-center text-muted-foreground"
                data-oid="crmv.ub"
              >
                Select a product from the list to view cost breakdown
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Export Section */}
      <Card data-oid="oz:j6r:">
        <CardHeader data-oid="lsbk-gt">
          <CardTitle className="flex items-center space-x-2" data-oid="1a7qhai">
            <FileText className="h-5 w-5" data-oid="b4at4v8" />
            <span data-oid="7egawfg">Export Results</span>
          </CardTitle>
          <CardDescription data-oid="h_.2hgk">
            Download your cost analysis results in various formats
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="tkrop.9">
          <div className="flex flex-wrap gap-4" data-oid="y:i.li6">
            <ExportButton
              calculations={calculations}
              format="pdf"
              variant="default"
              data-oid="sf1uum1"
            />

            <ExportButton
              calculations={calculations}
              format="excel"
              variant="outline"
              data-oid="5r_3qy3"
            />

            <ExportButton
              calculations={calculations}
              format="csv"
              variant="outline"
              data-oid="691ka1k"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
