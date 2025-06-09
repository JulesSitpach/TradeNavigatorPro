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
    <div className="min-h-screen bg-background p-6" data-oid="g.a.:b.">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="rwxnxam">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="4og6hmr">
          <div data-oid="ttsyb55">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="s7f:7fe"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid=":tv:3x6">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="h4mv-c0">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="pons83d"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="m8ksjho" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="jgd5mu3"
            >
              <Icons.Settings className="w-4 h-4" data-oid="_qyf5p4" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="f5055iv"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="bf700y3"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="vv5wozf"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="ayv8hp3"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="r-f_ho2"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="5_al.dx"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="jvrc2.1"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="afykjkg"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="fulzha9"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="oqsa1wz">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="gg6gpz4"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="-55grzf"
          >
            <div className="p-6 border-b border-border" data-oid="vaavyru">
              <div
                className="flex items-center justify-between"
                data-oid="1-lwkwk"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="slrbvok"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="topuw4e"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="g0.pa-m">
              <div className="space-y-4" data-oid="v8j1pu2">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="on3ems:"
                  >
                    <div className="flex items-center gap-4" data-oid="j19u2by">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="mvmnpat"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="u7u8s-k">
                        <p
                          className="font-medium text-foreground"
                          data-oid="ni1vrpx"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="s2c4gx:"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="i_75pw.">
                      <p
                        className="font-medium text-foreground"
                        data-oid="8u_4c-u"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="9flfa72"
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
            data-oid="h2wizuo"
          >
            <div className="p-6 border-b border-border" data-oid="7_du19c">
              <div
                className="flex items-center justify-between"
                data-oid="bl7by48"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="27wzr0i"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="ida58yo"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="2m00nhi" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="1loismy">
              <div className="space-y-4" data-oid="nj1ayw3">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid=".2uvq1r"
                  >
                    <div data-oid="s6174wi">
                      <p
                        className="font-medium text-foreground"
                        data-oid="m68x1i2"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="114a5p3"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="d11c55r">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="t2mufsi"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="m.a6cmq"
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
          data-oid="qpx_f1n"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="if9:dnh"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="bna2ynm"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="bt0.tjz">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="p1xol:j"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="p_sua50"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="k6jkec7"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="monm76r"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="4wth_zy"
          >
            <div className="text-center" data-oid="h2j.j:6">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="7qs14fk"
              />

              <p className="text-muted-foreground" data-oid="mn27ltx">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
