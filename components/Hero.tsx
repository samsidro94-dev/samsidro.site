'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-600/10 border border-primary-600/30 rounded-full px-4 py-2">
              <TrendingUp size={20} className="text-primary-500" />
              <span className="text-primary-400 text-sm font-medium">Trade with Confidence</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Master the Markets with <span className="text-primary-500">Advanced Tools</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Trade Forex, Cryptocurrencies, Binary Options, and more with our intuitive platform. Access real-time data, advanced charts, and powerful trading tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn btn-primary flex items-center justify-center space-x-2 group">
                <span>Start Trading Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="btn btn-secondary flex items-center justify-center space-x-2">
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-dark-700">
              <div>
                <p className="text-3xl font-bold text-primary-500">50K+</p>
                <p className="text-gray-400 text-sm">Active Traders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-500">$1B+</p>
                <p className="text-gray-400 text-sm">Daily Volume</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-500">24/7</p>
                <p className="text-gray-400 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block">
            <div className="card-hover h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent" />
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <TrendingUp size={80} className="text-primary-500/20 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Trading Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
