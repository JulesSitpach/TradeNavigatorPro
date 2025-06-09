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
    <div className="min-h-screen bg-background p-6" data-oid="4y4g44e">
      <div className="max-w-7xl mx-auto space-y-6" data-oid="j.k.c.1">
        {/* Header */}
        <div className="flex items-center justify-between" data-oid=".axvu9z">
          <div data-oid="du_t9ud">
            <h1
              className="text-3xl font-bold text-foreground"
              data-oid="bzc-o:s"
            >
              Trading Dashboard
            </h1>
            <p className="text-muted-foreground" data-oid="v:_b4nq">
              Welcome back! Here's your trading overview.
            </p>
          </div>
          <div className="flex items-center gap-4" data-oid="wngrcd3">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-oid="hqzdift"
            >
              <Icons.RefreshCw className="w-4 h-4" data-oid="amw37v0" />
              Refresh
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
              data-oid="jd-.:1p"
            >
              <Icons.Settings className="w-4 h-4" data-oid="2.t-8k." />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-oid="pts4.3g"
        >
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                data-oid="fiji2:9"
              >
                <div
                  className="flex items-center justify-between mb-4"
                  data-oid="xldw__2"
                >
                  <div
                    className="p-2 bg-primary/10 rounded-lg"
                    data-oid="78rtq.2"
                  >
                    <IconComponent
                      className="w-6 h-6 text-primary"
                      data-oid=".ec-02l"
                    />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                    data-oid="s-kkl25"
                  >
                    {stat.trend === "up" ? (
                      <Icons.TrendingUp
                        className="w-4 h-4"
                        data-oid="9:zn75h"
                      />
                    ) : (
                      <Icons.TrendingDown
                        className="w-4 h-4"
                        data-oid="ljuu1u5"
                      />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-1"
                  data-oid="nv6lxie"
                >
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="5sjw3dd">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="t8tzz5-"
        >
          {/* Recent Trades */}
          <div
            className="lg:col-span-2 bg-card border border-border rounded-lg"
            data-oid="r5_:2xh"
          >
            <div className="p-6 border-b border-border" data-oid="-v7c11_">
              <div
                className="flex items-center justify-between"
                data-oid="lovt9p8"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="-5heggv"
                >
                  Recent Trades
                </h2>
                <button
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  data-oid="a7ft.t."
                >
                  View All
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="6d-qwrm">
              <div className="space-y-4" data-oid="4:rptlq">
                {recentTrades.map((trade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                    data-oid="wrx-mn5"
                  >
                    <div className="flex items-center gap-4" data-oid="-_e5q05">
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.action === "BUY"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                        data-oid="bbds6ve"
                      >
                        {trade.action}
                      </div>
                      <div data-oid="sy6ni.p">
                        <p
                          className="font-medium text-foreground"
                          data-oid="2qbztbn"
                        >
                          {trade.symbol}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="v5bmjpq"
                        >
                          {trade.quantity} shares
                        </p>
                      </div>
                    </div>
                    <div className="text-right" data-oid="39_rct8">
                      <p
                        className="font-medium text-foreground"
                        data-oid="hbmbv5z"
                      >
                        ${trade.price}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="vzds6oa"
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
            data-oid="20v_fi8"
          >
            <div className="p-6 border-b border-border" data-oid="pl32cua">
              <div
                className="flex items-center justify-between"
                data-oid="m-.5vg2"
              >
                <h2
                  className="text-xl font-semibold text-foreground"
                  data-oid="nz.8lrr"
                >
                  Watchlist
                </h2>
                <button
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  data-oid="ssdczbm"
                >
                  <Icons.Plus className="w-4 h-4" data-oid="mu_:n19" />
                </button>
              </div>
            </div>
            <div className="p-6" data-oid="0hylbbz">
              <div className="space-y-4" data-oid="o6hluyo">
                {watchlist.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-oid="98_1gjk"
                  >
                    <div data-oid=":lbvfqa">
                      <p
                        className="font-medium text-foreground"
                        data-oid="h:-y:vx"
                      >
                        {stock.symbol}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="0:-nsbp"
                      >
                        ${stock.price}
                      </p>
                    </div>
                    <div className="text-right" data-oid="7q91eul">
                      <p
                        className={`text-sm font-medium ${
                          stock.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="li7g1vl"
                      >
                        {stock.change}
                      </p>
                      <p
                        className={`text-xs ${
                          stock.changePercent.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                        data-oid="e01sg3:"
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
          data-oid="t.4.afu"
        >
          <div
            className="flex items-center justify-between mb-6"
            data-oid="n1_6o1y"
          >
            <h2
              className="text-xl font-semibold text-foreground"
              data-oid="_-p2ww."
            >
              Portfolio Performance
            </h2>
            <div className="flex items-center gap-2" data-oid=".a9itck">
              <button
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
                data-oid="kasmvav"
              >
                1D
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="gglv851"
              >
                1W
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="j76fdo0"
              >
                1M
              </button>
              <button
                className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded"
                data-oid="4uh321t"
              >
                1Y
              </button>
            </div>
          </div>
          <div
            className="h-64 bg-muted/30 rounded-lg flex items-center justify-center"
            data-oid="93cdrej"
          >
            <div className="text-center" data-oid="o0df1bo">
              <Icons.BarChart3
                className="w-12 h-12 text-muted-foreground mx-auto mb-2"
                data-oid="mj9aqz6"
              />

              <p className="text-muted-foreground" data-oid="1pd.q-v">
                Chart will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
