import React from 'react';
import { IMAGES } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { useModal } from '../context/ModalContext';

interface BenefitCardProps {
  image: string;
  title: string;
  description: string;
  onAction: () => void;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ image, title, description, onAction }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex flex-col flex-grow items-center text-center">
      <h3 className="text-via-blue font-heading font-bold text-lg mb-4 uppercase">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
      <button 
        onClick={onAction}
        className="bg-via-yellow text-via-blue-dark font-bold text-xs py-2 px-6 rounded-full uppercase hover:bg-yellow-400 transition"
      >
        Saiba Mais
      </button>
    </div>
  </div>
);

export const BenefitsSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="beneficios" className="relative py-20 bg-via-blue overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-fixed"
        style={{
          backgroundImage: `url(${IMAGES.SERVICE_ROOF})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-via-yellow font-bold text-sm uppercase tracking-wide">
              Conheça os principais
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2">
              Benefícios
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={100} className="h-full">
            <BenefitCard 
              image={IMAGES.ABOUT_US}
              title="Até 80% de Economia"
              description="Com o sistema solar fotovoltaico, você reduz a sua conta de energia em até 80%, com baixa manutenção e retorno em até 2 anos."
              onAction={openModal}
            />
          </ScrollReveal>
          
          <ScrollReveal delay={300} className="h-full">
            <BenefitCard 
              image={IMAGES.SERVICE_ROOF}
              title="Instalação Rápida"
              description="Com nossa equipe de profissionais altamente capacitados, a instalação é rápida, eficiente e com qualidade assegurada."
              onAction={openModal}
            />
          </ScrollReveal>

          <ScrollReveal delay={500} className="h-full">
            <BenefitCard 
              image={IMAGES.SERVICE_LAMP}
              title="Economia Sustentável"
              description="Economize a partir do primeiro dia e ainda ajude a criar um planeta movido pela energia limpa proveniente do sol."
              onAction={openModal}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};