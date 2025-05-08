import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../SectionHeading';
import GlassmorphicCard from '../GlassmorphicCard';
import { Check } from 'lucide-react';
const plans = [{
  name: 'Free',
  price: '0',
  description: 'Get started with basic AI-assisted trading.',
  features: ['Basic AI trading suggestions', 'Single wallet connection', 'Trade up to 5 cryptocurrencies', 'Email support', 'Market analysis reports'],
  isPopular: false,
  buttonText: 'Start Free',
  buttonLink: '#'
}, {
  name: 'Pro',
  price: '49',
  description: 'Advanced features for serious traders.',
  features: ['Full AI automated trading', 'Connect unlimited wallets', 'Trade all available cryptocurrencies', 'Priority 24/7 support', 'Advanced analytics dashboard', 'Custom trading strategies', 'Risk management tools'],
  isPopular: true,
  buttonText: 'Get Pro',
  buttonLink: '#'
}, {
  name: 'Enterprise',
  price: 'Custom',
  description: 'Institutional-grade solutions for large portfolios.',
  features: ['Everything in Pro plan', 'Dedicated account manager', 'API access', 'White-label solutions', 'Custom integration support', 'Multi-user access controls', 'Compliance and reporting tools'],
  isPopular: false,
  buttonText: 'Contact Us',
  buttonLink: '/contact'
}];
export const PricingSection: React.FC = () => {
  return <section id="pricing" className="py-20 my-[10px]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading title="Simple, Transparent Pricing" subtitle="Choose the plan that best fits your trading needs and scale as your portfolio grows." centered />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => <ScrollReveal key={index} delay={index * 100}>
              <GlassmorphicCard className={`relative h-full flex flex-col ${plan.isPopular ? 'border-gold' : ''}`}>
                {plan.isPopular && <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gold text-white text-sm font-medium px-4 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light">
                    {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                  </span>
                  {plan.price !== 'Custom' && <span className="opacity-70">/month</span>}
                </div>
                <p className="mb-6 opacity-70">{plan.description}</p>
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => <li key={i} className="flex items-center">
                        <Check size={16} className="text-gold mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>
                <a href={plan.buttonLink} className={`neumorphic-button text-center w-full ${plan.isPopular ? 'bg-gold text-white hover:bg-gold-dark' : ''}`}>
                  {plan.buttonText}
                </a>
              </GlassmorphicCard>
            </ScrollReveal>)}
        </div>
      </div>
    </section>;
};
export default PricingSection;