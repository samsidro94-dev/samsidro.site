'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { time: '00:00', price: 1200, volume: 400 },
  { time: '04:00', price: 1350, volume: 300 },
  { time: '08:00', price: 1100, volume: 200 },
  { time: '12:00', price: 1800, volume: 278 },
  { time: '16:00', price: 1390, volume: 189 },
  { time: '20:00', price: 1500, volume: 239 },
  { time: '24:00', price: 2000, volume: 221 },
];

export default function TradingSection() {
  return (
    <section id="trading" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Trading Data
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time market charts and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Price Movement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={{ fill: '#0ea5e9', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-6">Trading Volume</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="volume" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
