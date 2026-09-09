import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { useModal } from '../context/ModalContext';

export const InfoBoxes: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="container mx-auto px-4 -mt-10 md:-mt-20 relative z-20 mb-16">
      <ScrollReveal delay={200}>
        <div className="flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden">
          
          {/* Blue Box */}
          <div className="bg-via-blue text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
             {/* Decorative blurred circles behind could go here */}
             <h3 className="text-2xl md:text-3xl font-heading font-bold mb-1">REDUZA ATÉ</h3>
             <span className="text-6xl md:text-8xl font-heading font-extrabold text-via-yellow leading-none my-2">80%</span>
             <p className="text-xl md:text-2xl font-heading font-bold uppercase mb-2">Da sua conta de energia.</p>
          </div>

          {/* White Box */}
          <div className="bg-white p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
            <h3 className="text-via-blue font-heading font-bold text-xl md:text-2xl mb-4">
              Você produzindo sua energia limpa e sustentável.
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A energia solar é uma energia alternativa, renovável e sustentável que funciona utilizando a luz solar como fonte de energia e pode ser aproveitada e utilizada por diferentes tecnologias, como: aquecimento solar, energia solar fotovoltaica e energia heliotérmica.
            </p>
            <div>
              <button 
                onClick={openModal}
                className="bg-via-yellow text-via-blue-dark font-bold text-xs py-3 px-6 rounded-full uppercase hover:bg-yellow-400 transition shadow-md"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};