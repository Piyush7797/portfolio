import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell,
  PieChart, Pie, Legend
} from 'recharts';
import { CUSTOMER_ANALYTICS_DATA } from '../data/portfolioData';

export const DataExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dimension, setDimension] = useState<'category' | 'demographics'>('category');

  // Filtered customer behavior data
  const categoryData = selectedCategory === 'All'
    ? CUSTOMER_ANALYTICS_DATA.categories
    : CUSTOMER_ANALYTICS_DATA.categories.filter((c) => c.name === selectedCategory);

  const totalFilteredRevenue = categoryData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalFilteredItems = categoryData.reduce((acc, curr) => acc + curr.items, 0);

  // Normalized BarChart data structure
  const chartDisplayData = dimension === 'category'
    ? categoryData.map((c) => ({ label: c.name, revenue: c.revenue, count: c.items }))
    : CUSTOMER_ANALYTICS_DATA.demographics.map((d) => ({ label: d.group.split(' ')[0], revenue: d.revenue, count: d.count }));

  const BAR_COLORS = ['#38bdf8', '#818cf8', '#a78bfa', '#34d399', '#f472b6'];

  return (
    <section id="data-lab" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Label Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] font-mono text-xs text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">05 / DATA, MADE VISIBLE</span>
          <span>3,900 VERIFIED SHOPPING RECORDS</span>
        </div>

        {/* Section Headline */}
        <div className="py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
              Explore the story <br />
              <span className="font-serif italic text-slate-200">
                hidden inside the numbers.
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light">
              Aggregated insights from the Customer Shopping Behavior dataset, cleaned in Python and queried in MySQL.
            </p>
          </div>

          {/* Dimension Toggle */}
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => setDimension('category')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                dimension === 'category'
                  ? 'bg-white text-slate-950 font-medium'
                  : 'text-slate-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              By Category
            </button>
            <button
              onClick={() => setDimension('demographics')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                dimension === 'demographics'
                  ? 'bg-white text-slate-950 font-medium'
                  : 'text-slate-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              By Age Group
            </button>
          </div>
        </div>

        {/* Interactive Explorer Container */}
        <div className="space-y-6">
          
          {/* Filter Bar */}
          <div className="clean-card p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-500 mr-1">Filter:</span>
              {['All', 'Clothing', 'Accessories', 'Footwear', 'Outerwear'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-slate-500 text-[11px]">
              {selectedCategory === 'All' ? 'Showing all categories' : `Filtered: ${selectedCategory}`}
            </span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="clean-card p-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">Selected Revenue</span>
              <span className="text-2xl font-light text-white block mt-1">
                ${totalFilteredRevenue.toLocaleString()}
              </span>
              <span className="text-[11px] text-cyan-400 font-mono">
                {selectedCategory === 'All' ? '100% of Catalog' : `${((totalFilteredRevenue / 233081) * 100).toFixed(1)}% of Catalog`}
              </span>
            </div>

            <div className="clean-card p-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">Total Items</span>
              <span className="text-2xl font-light text-slate-200 block mt-1">
                {totalFilteredItems.toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Units Sold</span>
            </div>

            <div className="clean-card p-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">Subscriber Rate</span>
              <span className="text-2xl font-light text-violet-300 block mt-1">
                {CUSTOMER_ANALYTICS_DATA.kpis.subscriptionRate}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">84% Repeat Rate</span>
            </div>

            <div className="clean-card p-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase block">Avg Satisfaction</span>
              <span className="text-2xl font-light text-emerald-400 block mt-1">
                {CUSTOMER_ANALYTICS_DATA.kpis.avgRating}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Normalized Score</span>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bar Chart */}
            <div className="lg:col-span-7 clean-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] font-mono text-xs">
                  <span className="text-slate-300">
                    {dimension === 'category' ? 'REVENUE BY CATEGORY ($)' : 'REVENUE BY AGE BRACKET ($)'}
                  </span>
                  <span className="text-slate-500">USD</span>
                </div>
                <div className="h-64 w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartDisplayData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="2 2" stroke="#161e2e" vertical={false} />
                      <XAxis
                        dataKey="label"
                        stroke="#475569"
                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                        tickLine={false}
                      />
                      <YAxis
                        stroke="#475569"
                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                        tickFormatter={(val) => `$${val / 1000}k`}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#080c14', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Revenue']}
                      />
                      <Bar dataKey="revenue" radius={[3, 3, 0, 0]}>
                        {chartDisplayData.map((_, i) => (
                          <Cell key={`bar-${i}`} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-500 flex justify-between">
                <span>OBSERVATION</span>
                <span className="text-cyan-400">
                  {dimension === 'category' ? 'Clothing accounts for 44.7% of volume.' : '36–50 demographic leads spending.'}
                </span>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="lg:col-span-5 clean-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] font-mono text-xs">
                  <span className="text-slate-300">SHIPPING DISTRIBUTION</span>
                  <span className="text-slate-500">SHARE</span>
                </div>
                <div className="h-64 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={CUSTOMER_ANALYTICS_DATA.shippingMethods}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={3}
                        dataKey="share"
                        nameKey="method"
                      >
                        {CUSTOMER_ANALYTICS_DATA.shippingMethods.map((_, i) => (
                          <Cell key={`donut-${i}`} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#080c14', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        formatter={(val: any) => [`${val}%`, 'Share']}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: '11px', fontFamily: 'JetBrains Mono' }}
                        formatter={(val) => <span className="text-slate-400">{val}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-500 flex justify-between">
                <span>LOGISTICS</span>
                <span className="text-violet-300">Free + Standard = 44% of orders</span>
              </div>
            </div>
          </div>

          {/* Observations */}
          <div className="clean-card p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 font-light leading-relaxed">
            <div className="space-y-1.5">
              <span className="font-mono text-cyan-400 uppercase tracking-wider block font-medium">
                01 · Core Category
              </span>
              <p>
                Clothing ($104.2K) and Accessories ($74.2K) produce <strong className="text-white font-normal">76.5% of overall sales</strong>. Prioritizing stocking in these categories yields the highest ROI.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-violet-400 uppercase tracking-wider block font-medium">
                02 · Subscription Lift
              </span>
              <p>
                Subscribers show an <strong className="text-white font-normal">84% reorder rate</strong> with minimal sensitivity to discount depth, safeguarding commercial margins.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-emerald-400 uppercase tracking-wider block font-medium">
                03 · Basket Stability
              </span>
              <p>
                Average spend per transaction remains near ~$60 across all age brackets, highlighting that volume frequency drives demographic revenue differences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
