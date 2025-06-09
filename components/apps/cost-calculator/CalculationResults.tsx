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
    <div className="space-y-6" data-oid="xq:euh_">
      {/* Summary Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-oid="16k19t."
      >
        <Card data-oid="03wreuz">
          <CardContent className="p-6" data-oid=".by59zo">
            <div
              className="flex items-center justify-between"
              data-oid="_2koun-"
            >
              <div data-oid="liiy5vx">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="s2wfzd-"
                >
                  Original Cost
                </p>
                <p className="text-2xl font-bold" data-oid="627eyk_">
                  {formatCurrency(summary.totalOriginalCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center"
                data-oid=".ythfs2"
              >
                <Package className="h-6 w-6 text-blue-500" data-oid="16b1a5_" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="r3d:q5r">
          <CardContent className="p-6" data-oid="szpps0g">
            <div
              className="flex items-center justify-between"
              data-oid="i6fl6f-"
            >
              <div data-oid="8x3cfpx">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="d7kqxi4"
                >
                  Tariff Cost
                </p>
                <p
                  className="text-2xl font-bold text-orange"
                  data-oid="5-9.cyv"
                >
                  {formatCurrency(summary.totalTariffCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center"
                data-oid="e1iahg."
              >
                <DollarSign
                  className="h-6 w-6 text-orange"
                  data-oid="m6un61x"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="hkfysff">
          <CardContent className="p-6" data-oid="gjqcyrf">
            <div
              className="flex items-center justify-between"
              data-oid="3.m-kna"
            >
              <div data-oid="ccle:ze">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="c0k8n5x"
                >
                  Shipping Cost
                </p>
                <p className="text-2xl font-bold text-info" data-oid="k5gslx1">
                  {formatCurrency(summary.totalShippingCost)}
                </p>
              </div>
              <div
                className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center"
                data-oid="au:8a67"
              >
                <Truck className="h-6 w-6 text-info" data-oid="isgm.wp" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-oid="ji_4l-5">
          <CardContent className="p-6" data-oid="1k5yu8o">
            <div
              className="flex items-center justify-between"
              data-oid="4.qau.6"
            >
              <div data-oid="m296a:b">
                <p
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="tibhbgn"
                >
                  Total Landed Cost
                </p>
                <p className="text-2xl font-bold" data-oid="n2:47y2">
                  {formatCurrency(summary.totalLandedCost)}
                </p>
                <div className="flex items-center mt-1" data-oid="moea9du">
                  {overallImpact > 0 ? (
                    <TrendingUp
                      className="h-4 w-4 text-destructive mr-1"
                      data-oid="1vb9:t6"
                    />
                  ) : (
                    <TrendingDown
                      className="h-4 w-4 text-success mr-1"
                      data-oid="1a21tif"
                    />
                  )}
                  <span
                    className={`text-sm font-medium ${getImpactColor(overallImpact)}`}
                    data-oid="p5e3wgl"
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
                data-oid="9djzva_"
              >
                {overallImpact > 15 ? (
                  <AlertTriangle
                    className="h-6 w-6 text-destructive"
                    data-oid="psmth4c"
                  />
                ) : overallImpact > 5 ? (
                  <TrendingUp
                    className="h-6 w-6 text-warning"
                    data-oid="q0s-cu-"
                  />
                ) : (
                  <CheckCircle
                    className="h-6 w-6 text-success"
                    data-oid="vylezcn"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Analysis */}
      <Card data-oid="5vy46ws">
        <CardHeader data-oid="ibuhma1">
          <CardTitle className="flex items-center space-x-2" data-oid="6sbf1mk">
            <span data-oid="4i7nu8s">Impact Analysis</span>
            <Badge
              variant={
                overallImpact > 15
                  ? "destructive"
                  : overallImpact > 5
                    ? "secondary"
                    : "default"
              }
              data-oid="iz0o_m_"
            >
              {overallImpact > 15
                ? "High Impact"
                : overallImpact > 5
                  ? "Medium Impact"
                  : "Low Impact"}
            </Badge>
          </CardTitle>
          <CardDescription data-oid="csmhr4m">
            Overall cost impact:{" "}
            {formatCurrency(
              summary.totalLandedCost - summary.totalOriginalCost,
            )}
            ({formatPercentage(overallImpact)} increase)
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="m_iqlq1">
          <div className="space-y-4" data-oid="2zw82io">
            {overallImpact > 20 && (
              <div
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg"
                data-oid="il9v2d6"
              >
                <div className="flex items-start space-x-3" data-oid="wpw3r_a">
                  <AlertTriangle
                    className="h-5 w-5 text-destructive mt-0.5"
                    data-oid="qu5b9z-"
                  />

                  <div data-oid="but-4vx">
                    <h4
                      className="font-medium text-destructive"
                      data-oid="fy08omt"
                    >
                      High Impact Alert
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="_09c-f0"
                    >
                      This cost increase is significant and may require
                      immediate action. Consider:
                    </p>
                    <ul
                      className="text-sm text-muted-foreground mt-2 space-y-1"
                      data-oid="u4:2rl0"
                    >
                      <li data-oid="mup43db">
                        • Finding alternative suppliers in different countries
                      </li>
                      <li data-oid="gg7lb38">
                        • Adjusting pricing strategy to maintain margins
                      </li>
                      <li data-oid="3d-jb:w">
                        • Negotiating with current suppliers for better terms
                      </li>
                      <li data-oid="3p9n7lb">
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
                data-oid="4xtc97j"
              >
                <div className="flex items-start space-x-3" data-oid=".t4v3.q">
                  <TrendingUp
                    className="h-5 w-5 text-warning mt-0.5"
                    data-oid="0jjzfvf"
                  />

                  <div data-oid="667hxke">
                    <h4 className="font-medium text-warning" data-oid="6ycqe5s">
                      Medium Impact
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="5ar-kwu"
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
                data-oid="o83e-_t"
              >
                <div className="flex items-start space-x-3" data-oid="0i1aruo">
                  <CheckCircle
                    className="h-5 w-5 text-success mt-0.5"
                    data-oid="gbr4vrx"
                  />

                  <div data-oid="4439a08">
                    <h4 className="font-medium text-success" data-oid="8ar9p9w">
                      Low Impact
                    </h4>
                    <p
                      className="text-sm text-muted-foreground mt-1"
                      data-oid="7-19cr4"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="kerju9a">
        {/* Product List */}
        <Card data-oid=".ff2i6:">
          <CardHeader data-oid="fyf3fi6">
            <CardTitle data-oid="qtre3ls">Product Breakdown</CardTitle>
            <CardDescription data-oid="628_bd5">
              Click on a product to see detailed cost analysis
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="nc_xn3d">
            <div className="space-y-3" data-oid="5.03s8i">
              {calculations.map((calc) => (
                <div
                  key={calc.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedCalculation?.id === calc.id
                      ? "border-orange bg-orange/5"
                      : "border-border hover:border-orange/50"
                  }`}
                  onClick={() => setSelectedCalculation(calc)}
                  data-oid="17e5wxh"
                >
                  <div
                    className="flex items-center justify-between mb-2"
                    data-oid=":_me890"
                  >
                    <h4 className="font-medium" data-oid="c2xdgdc">
                      {calc.product.name}
                    </h4>
                    <Badge
                      variant={
                        calc.impactPercentage > 15 ? "destructive" : "secondary"
                      }
                      data-oid="x.zjlb-"
                    >
                      {formatPercentage(calc.impactPercentage)}
                    </Badge>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-4 text-sm"
                    data-oid="5ofh7ff"
                  >
                    <div data-oid=":p71ssa">
                      <span
                        className="text-muted-foreground"
                        data-oid="5qqt6k-"
                      >
                        Original:
                      </span>
                      <span className="ml-2 font-medium" data-oid="b6p_jhu">
                        {formatCurrency(calc.originalCost)}
                      </span>
                    </div>
                    <div data-oid="tiq9d6_">
                      <span
                        className="text-muted-foreground"
                        data-oid="3tq:m4:"
                      >
                        Landed:
                      </span>
                      <span className="ml-2 font-medium" data-oid="ukkrd23">
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
        <Card data-oid="r-hm3bc">
          <CardHeader data-oid="8toleua">
            <CardTitle data-oid="6gxdivb">Cost Breakdown</CardTitle>
            <CardDescription data-oid="5f._gyf">
              {selectedCalculation
                ? `Detailed analysis for ${selectedCalculation.product.name}`
                : "Select a product to see detailed breakdown"}
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="12:s3n1">
            {selectedCalculation ? (
              <CostChart calculation={selectedCalculation} data-oid="0pgdl:2" />
            ) : (
              <div
                className="h-64 flex items-center justify-center text-muted-foreground"
                data-oid="dk_:1mf"
              >
                Select a product from the list to view cost breakdown
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Export Section */}
      <Card data-oid="dy48t:u">
        <CardHeader data-oid="lpstmu:">
          <CardTitle className="flex items-center space-x-2" data-oid="03g1x47">
            <FileText className="h-5 w-5" data-oid="vgtyi8t" />
            <span data-oid="y9l1c_h">Export Results</span>
          </CardTitle>
          <CardDescription data-oid="l6pp6vh">
            Download your cost analysis results in various formats
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="8k6z71k">
          <div className="flex flex-wrap gap-4" data-oid="0fr:z2k">
            <ExportButton
              calculations={calculations}
              format="pdf"
              variant="default"
              data-oid="ujib.ft"
            />

            <ExportButton
              calculations={calculations}
              format="excel"
              variant="outline"
              data-oid="le1cl.4"
            />

            <ExportButton
              calculations={calculations}
              format="csv"
              variant="outline"
              data-oid="st3hsmx"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
