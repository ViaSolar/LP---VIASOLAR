import React from 'react';
import { IMAGES } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <ScrollReveal direction="left">
              <span className="text-via-blue font-bold text-sm uppercase tracking-wide mb-2 block">
                Conheça um pouco mais sobre
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-via-blue mb-8">
                Quem Somos
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
                <p>
                  A Via Solar Energia Solar é uma empresa especializada na instalação de Energia Solar por meio de sistemas fotovoltaicos.
                </p>
                <p>
                  Somos uma empresa que nasce com o objetivo de levar a todos uma opção viável e sustentável de geração de energia própria, utilizando um dos recursos naturais mais abundantes, a luz do sol.
                </p>
                <p>
                  Sediada na cidade do Rio de Janeiro, no estado de Rio de Janeiro, estamos no mercado para levar mais qualidade de vida com sustentabilidade para quem deseja contribuir com a preservação ambiental e geração própria de energia com até 80% de economia.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <ScrollReveal direction="right" delay={200}>
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={IMAGES.ABOUT_US} 
                  alt="Instalação de painéis solares em telhado" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};