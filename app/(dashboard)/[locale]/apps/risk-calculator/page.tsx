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
    <div className="min-h-screen bg-background p-6" data-oid=":py3psd">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="o3a:d1w">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid="bw4mzr3">
          <div data-oid="-saum94">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="vinxldl"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="l:7cjac">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="3irh1-4">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="jtdmsl6"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="ac_s65c" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="zdtv8vj"
            >
              <Icons.Settings className="w-4 h-4" data-oid="o2e78m:" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="3zg9.bm"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="m-h0mro"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="-m_mp3a"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="vp8n14y"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid="704khdv"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="5koymi0"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="5:sg0j7"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid=".ab7-27"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="4xte5j:"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="8-gga2y">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="nte.aes"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="e4z8iec"
          >
            <div className="p-6 border-b border-border" data-oid="d8n-6tk">
              <div
                className="flex items-center justify-between"
                data-oid="1np_rdy"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="mofra1g"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="tfyq.it"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="oiet:c.">
              <div className="space-y-4" data-oid=":ka2gat">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="x_v2406"
                  >
                    <div className="flex items-center gap-4" data-oid="r10-zz_">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="-90_0hu"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="2xqru96">
                        <p
                          className="font-medium text-foreground"
                          data-oid=":g91myt"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="s4:gohm"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="8zctnzc">
                      <p
                        className="font-medium text-foreground"
                        data-oid="lejcs7w"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid=".t:mjsd"
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
            data-oid="wlet-j_"
          >
            <div className="p-6 border-b border-border" data-oid="m:lbrp2">
              <div
                className="flex items-center justify-between"
                data-oid="1xqyl3g"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="st3u.r_"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="i4x4eua"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="ocba4l6" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="uw9zsgs">
              <div className="space-y-4" data-oid="q627yzy">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="sy1qsh1"
                  >
                    <div data-oid="wv8mzsg">
                      <p
                        className="font-medium text-foreground"
                        data-oid="5ivdd69"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="v-re7_p"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="2nno93y">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="_2my7ow"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="4b_eebp"
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
          data-oid="-mfo9bn"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="q.9qkoe"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="5id85w2"
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid="gn-tn_c">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="5s696v2"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="s.06iv6"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="npfhkiv"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="41j07s0"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="1.wegp6"
          >
            <div className="text-center" data-oid="m7pfmpt">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="-klvqb3"
              />

              <p className="text-muted-foreground" data-oid="2ys97zw">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
