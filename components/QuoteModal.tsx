import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { IMAGES } from '../constants';
import { getUtmParams } from '../lib/utm';

const BILL_OPTIONS = [
  "Até R$ 300,00",
  "R$ 300,00 a R$ 600,00",
  "R$ 600,00 a R$ 1.000,00",
  "R$ 1.000,00 a R$ 2.000,00",
  "Acima de R$ 2.000,00"
];

export const QuoteModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    contaLuz: ''
  });

  if (!isModalOpen) return null;

  const formatPhoneNumber = (value: string) => {
    const rawNums = value.replace(/\D/g, "");
    if (rawNums.startsWith("55")) {
      return rawNums.slice(0, 13);
    }
    const numbers = rawNums.slice(0, 11);
    if (numbers.length <= 10) {
      return numbers.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2");
    }
    return numbers.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2");
  };

  const isDdiError = formData.whatsapp.replace(/\D/g, '').startsWith('55');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validação de preenchimento (Garantia extra além do HTML required)
    if (!formData.nome.trim() || !formData.whatsapp || !formData.contaLuz) {
      alert("Por favor, preencha todos os campos para continuar.");
      return;
    }

    // 2. Validação rigorosa do telefone
    const cleanPhone = formData.whatsapp.replace(/\D/g, '');

    if (cleanPhone.startsWith('55')) {
      alert("O código do país (+55) não é necessário. Por favor, digite apenas o seu DDD e o número (ex: 21 99999-9999).");
      return;
    }
    
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      alert("Por favor, digite um número de WhatsApp válido com DDD (mínimo 10 dígitos).");
      return;
    }

    const payload = {
      ...formData,
      ...getUtmParams(),
      data_envio: new Date().toISOString(),
      url_origem: window.location.href,
      origem_formulario: 'Modal'
    };

    try {
      const response = await fetch('https://webhook.viasolar.rio.br/webhook/formulario-lp-via-solar-com-utm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521959423468&text=${encodeURIComponent('Venho da lp e gostaria de um orçamento')}`;
        window.open(whatsappUrl, '_blank');
        window.location.hash = '#obrigado';
        closeModal();
        setFormData({ nome: '', whatsapp: '', contaLuz: '' });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Houve um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'whatsapp') {
      newValue = formatPhoneNumber(value);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#0b2b25] rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-700/50 animate-in fade-in zoom-in duration-300">
        
        {/* Decorative Background Pattern (CSS approximation of the doodle style) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl" 
             style={{ 
               backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
               backgroundSize: '20px 20px' 
             }} 
        />

        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute -top-12 right-0 text-white hover:text-via-yellow transition-colors md:top-4 md:right-4"
        >
          <X size={32} />
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Logo */}
          <img src={IMAGES.LOGO_WHITE} alt="Via Solar" className="h-12 object-contain mb-4" />
          
          <h2 className="text-white text-lg font-medium mb-6">
            Receba um orçamento em seu WhatsApp
          </h2>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            
            {/* Nome Input */}
            <input
              type="text"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              placeholder="Qual o seu nome ?"
              className="w-full bg-transparent border border-gray-400 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-via-yellow focus:ring-1 focus:ring-via-yellow transition-all text-center md:text-left"
            />

            {/* WhatsApp Input */}
            <div>
              <input
                type="tel"
                name="whatsapp"
                required
                minLength={isDdiError ? 2 : 14}
                maxLength={19}
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Digite o seu WhatsApp com DDD"
                className={`w-full bg-transparent border rounded-full py-3 px-6 text-white placeholder-gray-400 focus:outline-none transition-all text-center md:text-left ${
                  isDdiError 
                    ? 'border-red-500 ring-4 ring-red-500/20 bg-red-500/10 focus:ring-red-500' 
                    : 'border-gray-400 focus:border-via-yellow focus:ring-1 focus:ring-via-yellow'
                }`}
              />
              {isDdiError && (
                <p className="text-red-400 text-xs font-bold mt-2">
                  Por favor, remova o 55. Digite apenas o DDD e o número.
                </p>
              )}
            </div>

            {/* Conta de Luz Select */}
            <div className="relative">
              <select
                name="contaLuz"
                required
                value={formData.contaLuz}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-400 rounded-full py-3 px-6 text-white focus:outline-none focus:border-via-yellow focus:ring-1 focus:ring-via-yellow transition-all appearance-none cursor-pointer text-center md:text-left"
              >
                <option value="" disabled className="text-gray-500 bg-[#0b2b25]">Quanto você paga de conta de luz ?</option>
                {BILL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0b2b25] text-white">
                    {opt}
                  </option>
                ))}
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={() => {
                if (typeof (window as any).gtag_report_conversion === 'function') {
                  (window as any).gtag_report_conversion();
                }
              }}
              className="w-full bg-[#25D366] hover:bg-[#1e9e05] text-white font-bold py-4 rounded-full uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all mt-4 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar com um especialista!
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};