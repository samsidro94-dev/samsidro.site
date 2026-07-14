'use client';

import { useState } from 'react';
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Eye,
  Gauge,
  Search,
  MapPin,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  icon: string;
}

interface ForecastItem {
  time: string;
  temp: number;
  description: string;
  icon: string;
}

const WeatherIcon = ({ icon, size = 48 }: { icon: string; size?: number }) => {
  const iconMap: { [key: string]: JSX.Element } = {
    '01d': <Sun size={size} className="text-yellow-400" />,
    '01n': <Cloud size={size} className="text-gray-300" />,
    '02d': <Cloud size={size} className="text-gray-300" />,
    '02n': <Cloud size={size} className="text-gray-400" />,
    '03d': <Cloud size={size} className="text-gray-300" />,
    '03n': <Cloud size={size} className="text-gray-400" />,
    '04d': <Cloud size={size} className="text-gray-400" />,
    '04n': <Cloud size={size} className="text-gray-500" />,
    '09d': <CloudRain size={size} className="text-blue-400" />,
    '09n': <CloudRain size={size} className="text-blue-400" />,
    '10d': <CloudRain size={size} className="text-blue-400" />,
    '10n': <CloudRain size={size} className="text-blue-400" />,
    '11d': <CloudRain size={size} className="text-blue-500" />,
    '11n': <CloudRain size={size} className="text-blue-500" />,
    '13d': <Cloud size={size} className="text-white" />,
    '13n': <Cloud size={size} className="text-white" />,
    '50d': <Cloud size={size} className="text-gray-400" />,
    '50n': <Cloud size={size} className="text-gray-500" />,
  };

  return iconMap[icon] || <Cloud size={size} className="text-gray-300" />;
};

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [city, setCity] = useState('London');
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const fetchWeather = async (cityName: string = city) => {
    setLoading(true);
    setError(null);

    try {
      // Using Open-Meteo API (free, no API key required)
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found');
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Fetch weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,visibility,pressure_msl&hourly=temperature_2m,weather_code&temperature_unit=${unit === 'metric' ? 'celsius' : 'fahrenheit'}&wind_speed_unit=${unit === 'metric' ? 'kmh' : 'mph'}`
      );
      const weatherData = await weatherResponse.json();

      const current = weatherData.current;
      const hourly = weatherData.hourly;

      // Map weather codes to descriptions
      const getWeatherDescription = (code: number) => {
        const weatherCodes: { [key: number]: string } = {
          0: 'Clear',
          1: 'Partly Cloudy',
          2: 'Mostly Cloudy',
          3: 'Overcast',
          45: 'Foggy',
          48: 'Foggy',
          51: 'Light Drizzle',
          53: 'Moderate Drizzle',
          55: 'Dense Drizzle',
          61: 'Slight Rain',
          63: 'Moderate Rain',
          65: 'Heavy Rain',
          71: 'Slight Snow',
          73: 'Moderate Snow',
          75: 'Heavy Snow',
          77: 'Snow Grains',
          80: 'Slight Rain Showers',
          81: 'Moderate Rain Showers',
          82: 'Violent Rain Showers',
          85: 'Slight Snow Showers',
          86: 'Heavy Snow Showers',
          95: 'Thunderstorm',
          96: 'Thunderstorm with Hail',
          99: 'Thunderstorm with Hail',
        };
        return weatherCodes[code] || 'Unknown';
      };

      const getWeatherIcon = (code: number) => {
        if (code === 0) return '01d';
        if (code <= 3) return '02d';
        if (code === 45 || code === 48) return '50d';
        if (code >= 51 && code <= 67) return '10d';
        if (code >= 71 && code <= 86) return '13d';
        if (code >= 95) return '11d';
        return '01d';
      };

      setWeather({
        city: name,
        country: country || 'Unknown',
        temperature: Math.round(current.temperature_2m),
        description: getWeatherDescription(current.weather_code),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        visibility: Math.round(current.visibility / 1000),
        pressure: Math.round(current.pressure_msl),
        feelsLike: Math.round(current.apparent_temperature),
        tempMin: Math.round(Math.min(...hourly.temperature_2m.slice(0, 24))),
        tempMax: Math.round(Math.max(...hourly.temperature_2m.slice(0, 24))),
        icon: getWeatherIcon(current.weather_code),
      });

      // Create forecast for next 24 hours
      const forecastData: ForecastItem[] = [];
      for (let i = 0; i < 24; i += 3) {
        const time = new Date(hourly.time[i]);
        forecastData.push({
          time: time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          }),
          temp: Math.round(hourly.temperature_2m[i]),
          description: getWeatherDescription(hourly.weather_code[i]),
          icon: getWeatherIcon(hourly.weather_code[i]),
        });
      }
      setForecast(forecastData);
      setCity(name);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch weather data'
      );
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeather(searchInput);
      setSearchInput('');
    }
  };

  return (
    <main className="min-h-screen bg-dark-950 pt-20">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl text-white hidden sm:inline">Deriv Trade</span>
          </Link>
          <Link
            href="/"
            className="text-primary-400 hover:text-primary-300 transition font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Cloud size={48} className="text-primary-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Weather Dashboard</h1>
          <p className="text-xl text-gray-400">Real-time weather data for your city</p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="card mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for a city..."
                className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setUnit('metric')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  unit === 'metric'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                °C
              </button>
              <button
                type="button"
                onClick={() => setUnit('imperial')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  unit === 'imperial'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                °F
              </button>
            </div>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="card mb-8 border-danger/50 bg-danger/10 flex items-start space-x-3">
            <AlertCircle className="text-danger flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-bold text-danger">Error</h3>
              <p className="text-gray-300">{error}</p>
            </div>
          </div>
        )}

        {/* Weather Display */}
        {loading ? (
          <div className="card flex items-center justify-center py-12">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce delay-100" />
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce delay-200" />
              <span className="text-gray-400 ml-4">Loading weather data...</span>
            </div>
          </div>
        ) : weather ? (
          <div className="space-y-8">
            {/* Main Weather Card */}
            <div className="card-hover">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white flex items-center space-x-2">
                        <MapPin size={24} className="text-primary-500" />
                        <span>
                          {weather.city}, {weather.country}
                        </span>
                      </h2>
                      <p className="text-gray-400 text-lg mt-2">{weather.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="flex items-center">
                      <WeatherIcon icon={weather.icon} size={80} />
                    </div>
                    <div>
                      <p className="text-7xl font-bold text-white">
                        {weather.temperature}°
                      </p>
                      <p className="text-gray-400 text-lg">
                        Feels like {weather.feelsLike}°
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-dark-700">
                    <div>
                      <p className="text-gray-400 text-sm">High</p>
                      <p className="text-2xl font-bold text-primary-400">{weather.tempMax}°</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Low</p>
                      <p className="text-2xl font-bold text-primary-400">{weather.tempMin}°</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Droplets size={20} className="text-blue-400" />
                      <span className="text-gray-400 text-sm">Humidity</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{weather.humidity}%</p>
                  </div>

                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wind size={20} className="text-cyan-400" />
                      <span className="text-gray-400 text-sm">Wind Speed</span>
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {weather.windSpeed} {unit === 'metric' ? 'km/h' : 'mph'}
                    </p>
                  </div>

                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Eye size={20} className="text-yellow-400" />
                      <span className="text-gray-400 text-sm">Visibility</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{weather.visibility} km</p>
                  </div>

                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gauge size={20} className="text-orange-400" />
                      <span className="text-gray-400 text-sm">Pressure</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{weather.pressure} hPa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 24-Hour Forecast */}
            {forecast.length > 0 && (
              <div className="card">
                <h3 className="text-2xl font-bold text-white mb-6">24-Hour Forecast</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {forecast.map((item, index) => (
                    <div
                      key={index}
                      className="bg-dark-700 rounded-lg p-4 text-center hover:bg-dark-600 transition"
                    >
                      <p className="text-gray-400 text-sm font-medium mb-3">{item.time}</p>
                      <div className="flex justify-center mb-3">
                        <WeatherIcon icon={item.icon} size={32} />
                      </div>
                      <p className="text-xl font-bold text-white mb-2">{item.temp}°</p>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="card text-center py-12">
            <Cloud size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Search for a city to get started with weather data
            </p>
            <button
              onClick={() => fetchWeather('London')}
              className="mt-4 btn btn-primary"
            >
              Try London
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
