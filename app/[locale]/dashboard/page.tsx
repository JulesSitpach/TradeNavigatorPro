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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}`}>
                <Button variant="outline" size="sm">
                  ← Home
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                TradeNavigatorPro Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back!</span>
              <Link href={`/${locale}/login`}>
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Trades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalTrades}</div>
                <p className="text-xs text-muted-foreground">
                  Active trading positions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${stats.totalValue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">Portfolio value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {stats.completedTrades}
                </div>
                <p className="text-xs text-muted-foreground">
                  Successful trades
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {stats.pendingTrades}
                </div>
                <p className="text-xs text-muted-foreground">
                  Awaiting execution
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trades Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Trades</h2>
            <Button>Add New Trade</Button>
          </div>

          {/* Trades List */}
          <div className="grid gap-4">
            {trades.map((trade) => (
              <Card key={trade.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold">
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
                        >
                          {trade.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Quantity:</span>{" "}
                          {trade.quantity}
                        </div>
                        <div>
                          <span className="font-medium">Price:</span> $
                          {trade.price}
                        </div>
                        <div>
                          <span className="font-medium">Total:</span> $
                          {trade.total.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Date:</span>{" "}
                          {new Date(trade.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge
                        variant={
                          trade.status === "completed"
                            ? "default"
                            : trade.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {trade.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
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
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold">Market Analysis</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    View market trends and analysis
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold">Portfolio Overview</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Check your portfolio performance
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold">Trade History</h4>
                  <p className="text-sm text-gray-600 mt-2">
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
