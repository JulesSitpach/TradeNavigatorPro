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
    <div className="min-h-screen bg-background p-6" data-oid="m27u0l:">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="tsgnp-y">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="i4gj4:1">
          <div data-oid="bwb8._2">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="nz4jk5n"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="ypif5tv">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="-9sljug">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="b1ec2vt"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="d8jpytd" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="r7.6sf6"
            >
              <Icons.Settings className="w-4 h-4" data-oid="65s1ua_" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="je388ux"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="zuk-ras"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="12db3cj"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="3tk-sk-"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="ys.yluv"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="vdp0ehq"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="vq4fkuq"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="mqqq2s1"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="q6lpsmn"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="k05.ve.">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="0mbay0p"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="70c3fkk"
          >
            <div className="p-6 border-b border-border" data-oid="dir1ayd">
              <div
                className="flex items-center justify-between"
                data-oid="tijnnoj"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="ot9e82s"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="5u9vz2-"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="fwl_hfv">
              <div className="space-y-4" data-oid="e_4qn2i">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="dlb5u7e"
                  >
                    <div className="flex items-center gap-4" data-oid="h1es8ne">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="nozy8-x"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="r55:8ow">
                        <p
                          className="font-medium text-foreground"
                          data-oid=":ub51iv"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="i8vzmch"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="tbsrcbg">
                      <p
                        className="font-medium text-foreground"
                        data-oid="mgaau65"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="jp08ogo"
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
            data-oid="qpwi5y-"
          >
            <div className="p-6 border-b border-border" data-oid="ptizmwp">
              <div
                className="flex items-center justify-between"
                data-oid="j.-1ggl"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="ok2djb5"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="0-7.6a8"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="39uz1z0" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="u_qni0h">
              <div className="space-y-4" data-oid="8ec79bf">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid=".0jpgsv"
                  >
                    <div data-oid="q2-vs.1">
                      <p
                        className="font-medium text-foreground"
                        data-oid="zzlr3zy"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="t8wxieq"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="byhpt08">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="hloak-n"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="d14xbws"
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
          data-oid="vjoe1zg"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="_4po-ci"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="p8n:z1q"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="tty.kmf">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="srbfn5q"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="2ilg9ez"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="p.3rk99"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="5nsxzf0"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="f_z289e"
          >
            <div className="text-center" data-oid="qweb2k2">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="ha4dpnr"
              />

              <p className="text-muted-foreground" data-oid="h0v3zzi">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
