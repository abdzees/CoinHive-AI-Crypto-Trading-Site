import React from 'react';
import ScrollReveal from '../ScrollReveal';
export const MissionSection: React.FC = () => {
  return <section className="py-20 my-[10px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 mx-auto text-center">Our Mission</h2>
            <p className="text-xl md:text-2xl opacity-80 mb-10 leading-relaxed mx-auto text-center">
              At CoinHive, we believe that sophisticated cryptocurrency trading shouldn't be limited to financial institutions and tech elites. Our mission is to democratize access to advanced AI trading strategies, empowering individuals to achieve financial freedom through cryptocurrency markets.
            </p>
            <hr className="w-24 border-t-2 border-gold mx-auto mb-10" />
            <p className="text-lg opacity-70 mx-auto text-center">
              Founded in 2023 by a team of AI researchers and cryptocurrency veterans, CoinHive is built on the principles of accessibility, transparency, and technological excellence. We're committed to continuous innovation to keep our users ahead in the rapidly evolving digital asset landscape.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};
export default MissionSection;