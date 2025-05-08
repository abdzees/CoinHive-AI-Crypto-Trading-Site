
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
            <a href="#pricing" className="neumorphic-button bg-gold text-background shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
              Get Started
            </a>
            <a href="#how-it-works" className="neumorphic-button shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              Learn More
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal className="mt-16 max-w-5xl mx-auto" delay={300}>
          <div className="shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-xl">
            <DashboardMockup />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
