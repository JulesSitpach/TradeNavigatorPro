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
    <div className="min-h-screen bg-background p-6" data-oid="bi3cr58">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="rliv53c">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="e4wx_ui">
          <div data-oid="fg-d:uy">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="4dpp4u6"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="izr2h2b">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="x9wg:9-">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="3y35ub7"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="bq:f1td" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="w4lbbbj"
            >
              <Icons.Settings className="w-4 h-4" data-oid="j5w2rzs" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="69en.af"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="dg3bidx"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="k34.8t8"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="x3nq47w"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="-bt27gq"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="w-z_-1e"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="6ef8h0g"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="-n_43im"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="62cwet-"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="gg4depd">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="9n8q-q9"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="37_azna"
          >
            <div className="p-6 border-b border-border" data-oid="wr2mk1b">
              <div
                className="flex items-center justify-between"
                data-oid="ll3_nlr"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="ydgq0.6"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="czygh7v"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="zwo4:hn">
              <div className="space-y-4" data-oid="knqh6hw">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="xb1yo.k"
                  >
                    <div className="flex items-center gap-4" data-oid="rpicm1w">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="bb4-7a0"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="k7k.6o.">
                        <p
                          className="font-medium text-foreground"
                          data-oid="vb-b_gq"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="syuhogk"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="2.-4c5k">
                      <p
                        className="font-medium text-foreground"
                        data-oid="u164gqh"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="r.8w9v3"
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
            data-oid="ay9qbzu"
          >
            <div className="p-6 border-b border-border" data-oid="co:zzph">
              <div
                className="flex items-center justify-between"
                data-oid="jf0a_mr"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="zuvvnj4"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="-qa3_pd"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="j0q12nd" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="irxe5ow">
              <div className="space-y-4" data-oid="2pgoq:o">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="u:-931z"
                  >
                    <div data-oid="yocv9rm">
                      <p
                        className="font-medium text-foreground"
                        data-oid="g_0s-:t"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="ugh6e_r"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="sho7b7a">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="vrjxpxe"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="5znohjo"
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
          data-oid="m.tjgxs"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="r1ss5i8"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="ubg6e2g"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="ru8pmdd">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="dz.hz53"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="2mljwep"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="ckbsgy0"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="2:0rv.3"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="w2-xq09"
          >
            <div className="text-center" data-oid="iow6lh9">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="ixz84lc"
              />

              <p className="text-muted-foreground" data-oid="5_qc5_6">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
