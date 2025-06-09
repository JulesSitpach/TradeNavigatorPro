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
    <div className="min-h-screen bg-background p-6" data-oid="prqq25x">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="gea1bug">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid=".1w078v">
          <div data-oid="pq78rl0">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="ne7gcwh"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="94856nf">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="qul.9wp">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="6j4vior"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="owd_jci" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="9.v.:7y"
            >
              <Icons.Settings className="w-4 h-4" data-oid=":0kugh." />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="wjmai6l"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="_vple9z"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="jvndlsd"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="ux0w3au"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="3grs0jl"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="egd_2g_"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="y8e1z0:"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="81udq6z"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="7zn6mvl"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="a3b5kk_">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="hc.89w6"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="7uuqige"
          >
            <div className="p-6 border-b border-border" data-oid="_w1lati">
              <div
                className="flex items-center justify-between"
                data-oid="lgf.iy-"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="r.3-.ie"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="-fh8m1_"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="j7ir50t">
              <div className="space-y-4" data-oid="bknupjt">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="ckq.uid"
                  >
                    <div className="flex items-center gap-4" data-oid="88--4ob">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="zzp.er_"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="ir:gs-9">
                        <p
                          className="font-medium text-foreground"
                          data-oid="7_:wi5f"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="s3m0f9p"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="0qa2xoz">
                      <p
                        className="font-medium text-foreground"
                        data-oid="gk0sls3"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="oy4:3ej"
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
            data-oid="aiqd-xq"
          >
            <div className="p-6 border-b border-border" data-oid="i6d71xa">
              <div
                className="flex items-center justify-between"
                data-oid="-kcsho1"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="c7g4lh_"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid=".erqqzj"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="u5k47ot" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="9-fqxel">
              <div className="space-y-4" data-oid="h_ut43p">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="_fvvzh_"
                  >
                    <div data-oid="8un.-pa">
                      <p
                        className="font-medium text-foreground"
                        data-oid="xih0wyf"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="yi-mei4"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="qqqi:q8">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="3shrjep"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="j92ifk6"
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
          data-oid="gcsh6ts"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="hgcb.4d"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="om.fvgv"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="dtragck">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="60a5xhk"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="fqcox.7"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="ae.ac6h"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="l4mvixt"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="_mwdst3"
          >
            <div className="text-center" data-oid="rqvbwx2">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="aw111f5"
              />

              <p className="text-muted-foreground" data-oid="_a3s:t_">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
