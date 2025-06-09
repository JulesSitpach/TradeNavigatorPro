"use client";

import React from "react";
import { Icons } from "@/components/ui/icons";

// Dashboard stats data
const stats = [
  {
    title: "Total Portfolio Value",
    value: "$124,580.00",
    change: "+12.5%",
    icon: "DollarSign",
    trend: "up",
  },
  {
    title: "Active Positions",
    value: "24",
    change: "+3",
    icon: "TrendingUp",
    trend: "up",
  },
  {
    title: "Day P&L",
    value: "+$2,840.00",
    change: "+2.3%",
    icon: "Activity",
    trend: "up",
  },
  {
    title: "Win Rate",
    value: "68.5%",
    change: "+1.2%",
    icon: "BarChart3",
    trend: "up",
  },
];

// Recent trades data
const recentTrades = [
  {
    symbol: "AAPL",
    action: "BUY",
    quantity: 100,
    price: 180.5,
    time: "10:30 AM",
  },
  {
    symbol: "TSLA",
    action: "SELL",
    quantity: 50,
    price: 242.8,
    time: "09:45 AM",
  },
  {
    symbol: "MSFT",
    action: "BUY",
    quantity: 75,
    price: 380.2,
    time: "09:15 AM",
  },
  {
    symbol: "GOOGL",
    action: "SELL",
    quantity: 25,
    price: 2650.0,
    time: "08:30 AM",
  },
];

// Watchlist data
const watchlist = [
  { symbol: "NVDA", price: 450.2, change: "+5.80", changePercent: "+1.31%" },
  { symbol: "AMD", price: 120.45, change: "-2.10", changePercent: "-1.71%" },
  { symbol: "META", price: 380.9, change: "+8.20", changePercent: "+2.20%" },
  { symbol: "NFLX", price: 485.6, change: "-12.40", changePercent: "-2.49%" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-6" data-oid="8wkh7l5">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="7koqhqr">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="5h-p3pu">
          <div data-oid="08:iqfc">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid=".pt5j8t"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="xq1s0vz">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="fp4k4ym">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="r1xy6jf"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="suoq8ro" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="se9wcdh"
            >
              <Icons.Settings className="w-4 h-4" data-oid="2ywh5ok" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="hwnhwsv"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="k9un5z3"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="n29w7gt"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="5gxxg:g"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="ehmf:-k"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="9r5srty"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="h3-qyz0"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="1ge3wxq"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="3kys39v"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="srxzd6p">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="gprl.sy"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="4b_ufb-"
          >
            <div className="p-6 border-b border-border" data-oid="fryl-3-">
              <div
                className="flex items-center justify-between"
                data-oid="3y97xlo"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="9u:24q."
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="y2r--h8"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="e2o22f-">
              <div className="space-y-4" data-oid="hyvegz5">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="shc4p8t"
                  >
                    <div className="flex items-center gap-4" data-oid="aj6h4qc">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="i8l04vd"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="uss-_-9">
                        <p
                          className="font-medium text-foreground"
                          data-oid="r.f6fil"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="tmbwbw4"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="-a4sonm">
                      <p
                        className="font-medium text-foreground"
                        data-oid="3k7s-xh"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="4qnad3i"
                      >
                        {trade.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Watchlist */}
          <div
            className="bg-card border border-border rounded-lg"
            data-oid="_ju:fpb"
          >
            <div className="p-6 border-b border-border" data-oid="smnv6k:">
              <div
                className="flex items-center justify-between"
                data-oid=".juyoh2"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="f:dmppx"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid=":8q75ex"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="v_asjx6" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="rgrck0_">
              <div className="space-y-4" data-oid="yjntuy2">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="3yfnaoj"
                  >
                    <div data-oid="f2c2k6y">
                      <p
                        className="font-medium text-foreground"
                        data-oid="vc_a0f8"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="c742208"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="sm70m8g">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="wf-3gen"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="x_jw1ga"
                      >
                        {stock.changePercent}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div
          className="bg-card border border-border rounded-lg p-6"
          data-oid="2ca5f5c"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="nra6uvv"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="wrjow9s"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="6cbkxjm">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="8gtoe7z"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="xc3o9q."
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="y5wt4dj"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="xqo2bqp"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="nn:r7y2"
          >
            <div className="text-center" data-oid="k8pu0bu">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="_ohxvd9"
              />

              <p className="text-muted-foreground" data-oid="t4.uevs">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
