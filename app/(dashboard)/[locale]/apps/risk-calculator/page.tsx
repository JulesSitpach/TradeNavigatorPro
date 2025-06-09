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
    <div className="min-h-screen bg-background p-6" data-oid="gqvt:z3">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="5y5gz.l">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="6vpeujn">
          <div data-oid="u5me0_1">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="51:f5md"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="uvbf9na">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="b8qy9g:">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="sh.j7pc"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="1cflb8t" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="s4:1pr7"
            >
              <Icons.Settings className="w-4 h-4" data-oid=":_4kjjc" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="il4n14p"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="yxwfzx2"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="act4dne"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="4io-u8c"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="atdjhkw"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="8t29:3q"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="zug0n9."
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="47.6ppd"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="xzxxvtz"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="n9v1ea8">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="wdhc1pb"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="smuss0:"
          >
            <div className="p-6 border-b border-border" data-oid="daub7pk">
              <div
                className="flex items-center justify-between"
                data-oid=":9u7pki"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="a2tpsqw"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="pz79hzm"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="_dws9fg">
              <div className="space-y-4" data-oid="_bi8ogt">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="5.cv8y_"
                  >
                    <div className="flex items-center gap-4" data-oid="u35hsjv">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="j00rnop"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="67lq.vb">
                        <p
                          className="font-medium text-foreground"
                          data-oid="1.jtx1r"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="fq8sd35"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="0_4-.t8">
                      <p
                        className="font-medium text-foreground"
                        data-oid="_7nop8m"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="p1q8yao"
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
            data-oid="nro.8u6"
          >
            <div className="p-6 border-b border-border" data-oid="sygw3io">
              <div
                className="flex items-center justify-between"
                data-oid="03n18k9"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="06t7sm5"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="_t1lfng"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="0elwuxu" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="l:ao.pe">
              <div className="space-y-4" data-oid="2ci6cc_">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="8xep37x"
                  >
                    <div data-oid="wp0.fsl">
                      <p
                        className="font-medium text-foreground"
                        data-oid=":3mzfwu"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="93hf9-0"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="aa5fejt">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="7:nz_5j"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="0qnqpuy"
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
          data-oid="crtrc6y"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="vafd9io"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="vjarruk"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="ij8.hq.">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="kn2zsd9"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="8y1:kr8"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="10.yt.v"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="q482_4e"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="q2cbd4."
          >
            <div className="text-center" data-oid="ij83iqp">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="5-0u8ld"
              />

              <p className="text-muted-foreground" data-oid="_b19.oq">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
