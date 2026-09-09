import React from 'react';
import { IMAGES } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const PromoBanner: React.FC = () => {
  return (
    <div className="w-full bg-blue-50">
      <ScrollReveal direction="up" delay={100}>
        <picture className="w-full block shadow-md">
          <source media="(min-width: 768px)" srcSet={IMAGES.BANNER_DESKTOP} />
          <img 
            src={IMAGES.BANNER_MOBILE} 
            alt="Promoção Compra Premiada Via Solar" 
            className="w-full h-auto object-cover"
          />
        </picture>
      </ScrollReveal>
    </div>
  );
};