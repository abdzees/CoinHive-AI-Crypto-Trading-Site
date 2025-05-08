import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../SectionHeading';
import GlassmorphicCard from '../GlassmorphicCard';
import { Bitcoin, ChartLine, Lock, Users } from 'lucide-react';
const features = [{
  title: 'Advanced AI Predictions',
  description: 'Our proprietary algorithms analyze thousands of market indicators to predict price movements with unmatched accuracy.',
  icon: ChartLine
}, {
  title: 'Multi-Currency Support',
  description: 'Trade across hundreds of cryptocurrencies with a unified strategy, maximizing opportunities across the entire market.',
  icon: Bitcoin
}, {
  title: 'Bank-Level Security',
  description: 'Your assets and data are protected with military-grade encryption, multi-factor authentication, and cold storage options.',
  icon: Lock
}, {
  title: 'Community Insights',
  description: 'Gain access to trading strategies and insights from top-performing users in our exclusive community network.',
  icon: Users
}];
export const FeaturesSection: React.FC = () => {
  return <section id="features" className="py-20 my-[10px]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading title="Powerful Features" subtitle="CoinHive combines cutting-edge artificial intelligence with robust trading tools to give you an unparalleled advantage." centered />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => <ScrollReveal key={index} delay={index * 100}>
              <GlassmorphicCard className="h-full flex flex-col items-center feature-card hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105">
                <div className="mb-5 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <feature.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-xl mb-3 text-center">{feature.title}</h3>
                <p className="text-base text-center">{feature.description}</p>
              </GlassmorphicCard>
            </ScrollReveal>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;