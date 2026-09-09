import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-0">
      <div className="relative h-64 md:h-80 bg-via-blue overflow-hidden">
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: `url(${IMAGES.ABOUT_US})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase drop-shadow-lg">Quem Somos</h1>
        </div>
      </div>
      
      <AboutSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
               <h3 className="text-2xl font-heading font-bold text-via-blue mb-4">Nossa Missão</h3>
               <p className="text-gray-700 leading-relaxed mb-6">
                 Proporcionar liberdade energética e sustentabilidade para famílias e empresas brasileiras, através de soluções fotovoltaicas de alta qualidade, garantindo economia e preservação ambiental.
               </p>
               <h3 className="text-2xl font-heading font-bold text-via-blue mb-4">Nossa Visão</h3>
               <p className="text-gray-700 leading-relaxed">
                 Ser referência nacional em energia solar, reconhecida pela excelência técnica, atendimento humanizado e compromisso com um futuro mais verde.
               </p>
            </div>
            <div>
               <h3 className="text-2xl font-heading font-bold text-via-blue mb-4">Nossos Valores</h3>
               <ul className="list-disc list-inside space-y-2 text-gray-700">
                 <li>Sustentabilidade e Responsabilidade Ambiental</li>
                 <li>Transparência e Honestidade</li>
                 <li>Excelência Técnica</li>
                 <li>Inovação Constante</li>
                 <li>Foco no Cliente</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};