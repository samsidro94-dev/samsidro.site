'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="card-hover text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our platform today and get access to professional trading tools, real-time data, and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary flex items-center justify-center space-x-2 group">
              <span>Open Free Account</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="btn btn-secondary">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
