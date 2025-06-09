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
    <div className="min-h-screen bg-background p-6" data-oid="xzg_1ou">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="qrpxh7y">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="3l4dfvl">
          <div data-oid=":7:gjib">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="6ju66l8"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="vbsrbbx">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="xxrx70x">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="mk-uq84"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="yzox935" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="gzfpjzo"
            >
              <Icons.Settings className="w-4 h-4" data-oid="s9dvcx." />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="lte3pr7"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="47nehp_"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="3gk7-tm"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="jcntgmk"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="cnc9z:a"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="tdx44mk"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="8sscje3"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid=".4ou0g2"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="67b-.fq"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="ziw3:9y">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="ak77:6k"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="xvtil5g"
          >
            <div className="p-6 border-b border-border" data-oid="8ctu6fx">
              <div
                className="flex items-center justify-between"
                data-oid="n2qdkva"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="c3xdmb."
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid=":dil8w4"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="hg6m3qg">
              <div className="space-y-4" data-oid="pro:ufq">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="nt_6wxv"
                  >
                    <div className="flex items-center gap-4" data-oid="tj0v4vt">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="a_:qits"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="g.g_y.1">
                        <p
                          className="font-medium text-foreground"
                          data-oid="0ounaat"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="63.wwpo"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="hdqbcgs">
                      <p
                        className="font-medium text-foreground"
                        data-oid="38fq_n9"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid=":z.3hk2"
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
            data-oid="2_1lm8r"
          >
            <div className="p-6 border-b border-border" data-oid="e:5gwsa">
              <div
                className="flex items-center justify-between"
                data-oid="-jcwl::"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="6mzdvav"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="3m38ouy"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="7.8:wzb" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="50lrgpf">
              <div className="space-y-4" data-oid="mfad.v0">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="niw01fy"
                  >
                    <div data-oid="q.gn-53">
                      <p
                        className="font-medium text-foreground"
                        data-oid="d:hhov."
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="h1kdd::"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="qhkt4a4">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="noysjr0"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="9n.q4js"
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
          data-oid="akjarw1"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="902-dx:"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="40kgi_e"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="ouc9u5f">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="mx.a.3j"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="922fop9"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="q_4cij7"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="pranf:o"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="3giod5o"
          >
            <div className="text-center" data-oid="7-jelia">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="f8n:pel"
              />
              <p className="text-muted-foreground" data-oid="2csc5ug">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
