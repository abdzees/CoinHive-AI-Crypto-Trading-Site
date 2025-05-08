
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../SectionHeading';
import GlassmorphicCard from '../GlassmorphicCard';
import { Wallet, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Connect Your Wallet',
    description: 'Securely link your cryptocurrency wallets to CoinHive with our military-grade encryption and zero-knowledge integration.',
    icon: Wallet,
    image: '/placeholder.svg'
  },
  {
    title: 'Set Up Your AI Assistant',
    description: 'Configure your personalized AI trading assistant to match your risk tolerance, investment goals, and preferred cryptocurrencies.',
    icon: Settings,
    image: '/placeholder.svg'
  },
  {
    title: 'Automate Your Trading',
    description: 'Let our advanced algorithms analyze market trends, execute trades, and optimize your portfolio while you focus on your life.',
    icon: TrendingUp,
    image: '/placeholder.svg'
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="How CoinHive Works"
            subtitle="Getting started with automated AI trading is simple. Just follow these three steps to begin your journey."
            centered
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <GlassmorphicCard className="h-full flex flex-col">
                <div className="mb-6 h-48 overflow-hidden rounded-md bg-gray-100">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                    <step.icon className="text-gold" size={20} />
                  </div>
                  <h3 className="text-xl">{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </GlassmorphicCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
