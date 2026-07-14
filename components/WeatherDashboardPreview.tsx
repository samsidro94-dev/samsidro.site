'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cloud, ArrowRight, MapPin } from 'lucide-react';

export default function WeatherDashboardPreview() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      // Get geolocation data for London
      const geoResponse = await fetch(
        'https://geocoding-api.open-meteo.com/v1/search?name=London&count=1&language=en&format=json'
      );
      const geoData = await geoResponse.json();
      const { latitude, longitude } = geoData.results[0];

      // Fetch weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=celsius`
      );
      const weatherData = await weatherResponse.json();
      const current = weatherData.current;

      setWeather({
        temp: Math.round(current.temperature_2m),
        code: current.weather_code,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="card-hover">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-600/10 border border-primary-600/30 rounded-full px-4 py-2">
                <Cloud size={20} className="text-primary-500" />
                <span className="text-primary-400 text-sm font-medium">Weather Feature</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Real-Time <span className="text-primary-500">Weather Dashboard</span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                Check weather conditions around the world in real-time. Get current conditions, hourly forecasts, and detailed metrics for any city.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={fetchWeather}
                  disabled={loading}
                  className="btn btn-primary flex items-center justify-center space-x-2 group disabled:opacity-50"
                >
                  <span>{loading ? 'Loading...' : 'Check Weather'}</span>
                </button>
                <Link href="/weather-dashboard" className="btn btn-secondary flex items-center justify-center space-x-2 group">
                  <span>Open Dashboard</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </Link>
              </div>

              {weather && (
                <div className="p-4 bg-primary-600/10 border border-primary-600/30 rounded-lg">
                  <p className="text-gray-300 text-sm mb-2">
                    <MapPin size={16} className="inline mr-2 text-primary-500" />
                    Current Weather in London
                  </p>
                  <p className="text-2xl font-bold text-white">{weather.temp}°C</p>
                </div>
              )}
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent rounded-lg" />
                <div className="flex items-center justify-center h-full">
                  <Cloud size={120} className="text-primary-500/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
