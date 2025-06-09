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
    <div className="min-h-screen bg-background p-6" data-oid="z.lw.y6">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="0-sf:oq">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="08lbiag">
          <div data-oid="_d:0udp">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="x:tn61c"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="u4w_jv_">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="y-tm90e">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="4mx5bi9"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="_ayhhy." />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="bde5y3s"
            >
              <Icons.Settings className="w-4 h-4" data-oid="oq8ro2:" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid=":emsfn."
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="t7uoq-r"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="dzv2ngp"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="w:qkz6p"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="2dwycgj"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="yafbqe:"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="up.bq32"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="wawg1gw"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="61:tid1"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="ozz_.y_">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="-f_9rj."
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="-0l5g9m"
          >
            <div className="p-6 border-b border-border" data-oid=":jgybtq">
              <div
                className="flex items-center justify-between"
                data-oid="g8vfooq"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="85er49o"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="0dbih5g"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="ka-7izi">
              <div className="space-y-4" data-oid="ligvr-8">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="bwii7rj"
                  >
                    <div className="flex items-center gap-4" data-oid="vaamixo">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="8rm8ke3"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="n2rc4q4">
                        <p
                          className="font-medium text-foreground"
                          data-oid="aqdu3oq"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="2786c-2"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="y9v_zhm">
                      <p
                        className="font-medium text-foreground"
                        data-oid="f:8b2cu"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="7k_lvvp"
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
            data-oid=".bmi_j_"
          >
            <div className="p-6 border-b border-border" data-oid="-ho7n8m">
              <div
                className="flex items-center justify-between"
                data-oid="8rvnw:3"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid=".6-ryz4"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="iegv32b"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="aq.puqo" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="9jk7e.e">
              <div className="space-y-4" data-oid="v1_fo89">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="c31wki7"
                  >
                    <div data-oid="k2r9:s4">
                      <p
                        className="font-medium text-foreground"
                        data-oid=":txei6k"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="816d5b:"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="7zynqnu">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="ua7jtxc"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="m._7tih"
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
          data-oid="x8w-:r:"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="-7mic5a"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="uajipp9"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="zqihiax">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="12o8qt."
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="43evfoq"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="qeljpem"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="uti-tbh"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="88_rv76"
          >
            <div className="text-center" data-oid="pkexf7.">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid=":dv0yfr"
              />

              <p className="text-muted-foreground" data-oid="4er0qau">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
