# Deriv Trading Platform

A modern, professional trading platform built with Next.js, React, and Tailwind CSS. Designed for Forex, Cryptocurrency, Binary Options, and other trading markets.

## Features

✨ **Dark Theme Design** - Modern dark interface optimized for extended trading sessions

📊 **Real-time Charts** - Advanced charting with Recharts integration

⚡ **Fast Performance** - Built with Next.js for optimal performance

🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

🔒 **Security Ready** - Structure prepared for secure authentication

🌐 **Global Markets** - Support for multiple asset classes

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samsidro94-dev/samsidro.site.git

# Navigate to the project
cd samsidro.site

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

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features showcase
│   ├── TradingSection.tsx # Charts and analytics
│   ├── Testimonials.tsx  # User testimonials
│   ├── CTA.tsx           # Call to action
│   └── Footer.tsx        # Footer
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Technology Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: TypeScript

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:

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

## Deployment

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

## API Integration Ready

The platform structure is prepared for:
- Real-time market data integration
- User authentication
- Trading execution
- Portfolio management

## Support

For issues and questions:
- GitHub Issues: [Link to issues]
- Email: support@derivtrade.com

## License

MIT License - Feel free to use this project for your trading platform.

## Next Steps

1. ✅ Configure your trading data sources
2. ✅ Implement authentication system
3. ✅ Connect to market data APIs (e.g., Alpha Vantage, Polygon.io)
4. ✅ Add trading execution endpoints
5. ✅ Deploy to your preferred hosting

---

Built with ❤️ for traders everywhere
