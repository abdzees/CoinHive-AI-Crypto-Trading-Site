
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../SectionHeading';

const logos = [
  { name: 'Forbes', width: 120 },
  { name: 'TechCrunch', width: 140 },
  { name: 'Bloomberg', width: 130 },
  { name: 'Business Insider', width: 150 },
  { name: 'CNBC', width: 100 },
];

export const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-10">
          <h3 className="text-lg opacity-70 uppercase tracking-wider">Featured In</h3>
        </ScrollReveal>
        
        <ScrollReveal className="flex flex-wrap justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ width: logo.width }}
            >
              <div className="h-12 flex items-center justify-center">
                {logo.name}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedSection;
