import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TradingSection from '@/components/TradingSection';
import WeatherDashboardPreview from '@/components/WeatherDashboardPreview';
import JokeGeneratorPreview from '@/components/JokeGeneratorPreview';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <Features />
      <TradingSection />
      <WeatherDashboardPreview />
      <JokeGeneratorPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
