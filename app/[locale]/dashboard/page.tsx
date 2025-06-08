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

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
    <div className="min-h-screen bg-gray-50" data-oid="x0hv8gm">
      {/* Header */}
      <header className="bg-white shadow" data-oid="teoe7xx">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid=".j.bxv0"
        >
          <div
            className="flex justify-between items-center py-6"
            data-oid="ihik_ns"
          >
            <div className="flex items-center space-x-4" data-oid="id.3mde">
              <Link href={`/${locale}`} data-oid="j56jxji">
                <Button variant="outline" size="sm" data-oid="gn-_0no">
                  ← Home
                </Button>
              </Link>
              <h1
                className="text-3xl font-bold text-gray-900"
                data-oid="k1pd9:k"
              >
                TradeNavigatorPro Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4" data-oid="-mu-n66">
              <span className="text-sm text-gray-600" data-oid="h40u:be">
                Welcome back!
              </span>
              <Link href={`/${locale}/login`} data-oid="-:gc95f">
                <Button variant="outline" data-oid="_u7ivxz">
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
        data-oid="y-v.5ka"
      >
        <div className="px-4 py-6 sm:px-0" data-oid="i0bs56z">
          {/* Stats Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            data-oid="micjxod"
          >
            <Card data-oid="u:9:sf-">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="dr9annr"
              >
                <CardTitle className="text-sm font-medium" data-oid="6:u6vq8">
                  Total Trades
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="487sqfl">
                <div className="text-2xl font-bold" data-oid="69ank_f">
                  {stats.totalTrades}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="p.h7x08">
                  Active trading positions
                </p>
              </CardContent>
            </Card>

            <Card data-oid="n1tju8z">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="c0r7pbt"
              >
                <CardTitle className="text-sm font-medium" data-oid="c7mthnu">
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="_0ecgbj">
                <div className="text-2xl font-bold" data-oid="dqe3nni">
                  ${stats.totalValue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="fr720_x">
                  Portfolio value
                </p>
              </CardContent>
            </Card>

            <Card data-oid="lkm7q9g">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="m-khv:e"
              >
                <CardTitle className="text-sm font-medium" data-oid="oc.gmny">
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="kyb_adt">
                <div
                  className="text-2xl font-bold text-green-600"
                  data-oid="g_dfhay"
                >
                  {stats.completedTrades}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="pfzsv:-">
                  Successful trades
                </p>
              </CardContent>
            </Card>

            <Card data-oid="z31m0y8">
              <CardHeader
                className="flex flex-row items-center justify-between space-y-0 pb-2"
                data-oid="nfibwjn"
              >
                <CardTitle className="text-sm font-medium" data-oid="-pd_dj:">
                  Pending
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="sr28d._">
                <div
                  className="text-2xl font-bold text-yellow-600"
                  data-oid="-:.dkw7"
                >
                  {stats.pendingTrades}
                </div>
                <p className="text-xs text-muted-foreground" data-oid="rluea._">
                  Awaiting execution
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trades Section */}
          <div
            className="flex justify-between items-center mb-6"
            data-oid="--btd2x"
          >
            <h2 className="text-2xl font-bold text-gray-900" data-oid="68p1qvj">
              Recent Trades
            </h2>
            <Button data-oid="hllzb7.">Add New Trade</Button>
          </div>

          {/* Trades List */}
          <div className="grid gap-4" data-oid="15g4jw.">
            {trades.map((trade) => (
              <Card key={trade.id} data-oid="8agyq8t">
                <CardContent className="p-6" data-oid="3wsz18u">
                  <div
                    className="flex justify-between items-start"
                    data-oid="2xjnb09"
                  >
                    <div className="flex-1" data-oid="dz4erxd">
                      <div
                        className="flex items-center space-x-4"
                        data-oid="s27dzbt"
                      >
                        <h3
                          className="text-lg font-semibold"
                          data-oid="c4sp4yd"
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
                          data-oid="3iyol32"
                        >
                          {trade.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div
                        className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600"
                        data-oid="0kd3jyv"
                      >
                        <div data-oid="4hxe53n">
                          <span className="font-medium" data-oid="cvodzu7">
                            Quantity:
                          </span>{" "}
                          {trade.quantity}
                        </div>
                        <div data-oid="r00gg6n">
                          <span className="font-medium" data-oid="lnhm9ot">
                            Price:
                          </span>{" "}
                          ${trade.price}
                        </div>
                        <div data-oid="wuwuttc">
                          <span className="font-medium" data-oid="1_.yt4_">
                            Total:
                          </span>{" "}
                          ${trade.total.toLocaleString()}
                        </div>
                        <div data-oid="ld55qi4">
                          <span className="font-medium" data-oid="1n4v85l">
                            Date:
                          </span>{" "}
                          {new Date(trade.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col items-end space-y-2"
                      data-oid="g7jbiqp"
                    >
                      <Badge
                        variant={
                          trade.status === "completed"
                            ? "default"
                            : trade.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                        data-oid=".oekbq2"
                      >
                        {trade.status}
                      </Badge>
                      <div className="flex space-x-2" data-oid="0c3xsqc">
                        <Button size="sm" variant="outline" data-oid=":80ilcr">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" data-oid="n7ijoqo">
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
          <div className="mt-8" data-oid="i4dk:8p">
            <h3 className="text-lg font-semibold mb-4" data-oid="0zz5_ff">
              Quick Actions
            </h3>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              data-oid="kofomnf"
            >
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                data-oid="x:qblcz"
              >
                <CardContent className="p-6 text-center" data-oid="imt61w5">
                  <h4 className="font-semibold" data-oid="v5arrhd">
                    Market Analysis
                  </h4>
                  <p className="text-sm text-gray-600 mt-2" data-oid="cgnjri3">
                    View market trends and analysis
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                data-oid="j89hol:"
              >
                <CardContent className="p-6 text-center" data-oid="hq45ccg">
                  <h4 className="font-semibold" data-oid="-2scotj">
                    Portfolio Overview
                  </h4>
                  <p className="text-sm text-gray-600 mt-2" data-oid="0::y8-0">
                    Check your portfolio performance
                  </p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                data-oid="ue28pyq"
              >
                <CardContent className="p-6 text-center" data-oid="tfzi_ed">
                  <h4 className="font-semibold" data-oid="kv1it2r">
                    Trade History
                  </h4>
                  <p className="text-sm text-gray-600 mt-2" data-oid="q5xfgjb">
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
