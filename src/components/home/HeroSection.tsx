
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import DashboardMockup from './DashboardMockup';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            AI-Powered Crypto Trading on <span className="text-gold">Autopilot</span>
          </h1>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            CoinHive leverages advanced AI algorithms to automate your cryptocurrency trading, 
            maximizing profits while you focus on what matters most.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#pricing" className="neumorphic-button">
              Get Started
            </a>
            <a href="#how-it-works" className="neumorphic-button">
              Learn More
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="mt-16 max-w-5xl mx-auto" delay={300}>
          <DashboardMockup />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
