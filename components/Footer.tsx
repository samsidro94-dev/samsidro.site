'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900/50 border-t border-dark-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="font-bold text-white">Deriv Trade</span>
            </div>
            <p className="text-gray-400 text-sm">Your trusted platform for global trading</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Trading Terminal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Markets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail size={16} />
                <span>support@derivtrade.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+1 (800) 000-0000</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Deriv Trading Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
