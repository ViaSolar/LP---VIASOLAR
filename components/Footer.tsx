import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-via-blue-dark text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={IMAGES.LOGO_WHITE} alt="Via Solar" className="w-48 mb-8 opacity-80" />
          
          <div className="flex gap-8 mb-10">
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-via-yellow transition-colors">
              <Facebook size={24} />
            </a>
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-via-yellow transition-colors">
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-xs text-white/40 max-w-md leading-relaxed">
            <p className="mb-2">Via Solar Energia Solar - Todos os direitos reservados.</p>
            <p className="mb-4">{CONTACT_INFO.address}</p>
            <p>CNPJ: 43.123.456/0001-01</p>
          </div>
        </div>
      </div>
    </footer>
  );
};