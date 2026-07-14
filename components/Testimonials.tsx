'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Professional Trader',
    image: '👨‍💼',
    content: 'The platform has transformed my trading experience. The tools are intuitive and powerful.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Crypto Investor',
    image: '👩‍💻',
    content: 'Best trading platform I\'ve used. The charts and analysis tools are top-notch.',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Forex Trader',
    image: '👨‍🔬',
    content: 'Fast execution, great support, and competitive spreads. Highly recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Traders Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied traders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{testimonial.image}</span>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
