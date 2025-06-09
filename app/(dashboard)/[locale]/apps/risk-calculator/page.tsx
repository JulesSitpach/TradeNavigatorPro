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
    <div className="min-h-screen bg-background p-6" data-oid="rmdpf42">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="yyqt9pp">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="lc:elu-">
          <div data-oid="d.vgsyb">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="y73-0_x"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="40bzwyr">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="el5hv_s">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="-e5kcvf"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="1wavn65" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="j-x2:qc"
            >
              <Icons.Settings className="w-4 h-4" data-oid="kd.t-0j" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="i57pzmp"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="1xf4hf9"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid=":x1-lrm"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="auw.0un"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="_k.mtut"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="3oor6qt"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="hae1f1z"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="v93k-rp"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="j7-h8:."
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="c29rg2e">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="o2-ix0b"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="mr_rb2o"
          >
            <div className="p-6 border-b border-border" data-oid="tqh3n03">
              <div
                className="flex items-center justify-between"
                data-oid="23.zoc3"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="9d-9931"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid=":e0v1j."
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="-j8tp7-">
              <div className="space-y-4" data-oid="-j91uc7">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="b.1p4bj"
                  >
                    <div className="flex items-center gap-4" data-oid="g-vxtew">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="oyjn9n."
                      >
                        {trade.action}
                      </div>
                      <div data-oid="kkwrm7e">
                        <p
                          className="font-medium text-foreground"
                          data-oid="s97mp0j"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="4orzai-"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="9tz36g_">
                      <p
                        className="font-medium text-foreground"
                        data-oid="hajxnc0"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="8vx.vud"
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
            data-oid="9.hc9.-"
          >
            <div className="p-6 border-b border-border" data-oid="hloz0ql">
              <div
                className="flex items-center justify-between"
                data-oid="-y2oale"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="n.x9vxc"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid=".j.d9j3"
                >
                  <Icons.Plus className="w-4 h-4" data-oid=".xl_133" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="sv20bxb">
              <div className="space-y-4" data-oid="8fy9nrw">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="ry93z4_"
                  >
                    <div data-oid="ah4x90b">
                      <p
                        className="font-medium text-foreground"
                        data-oid="m2t:5e0"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="oni:-dd"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid=".2rfz6o">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="3vm98jr"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="dxyoteb"
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
          data-oid="rmbro6j"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="0e2.1oj"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="lvl12mq"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="dyhmaei">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid=".6:789f"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="4.o8s_y"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="o9000ju"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="3:achth"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="vjd_nzl"
          >
            <div className="text-center" data-oid="gdg2vj:">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="n9n-.e:"
              />

              <p className="text-muted-foreground" data-oid="ku9e.3:">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
