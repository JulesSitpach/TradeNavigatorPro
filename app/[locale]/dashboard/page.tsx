"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Mock data for now
const mockTrades = [
  {
    id: "1",
    symbol: "AAPL",
    type: "buy" as const,
    quantity: 100,
    price: 150.25,
    total: 15025,
    status: "completed" as const,
    created_at: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    symbol: "TSLA",
    type: "sell" as const,
    quantity: 50,
    price: 245.8,
    total: 12290,
    status: "pending" as const,
    created_at: "2024-01-14T14:20:00Z",
  },
  {
    id: "3",
    symbol: "MSFT",
    type: "buy" as const,
    quantity: 75,
    price: 380.5,
    total: 28537.5,
    status: "completed" as const,
    created_at: "2024-01-13T09:15:00Z",
  },
];

export default function DashboardPage({
  params,
}: {
  params: { locale: string };
}) {
  const [trades, setTrades] = useState(mockTrades);
  const [stats, setStats] = useState({
    totalTrades: 0,
    totalValue: 0,
    completedTrades: 0,
    pendingTrades: 0,
  });

  useEffect(() => {
    // Calculate stats
    const totalTrades = trades.length;
    const totalValue = trades.reduce((sum, trade) => sum + trade.total, 0);
    const completedTrades = trades.filter(
      (trade) => trade.status === "completed",
    ).length;
    const pendingTrades = trades.filter(
      (trade) => trade.status === "pending",
    ).length;

    setStats({
      totalTrades,
      totalValue,
      completedTrades,
      pendingTrades,
    });
  }, [trades]);

  return (
    <div className="min-h-screen bg-gray-50" data-oid="i6ifldo">
      {/* Header */}
      <header className="bg-white shadow" data-oid=".nfwz8f">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="mef9a_l"
        >
          <div
            className="flex justify-between items-center py-6"
            data-oid="xw1zyz6"
          >
            <div className="flex items-center space-x-4" data-oid="nfd313c">
              <Link href={`/${params.locale}`} data-oid="gx-f6yk">
                <Button variant="outline" size="sm" data-oid="s1ybuyn">
                  ← Home
                </Button>
              </Link>
              <h1
                className="text-3xl font-bold text-gray-900"
                data-oid="hgdb9h4"
              >
                TradeNavigatorPro Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4" data-oid="r3h3gho">
              <span className="text-sm text-gray-600" data-oid="kt5gyz1">
                Welcome back!
              </span>
              <Link href={`/${params.locale}/login`} data-oid="jrixg3h">
                <Button variant="outline" data-oid="ux1cec8">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
        data-oid="vu5em9d"
      >
        <div className="px-4 py-6 sm:px-0" data-oid="3kqkpa8">
          {/* Stats Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            data-oid="s2ymet5"
          >
            <Card data-oid="j9pnzsk">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid=":hom:42"
              >
                <CardTitle className="text-sm font-medium" data-oid="btvw1td">
                  Total Trades
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="5vkt6xo">
                <div className="text-2xl font-bold" data-oid="86.mxy0">
                  {stats.totalTrades}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="-74oon9">
                  Active trading positions
                </p>
              </CardContent>
            </Card>

            <Card data-oid="jsn:eno">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="ap3bk7o"
              >
                <CardTitle className="text-sm font-medium" data-oid="_kag11q">
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="dz3rtlx">
                <div className="text-2xl font-bold" data-oid="21m0aj-">
                  ${stats.totalValue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="r_p3arp">
                  Portfolio value
                </p>
              </CardContent>
            </Card>

            <Card data-oid="s1m:hui">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="d3bjj-w"
              >
                <CardTitle className="text-sm font-medium" data-oid="u:wt9:n">
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="hyhlyd3">
                <div
                  className="text-2xl font-bold text-green-600"
                  data-oid="7ti8oas"
                >
                  {stats.completedTrades}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="ae8e1op">
                  Successful trades
                </p>
              </CardContent>
            </Card>

            <Card data-oid="ulcmdv9">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="r1k4geh"
              >
                <CardTitle className="text-sm font-medium" data-oid="l806mb:">
                  Pending
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="2td1k7j">
                <div
                  className="text-2xl font-bold text-yellow-600"
                  data-oid="3dq:qyw"
                >
                  {stats.pendingTrades}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="x7.a0cl">
                  Awaiting execution
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trades Section */}
          <div
            className="flex justify-between items-center mb-6"
            data-oid="x-r6j3i"
          >
            <h2 className="text-2xl font-bold text-gray-900" data-oid="i4e3fr5">
              Recent Trades
            </h2>
            <Button data-oid="slfy6ou">Add New Trade</Button>
          </div>

          {/* Trades List */}
          <div className="grid gap-4" data-oid="__vrd21">
            {trades.map((trade) => (
              <Card key={trade.id} data-oid="ysow_3-">
                <CardContent className="p-6" data-oid="::1ccdl">
                  <div
                    className="flex justify-between items-start"
                    data-oid="p2bs2t5"
                  >
                    <div className="flex-1" data-oid="kgumw.b">
                      <div
                        className="flex items-center space-x-4"
                        data-oid="5d2a6fa"
                      >
                        <h3
                          className="text-lg font-semibold"
                          data-oid="im0d_js"
                        >
                          {trade.symbol}
                        </h3>
                        <Badge
                          variant={
                            trade.type === "buy" ? "default" : "secondary"
                          }
                          className={
                            trade.type === "buy"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                          data-oid="qt9:av9"
                        >
                          {trade.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div
                        className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600"
                        data-oid="lhldhmw"
                      >
                        <div data-oid="gfei8nt">
                          <span className="font-medium" data-oid="18n8b__">
                            Quantity:
                          </span>{" "}
                          {trade.quantity}
                        </div>
                        <div data-oid="aprn7dn">
                          <span className="font-medium" data-oid="lpunalu">
                            Price:
                          </span>{" "}
                          ${trade.price}
                        </div>
                        <div data-oid="0pr3q9g">
                          <span className="font-medium" data-oid="8t.mlyz">
                            Total:
                          </span>{" "}
                          ${trade.total.toLocaleString()}
                        </div>
                        <div data-oid="tl4:8qi">
                          <span className="font-medium" data-oid="xgs83n:">
                            Date:
                          </span>{" "}
                          {new Date(trade.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col items-end space-y-2"
                      data-oid="zoklqn2"
                    >
                      <Badge
                        variant={
                          trade.status === "completed"
                            ? "default"
                            : trade.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                        data-oid="ezkbe56"
                      >
                        {trade.status}
                      </Badge>
                      <div className="flex space-x-2" data-oid="ouus-wi">
                        <Button size="sm" variant="outline" data-oid="qrmh1oc">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" data-oid="qgd345_">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8" data-oid="2vs99mc">
            <h3 className="text-lg font-semibold mb-4" data-oid="7jkeq3v">
              Quick Actions
            </h3>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              data-oid="yk6.w5b"
            >
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                data-oid="twgrlac"
              >
                <CardContent className="p-6 text-center" data-oid="79xw283">
                  <h4 className="font-semibold" data-oid="p-4gy.6">
                    Market Analysis
                  </h4>
                  <p className="text-sm text-gray-600 mt-2" data-oid="i42ynin">
                    View market trends and analysis
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                data-oid="r_97aa:"
              >
                <CardContent className="p-6 text-center" data-oid="4g6w32i">
                  <h4 className="font-semibold" data-oid="h3oavt1">
                    Portfolio Overview
                  </h4>
                  <p className="text-sm text-gray-600 mt-2" data-oid="450h2q6">
                    Check your portfolio performance
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                data-oid="p_m0xul"
              >
                <CardContent className="p-6 text-center" data-oid=":ox64sv">
                  <h4 className="font-semibold" data-oid="01q141d">
                    Trade History
                  </h4>
                  <p className="text-sm text-gray-600 mt-2" data-oid="n4s02.2">
                    View detailed trade history
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
