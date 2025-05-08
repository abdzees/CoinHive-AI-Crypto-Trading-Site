
import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does CoinHive's AI trading actually work?",
    answer: "CoinHive uses a combination of machine learning algorithms, natural language processing, and technical analysis to identify trading opportunities. Our AI analyzes market data, news sentiment, social media trends, and blockchain metrics to predict price movements and execute trades according to your risk preferences."
  },
  {
    question: "Is my cryptocurrency safe with CoinHive?",
    answer: "Absolutely. CoinHive never takes custody of your funds. We use secure API connections to your wallets that only have trading permissions but cannot withdraw funds. All data is encrypted end-to-end, and we employ multiple security protocols to protect your assets."
  },
  {
    question: "What kind of returns can I expect?",
    answer: "While past performance is not indicative of future results, our users typically see 15-40% improved returns compared to their previous strategies. Results vary based on market conditions, risk tolerance settings, and the cryptocurrencies you choose to trade."
  },
  {
    question: "How do I get started with CoinHive?",
    answer: "Getting started is simple. Sign up for an account, connect your wallet using our secure connection process, configure your trading preferences, and the AI will begin analyzing the market and suggesting or executing trades based on your chosen plan."
  },
  {
    question: "Can I customize the trading strategies?",
    answer: "Yes. Pro and Enterprise users can customize trading strategies based on their preferences, including risk tolerance, preferred trading pairs, technical indicators, and more. Free users have access to basic strategy customization."
  },
  {
    question: "What exchanges does CoinHive support?",
    answer: "CoinHive integrates with all major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, FTX, Huobi, and KuCoin, among others. We're constantly adding support for more exchanges."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about CoinHive and how it can transform your crypto trading."
            centered
          />
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="mb-4">
                <button
                  className="flex items-center justify-between w-full text-left p-5 rounded-lg bg-white shadow-sm hover:shadow transition-shadow"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="mt-2 p-5 bg-white rounded-lg shadow-sm">
                    <p className="text-base opacity-80">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
