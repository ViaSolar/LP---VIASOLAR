import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Obrigado: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 flex items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Solicitação Recebida!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sua simulação foi enviada com sucesso e a aba do WhatsApp já deve ter se aberto. 
          Um de nossos especialistas em energia solar vai analisar seus dados e te responder no WhatsApp o mais rápido possível.
        </p>
        <button 
          onClick={() => window.location.hash = ''} 
          className="bg-[#000f60] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition shadow-md hover:shadow-lg"
        >
          Voltar para a página inicial
        </button>
      </div>
    </section>
  );
};
