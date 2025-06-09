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
    <div className="min-h-screen bg-background p-6" data-oid="md9s.8g">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="f2w3z_5">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="5:vtrks">
          <div data-oid="50t-a4w">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="_kdgbcc"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="w0wpihj">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="c-51uj-">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="tqh:0sr"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="r_n_3ko" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="5t1oy:8"
            >
              <Icons.Settings className="w-4 h-4" data-oid="9wgbz8t" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="h_zcid2"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="imnfaqh"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="s56f454"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="hex_8q5"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="ln-kl3:"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="r.rs4up"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="owirecd"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="g6b.rhd"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="hodtaur"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="030:7i6">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="x367ekm"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="il-2wzi"
          >
            <div className="p-6 border-b border-border" data-oid="-zv8auz">
              <div
                className="flex items-center justify-between"
                data-oid="tpkzmtv"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid=":gwkp4z"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="4r7a5fu"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="-cjyz4t">
              <div className="space-y-4" data-oid="yj4x1t5">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="vyx2ohi"
                  >
                    <div className="flex items-center gap-4" data-oid="1w9yxu5">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="k8xw.kc"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="4a9i749">
                        <p
                          className="font-medium text-foreground"
                          data-oid="awjw2d0"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="9ht3_z-"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="b7d57tw">
                      <p
                        className="font-medium text-foreground"
                        data-oid="7mrz2ag"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="7t1hp4m"
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
            data-oid="91l9myf"
          >
            <div className="p-6 border-b border-border" data-oid="m:uspvc">
              <div
                className="flex items-center justify-between"
                data-oid="2qlhu71"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="byou69j"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="-y42y-b"
                >
                  <Icons.Plus className="w-4 h-4" data-oid=":o53v_g" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="hd7muq6">
              <div className="space-y-4" data-oid="b31uoka">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="gp:g6m7"
                  >
                    <div data-oid="6j083fa">
                      <p
                        className="font-medium text-foreground"
                        data-oid="crxk89m"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="m9-h-:b"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="k9yz07o">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="f221.ye"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="l26g3w0"
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
          data-oid="xz05rfe"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="swr2i:3"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="30_ke3b"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="80m:8dh">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="40dqe6y"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="9uhn1u4"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="-q59x28"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="o7d:_x5"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="v65i6ln"
          >
            <div className="text-center" data-oid="4o0g48m">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="kyfg4jy"
              />

              <p className="text-muted-foreground" data-oid="8jxlc.g">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
