import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Users, TrendingUp, ChartLine } from 'lucide-react';
const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="animate-fade-in">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 my-[15px]">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">About CoinHive</h1>
            <p className="text-xl opacity-80">
              We're on a mission to democratize access to sophisticated AI trading technology.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden">
                <img src="/placeholder.svg" alt="CoinHive Team" className="w-full h-auto" style={{
                aspectRatio: '4/3',
                objectFit: 'cover'
              }} />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h2 className="text-3xl md:text-4xl mb-6 mx-auto text-left">Our Story</h2>
              <p className="mb-4 opacity-80">
                CoinHive was born from a simple observation: while institutional investors were leveraging sophisticated algorithms to dominate cryptocurrency markets, individual traders were left behind with basic tools and strategies.
              </p>
              <p className="mb-4 opacity-80">
                Founded in 2023 by a team of AI researchers, data scientists, and cryptocurrency veterans, we set out to bridge this gap by creating an AI trading platform that puts institutional-grade tools in the hands of everyday traders.
              </p>
              <p className="opacity-80">
                Our journey began with a small team working from a shared office in San Francisco. Today, we've grown to a global team of 50+ experts, but our mission remains the same: to democratize access to advanced trading technology and help individuals achieve financial freedom through cryptocurrency markets.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 my-[15px]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="opacity-80 text-center">
              These principles guide everything we do at CoinHive, from product development to customer service.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="glassmorphic p-6 h-full flex flex-col items-center feature-card hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Users className="text-gold" size={24} />
              </div>
              <h3 className="text-xl mb-3">Accessibility</h3>
              <p className="opacity-80 text-center">
                We believe advanced trading technology should be accessible to everyone, not just financial institutions and the tech elite.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="glassmorphic p-6 h-full flex flex-col items-center feature-card hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <TrendingUp className="text-gold" size={24} />
              </div>
              <h3 className="text-xl mb-3">Innovation</h3>
              <p className="opacity-80 text-center">
                We continuously push the boundaries of what's possible in AI and cryptocurrency trading to keep our users ahead of the curve.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="glassmorphic p-6 h-full flex flex-col items-center feature-card hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <ChartLine className="text-gold" size={24} />
              </div>
              <h3 className="text-xl mb-3">Transparency</h3>
              <p className="opacity-80 text-center">
                We maintain complete transparency in our operations, algorithms, and results, building trust through honesty and open communication.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 my-[25px]">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Meet Our Leadership</h2>
            {/* <p className="opacity-80">
              A diverse team of experts passionate about AI, cryptocurrency, and financial inclusion.
             </p> */}
          </ScrollReveal>
          
          <div className="grid grid-cols-1">
            {[1].map((_, index) => <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                    <img alt={`Team member ${index + 1}`} src="/lovable-uploads/3b75dec7-60c5-4652-b4ff-61c499625e0c.png" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl mb-1">Abdullah Zeeshan</h3>
                  <p className="opacity-70 mb-3 mx-auto text-center">CEO & Co-founder</p>
                  
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default About;