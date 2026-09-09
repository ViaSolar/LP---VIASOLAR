import React from 'react';
import { BenefitsSection } from '../components/BenefitsSection';
import { InfoBoxes } from '../components/InfoBoxes';
import { IMAGES } from '../constants';

export const Solar: React.FC = () => {
  return (
    <div className="pt-0">
       <div className="relative h-64 md:h-80 bg-via-blue overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: `url(${IMAGES.SERVICE_LAMP})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase drop-shadow-lg">Energia Solar</h1>
        </div>
      </div>

      <div className="mb-24">
        <InfoBoxes />
      </div>

      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-via-blue mb-8 text-center">Como Funciona?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={IMAGES.SERVICE_ROOF} alt="Painéis solares" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              O sistema de energia solar fotovoltaico converte a luz do sol diretamente em eletricidade. Os painéis solares, instalados geralmente no telhado, captam a irradiação solar e a transformam em energia elétrica de corrente contínua.
            </p>
            <p>
              Essa energia passa pelo inversor solar, que a converte para corrente alternada (a mesma utilizada em nossas tomadas e eletrodomésticos). A partir daí, a energia é distribuída pelo quadro de força para toda a casa ou empresa.
            </p>
            <p className="font-bold text-via-blue">
              O excedente de energia gerado durante o dia é injetado na rede da concessionária, gerando créditos que podem ser utilizados para abater o consumo em momentos sem sol (à noite) ou em meses seguintes.
            </p>
          </div>
        </div>
      </div>

      <BenefitsSection />
    </div>
  );
};