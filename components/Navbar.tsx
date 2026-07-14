'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl text-white hidden sm:inline">Deriv Trade</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </Link>
            <Link href="#trading" className="text-gray-300 hover:text-white transition">
              Trading
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white transition">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-primary-500 font-medium hover:text-primary-400 transition">
              Login
            </button>
            <button className="btn btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-800 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="#features" className="block text-gray-300 hover:text-white transition py-2">
              Features
            </Link>
            <Link href="#trading" className="block text-gray-300 hover:text-white transition py-2">
              Trading
            </Link>
            <Link href="#testimonials" className="block text-gray-300 hover:text-white transition py-2">
              Testimonials
            </Link>
            <Link href="#contact" className="block text-gray-300 hover:text-white transition py-2">
              Contact
            </Link>
            <button className="w-full px-4 py-2 text-primary-500 font-medium hover:text-primary-400 transition">
              Login
            </button>
            <button className="w-full btn btn-primary">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
