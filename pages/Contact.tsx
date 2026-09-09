import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-0">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
           <h1 className="text-4xl font-heading font-bold text-via-blue text-center mb-12 uppercase">Fale Conosco</h1>
           
           <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-via-yellow p-4 rounded-full mb-4 text-via-blue-dark">
                  <Phone size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Telefone</h3>
                <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                <p className="text-gray-600">{CONTACT_INFO.whatsapp}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-via-yellow p-4 rounded-full mb-4 text-via-blue-dark">
                  <Mail size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">E-mail</h3>
                <p className="text-gray-600 break-all">{CONTACT_INFO.email}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-via-yellow p-4 rounded-full mb-4 text-via-blue-dark">
                  <MapPin size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Endereço</h3>
                <p className="text-gray-600">{CONTACT_INFO.address}</p>
              </div>
           </div>
        </div>
      </div>
      
      <QuoteForm />
    </div>
  );
};