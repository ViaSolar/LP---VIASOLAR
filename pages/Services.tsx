import React from 'react';
import { IMAGES } from '../constants';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Projetos Residenciais",
      desc: "Reduza a conta de luz da sua casa em até 80% e valorize seu imóvel. Cuidamos de todo o processo, desde o dimensionamento até a homologação.",
      img: IMAGES.SERVICE_ROOF
    },
    {
      title: "Projetos Comerciais",
      desc: "Aumente a competitividade da sua empresa reduzindo custos fixos. Retorno sobre investimento (ROI) atrativo e previsibilidade de caixa.",
      img: IMAGES.BANNER_DESKTOP
    },
    {
      title: "Manutenção e Limpeza",
      desc: "Garanta a eficiência máxima do seu sistema. Realizamos limpeza técnica dos módulos e verificação elétrica completa dos componentes.",
      img: IMAGES.SERVICE_LAMP
    }
  ];

  return (
    <div className="pt-0">
      <div className="relative h-64 md:h-80 bg-via-blue overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: `url(${IMAGES.SERVICE_ROOF})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase drop-shadow-lg">Nossos Serviços</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-via-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};