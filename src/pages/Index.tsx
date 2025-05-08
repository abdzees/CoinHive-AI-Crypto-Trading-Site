
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MissionSection from '@/components/home/MissionSection';
import PricingSection from '@/components/home/PricingSection';
import FaqSection from '@/components/home/FaqSection';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = 'CoinHive - AI Crypto Trading Platform';
  }, []);

  return (
    <div className="animate-fade-in">
      <Navigation />
      <HeroSection />
      <FeaturedSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <MissionSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
