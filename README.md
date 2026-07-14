# Deriv Trading Platform

A modern, professional trading platform built with Next.js, React, and Tailwind CSS. Includes integrated joke generator and weather dashboard!

## ✨ Features

### Trading Platform
- 💼 Modern dark theme design optimized for trading
- 📊 Real-time trading charts with Recharts
- ⚡ Lightning-fast performance with Next.js
- 📱 Fully responsive design
- 🎨 Professional UI with smooth animations
- 🔐 Security-ready authentication structure
- 🌍 Support for multiple asset classes

### Weather Dashboard
- 🌤️ Real-time weather data for any city
- 📍 Geolocation support with weather lookup
- 📈 24-hour forecast visualization
- 🌡️ Temperature in Celsius or Fahrenheit
- 💨 Wind speed, humidity, pressure metrics
- 👁️ Visibility and detailed weather conditions
- 🎯 Beautiful weather icons and visualization

### Joke Generator
- 😂 Random jokes from multiple categories
- 🎭 Different joke types (General, Programming, Knock-Knock)
- 📋 One-click copy to clipboard
- 🎨 Smooth animations and transitions
- ♾️ Unlimited jokes available

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samsidro94-dev/samsidro.site.git

# Navigate to project
cd samsidro.site

# Switch to the development branch
git checkout deriv-trading-platform

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── joke-generator/
│   │   └── page.tsx            # Joke generator page
│   └── weather-dashboard/
│       └── page.tsx            # Weather dashboard page
├── components/
│   ├── Navbar.tsx              # Navigation
│   ├── Hero.tsx                # Hero section
│   ├── Features.tsx            # Features showcase
│   ├── TradingSection.tsx       # Trading charts
│   ├── WeatherDashboardPreview.tsx  # Weather preview
│   ├── JokeGeneratorPreview.tsx     # Joke preview
│   ├── Testimonials.tsx        # User testimonials
│   ├── CTA.tsx                 # Call to action
│   └── Footer.tsx              # Footer
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript
- **APIs**: 
  - Open-Meteo (Weather Data)
  - Official Joke API

## 📖 Available Pages

### Home Page `/`
Main landing page with all features preview and CTAs

### Weather Dashboard `/weather-dashboard`
- Search for any city worldwide
- View current weather conditions
- 24-hour forecast
- Toggle between Celsius and Fahrenheit
- Detailed metrics (humidity, wind, pressure, visibility)

### Joke Generator `/joke-generator`
- Generate random jokes
- Filter by category (General, Programming, Knock-Knock)
- Copy jokes to clipboard
- Beautiful animations and effects

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:

```js
colors: {
  primary: { ... },
  dark: { ... },
  success: '#10b981',
  danger: '#ef4444',
}
```

### Content
- Hero section: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Testimonials: `components/Testimonials.tsx`

## 🌐 API Integration

### Weather API
- **Provider**: Open-Meteo (Free, no API key required)
- **Endpoints**:
  - Geocoding: `https://geocoding-api.open-meteo.com/v1/search`
  - Weather: `https://api.open-meteo.com/v1/forecast`
- **Data**: Current conditions, hourly forecasts, detailed metrics

### Joke API
- **Provider**: Official Joke API (Free)
- **Endpoints**:
  - Random: `https://official-joke-api.appspot.com/random_joke`
  - By Type: `https://official-joke-api.appspot.com/jokes/{type}/random`
- **Categories**: General, Programming, Knock-Knock

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

```bash
# Update next.config.js for static export
# npm run build
# Push to GitHub Pages branch
```

## 📚 Features Implementation Guide

### Add New Weather Feature
1. Edit `/app/weather-dashboard/page.tsx`
2. Modify the weather data fetching logic
3. Add new UI components as needed

### Add New Joke Category
1. Update joke types in `/app/joke-generator/page.tsx`
2. Add category button to the UI
3. Test with the API

### Customize Trading Section
1. Edit `/components/TradingSection.tsx`
2. Connect to your trading data API
3. Update chart configurations

## 🔗 Links

- **GitHub**: [samsidro94-dev/samsidro.site](https://github.com/samsidro94-dev/samsidro.site)
- **Live Site**: [samsidro.site](https://samsidro.site)
- **Open-Meteo API**: [open-meteo.com](https://open-meteo.com)
- **Joke API**: [official-joke-api.appspot.com](https://official-joke-api.appspot.com)

## 📝 License

MIT License - Feel free to use this project for your platform.

## 🎯 Next Steps

1. ✅ Customize branding and colors
2. ✅ Add more trading features
3. ✅ Integrate real market data APIs
4. ✅ Implement user authentication
5. ✅ Deploy to production

---

Built with ❤️ for traders and developers
