
import React, { useState, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal';
import SectionHeading from '../SectionHeading';
import GlassmorphicCard from '../GlassmorphicCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "David Chen",
    position: "Early Investor",
    quote: "CoinHive has transformed my trading strategy completely. The AI predictions are startlingly accurate, and I've seen a 43% increase in my portfolio within just the first month.",
    result: "+43% in 30 days",
    avatar: "/placeholder.svg",
  },
  {
    name: "Sarah Johnson",
    position: "Day Trader",
    quote: "After years of manual trading, switching to CoinHive was like night and day. The automation handles all the tedious work while I focus on strategy. My stress levels are down and my profits are up.",
    result: "+62% quarterly return",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Rodriguez",
    position: "Crypto Enthusiast",
    quote: "The pattern recognition of CoinHive's AI is remarkable. It caught market trends I would have completely missed. My portfolio has doubled since I started using it six months ago.",
    result: "2x portfolio growth in 6 months",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jennifer Wu",
    position: "Investment Advisor",
    quote: "I recommend CoinHive to all my clients looking to enter the crypto space. The risk management features alone are worth the investment, but the returns speak for themselves.",
    result: "+28% consistent monthly growth",
    avatar: "/placeholder.svg",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="What Our Users Say"
            subtitle="Don't just take our word for it - hear from the traders who've transformed their strategies with CoinHive."
            centered
          />
        </ScrollReveal>
        
        <ScrollReveal className="mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <GlassmorphicCard className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <blockquote className="text-lg italic mb-4">{testimonial.quote}</blockquote>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-sm opacity-70">{testimonial.position}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="text-gold font-medium">{testimonial.result}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-200 hover:border-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-200 hover:border-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
