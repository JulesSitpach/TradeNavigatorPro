'use client'

import React from 'react';
import { Icons } from '@/components/ui/icons';

// Dashboard stats data
const stats = [
  {
    title: 'Total Portfolio Value',
    value: '$124,580.00',
    change: '+12.5%',
    icon: 'DollarSign',
    trend: 'up'
  },
  {
    title: 'Active Positions',
    value: '24',
    change: '+3',
    icon: 'TrendingUp',
    trend: 'up'
  },
  {
    title: 'Day P&L',
    value: '+$2,840.00',
    change: '+2.3%',
    icon: 'Activity',
    trend: 'up'
  },
  {
    title: 'Win Rate',
    value: '68.5%',
    change: '+1.2%',
    icon: 'BarChart3',
    trend: 'up'
  }
];

// Recent trades data
const recentTrades = [
  { symbol: 'AAPL', action: 'BUY', quantity: 100, price: 180.50, time: '10:30 AM' },
  { symbol: 'TSLA', action: 'SELL', quantity: 50, price: 242.80, time: '09:45 AM' },
  { symbol: 'MSFT', action: 'BUY', quantity: 75, price: 380.20, time: '09:15 AM' },
  { symbol: 'GOOGL', action: 'SELL', quantity: 25, price: 2650.00, time: '08:30 AM' },
];

// Watchlist data
const watchlist = [
  { symbol: 'NVDA', price: 450.20, change: '+5.80', changePercent: '+1.31%' },
  { symbol: 'AMD', price: 120.45, change: '-2.10', changePercent: '-1.71%' },
  { symbol: 'META', price: 380.90, change: '+8.20', changePercent: '+2.20%' },
  { symbol: 'NFLX', price: 485.60, change: '-12.40', changePercent: '-2.49%' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Trading Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your trading overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Icons.RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
              <Icons.Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = Icons[stat.icon as keyof typeof Icons];
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <Icons.TrendingUp className="w-4 h-4" />
                    ) : (
                      <Icons.TrendingDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Trades */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Recent Trades</h2>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentTrades.map((trade, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        trade.action === 'BUY' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {trade.action}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{trade.symbol}</p>
                        <p className="text-sm text-muted-foreground">{trade.quantity} shares</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">${trade.price}</p>
                      <p className="text-sm text-muted-foreground">{trade.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Watchlist */}
          <div className="bg-card border border-border rounded-lg">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Watchlist</h2>
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <Icons.Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {watchlist.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{stock.symbol}</p>
                      <p className="text-sm text-muted-foreground">${stock.price}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${
                        stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stock.change}
                      </p>
                      <p className={`text-xs ${
                        stock.changePercent.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
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
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Portfolio Performance</h2>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">1D</button>
              <button className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded">1W</button>
              <button className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded">1M</button>
              <button className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground rounded">1Y</button>
            </div>
          </div>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icons.BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Chart will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}