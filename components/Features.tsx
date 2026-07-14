'use client';

import { BarChart3, Zap, Shield, Globe, Clock, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Charts',
    description: 'Professional-grade charting tools with technical analysis indicators',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Lightning-fast order execution with minimal latency',
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Bank-level security with encrypted transactions and data protection',
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Access to Forex, Crypto, Commodities, and more markets worldwide',
  },
  {
    icon: Clock,
    title: '24/7 Trading',
    description: 'Trade around the clock with round-the-clock market access',
  },
  {
    icon: TrendingUp,
    title: 'Real-time Analytics',
    description: 'Live market data and advanced analytical tools for better decisions',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Trading Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to trade successfully in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-hover group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-600/10 rounded-lg group-hover:bg-primary-600/20 transition">
                    <Icon size={24} className="text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
