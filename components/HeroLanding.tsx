import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { getUtmParams } from '../lib/utm';

const BILL_OPTIONS = [
  "Até R$ 300,00",
  "R$ 300,00 a R$ 600,00",
  "R$ 600,00 a R$ 1.000,00",
  "R$ 1.000,00 a R$ 2.000,00",
  "Acima de R$ 2.000,00"
];

export const HeroLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    conta: ''
  });

  const formatPhone = (val: string) => {
    const rawNums = val.replace(/\D/g, "");
    if (rawNums.startsWith("55")) {
      return rawNums.slice(0, 13); // Retorna sem formatação se começar com 55
    }
    const nums = rawNums.slice(0, 11);
    if (nums.length <= 10) {
      return nums.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2");
    }
    return nums.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2");
  };

  const isDdiError = formData.whatsapp.replace(/\D/g, '').startsWith('55');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'whatsapp' ? formatPhone(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.whatsapp || !formData.conta) {
      alert("Por favor, preencha todos os campos para continuar.");
      return;
    }

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
      url_origem: window.location.href
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
        setFormData({ nome: '', whatsapp: '', conta: '' });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Houve um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-24 pb-8 md:pb-16 overflow-hidden bg-via-blue">
      {/* Background Image with Deep Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${IMAGES.SLIDES[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-via-blue-dark via-via-blue/95 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-20">
          
          {/* Content Area - Compact on Mobile */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-via-yellow text-via-blue-dark px-3 py-1 md:px-5 md:py-2 rounded-full font-black text-[10px] md:text-sm uppercase mb-3 md:mb-8 shadow-xl shadow-via-yellow/20 animate-pulse">
              Líder em Energia Solar no RJ
            </div>
            
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-black mb-2 md:mb-8 leading-[1.1] tracking-tight">
              Cansado de contas acima de <span className="text-via-yellow">R$300?</span> Resolva isso de vez
            </h1>
            
            <p className="text-sm md:text-2xl mb-4 md:text-12 font-medium text-blue-50/90 leading-snug md:leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Gere sua própria energia e reduza <span className="border-b-2 md:border-b-4 border-via-yellow">até 80%</span> da sua conta.
            </p>
            
            <div className="hidden lg:flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-via-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-lg">Pagamento Facilitado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-via-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-bold text-lg">Retorno em até 2 anos</span>
              </div>
            </div>
          </div>

          {/* SIMULATE NOW FORM - MAXIMUM MOBILE ACCESSIBILITY */}
          <div className="lg:w-5/12 w-full max-w-[480px] mx-auto lg:mx-0">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 md:border-4 border-via-yellow relative overflow-hidden group">
              
              {/* Floating Badge - Small on Mobile */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-via-yellow text-via-blue-dark px-4 py-1 md:px-8 md:py-3 rounded-b-2xl md:rounded-b-3xl text-[10px] md:text-sm font-black uppercase tracking-tighter shadow-xl z-20">
                Orçamento Gratuito
              </div>

              <div className="text-center mb-4 md:mb-10 pt-2 md:pt-4">
                <h2 className="text-xl md:text-4xl font-heading font-black text-via-blue-dark">
                  Simule pelo WhatsApp
                </h2>
                <p className="text-gray-500 font-bold text-[10px] md:text-sm">
                  Descubra sua economia hoje!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-5 px-5 md:px-8 focus:ring-4 focus:ring-via-yellow/20 focus:border-via-yellow focus:bg-white outline-none transition-all text-gray-800 text-sm md:text-lg font-bold placeholder-gray-400 shadow-sm"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    minLength={isDdiError ? 2 : 14}
                    maxLength={19}
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Seu WhatsApp"
                    className={`w-full bg-gray-50 border-2 rounded-xl md:rounded-2xl py-3 md:py-5 px-5 md:px-8 outline-none transition-all text-gray-800 text-sm md:text-lg font-bold placeholder-gray-400 shadow-sm ${
                      isDdiError 
                        ? 'border-red-500 ring-4 ring-red-500/20 bg-red-50/50' 
                        : 'border-gray-100 focus:ring-4 focus:ring-via-yellow/20 focus:border-via-yellow focus:bg-white'
                    }`}
                  />
                  {isDdiError && (
                    <p className="text-red-500 text-xs md:text-sm font-bold mt-2 ml-2">
                      Por favor, remova o 55. Digite apenas o DDD e o número.
                    </p>
                  )}
                </div>

                <div className="relative">
                  <select 
                    name="conta"
                    required
                    value={formData.conta}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl md:rounded-2xl py-3 md:py-5 px-5 md:px-8 focus:ring-4 focus:ring-via-yellow/20 focus:border-via-yellow focus:bg-white outline-none transition-all appearance-none cursor-pointer text-gray-800 text-sm md:text-lg font-bold shadow-sm"
                  >
                    <option value="" className="text-gray-400">Quanto você paga?</option>
                    {BILL_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <div className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none text-via-blue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </div>
                </div>

                <button 
                  type="submit"
                  onClick={() => {
                    if (typeof (window as any).gtag_report_conversion === 'function') {
                      (window as any).gtag_report_conversion();
                    }
                  }}
                  className="group relative w-full overflow-hidden rounded-xl md:rounded-2xl bg-[#25D366] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-[#25D366]/40"
                >
                  <div className="relative flex items-center justify-center gap-2 md:gap-3 rounded-xl bg-[#25D366] px-4 py-4 md:py-6 transition-colors duration-300">
                    <span className="text-white font-heading font-black text-sm md:text-xl uppercase tracking-tighter">
                      Simular no WhatsApp
                    </span>
                    <svg className="w-4 h-4 md:w-6 md:h-6 text-white animate-bounce-x" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                </button>
                
                <div className="flex flex-col items-center gap-2 mt-2 md:mt-6">
                  <div className="flex items-center gap-2 text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    Ambiente 100% Seguro
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Hint - Hidden on small screens to save space */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 text-[8px] font-bold uppercase tracking-[0.3em] hidden md:flex">
        <span>Arraste para saber mais</span>
        <div className="w-px h-8 bg-gradient-to-b from-via-yellow to-transparent mt-2"></div>
      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
};