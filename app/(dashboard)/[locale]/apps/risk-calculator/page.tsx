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
    <div className="min-h-screen bg-background p-6" data-oid="xal79.p">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="il95ni:">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="d2li1ra">
          <div data-oid="erw4axd">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid=".bdl_df"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="wc32njh">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="x2uealq">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="0agcw69"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="4efche4" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="jryz5zm"
            >
              <Icons.Settings className="w-4 h-4" data-oid=".22amss" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="zpw:lkh"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="92n5zqc"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="sjzcqnu"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="faz9a02"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="swcu.4t"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="oef5kp_"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="1xke-o5"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="6rzu6_z"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="kwg.h_q"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="i:ssxgk">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="su84smy"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="8jhr-by"
          >
            <div className="p-6 border-b border-border" data-oid="ob0m70.">
              <div
                className="flex items-center justify-between"
                data-oid="5dm3gt9"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="jf6d6mg"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="zvsg7cu"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="jy_15_n">
              <div className="space-y-4" data-oid="0scr_yq">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="3d8ongw"
                  >
                    <div className="flex items-center gap-4" data-oid="c:nr::g">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="-nx2229"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="erp3a51">
                        <p
                          className="font-medium text-foreground"
                          data-oid="m7ss08u"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="nn3j9fh"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="tgvf4mc">
                      <p
                        className="font-medium text-foreground"
                        data-oid="pgzysrz"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="h1zzi6."
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
            data-oid="u612ety"
          >
            <div className="p-6 border-b border-border" data-oid="m1qh01p">
              <div
                className="flex items-center justify-between"
                data-oid="jnbreyh"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="t2s4qcm"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="1dbwogh"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="4mwk5xu" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="k_ytdux">
              <div className="space-y-4" data-oid="phwid78">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="6wyt8y1"
                  >
                    <div data-oid="f1v:6yq">
                      <p
                        className="font-medium text-foreground"
                        data-oid="1u4szcd"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid=".j59s3d"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="1b4ewl1">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="gbwt3bm"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="c9t:.uo"
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
          data-oid="4srtmko"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="d4ntjbp"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="tacutzi"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="g0:i693">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="5gl1:ic"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="gy-haxa"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="zh3jvbx"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="rytonoj"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="4au6-yj"
          >
            <div className="text-center" data-oid="3hvefg9">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="u6rle50"
              />

              <p className="text-muted-foreground" data-oid="alqn.oc">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
