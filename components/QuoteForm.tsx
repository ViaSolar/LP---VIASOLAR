import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { getUtmParams } from '../lib/utm';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    info: ''
  });

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

  const isDdiError = formData.telefone.replace(/\D/g, '').startsWith('55');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'telefone') {
      newValue = formatPhoneNumber(value);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.telefone || !formData.email.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios para continuar.");
      return;
    }

    const cleanPhone = formData.telefone.replace(/\D/g, '');

    if (cleanPhone.startsWith('55')) {
      alert("O código do país (+55) não é necessário. Por favor, digite apenas o seu DDD e o número (ex: 21 99999-9999).");
      return;
    }
    
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      alert("Por favor, digite um número de WhatsApp/Telefone válido com DDD (mínimo 10 dígitos).");
      return;
    }
    
    const payload = {
      ...formData,
      ...getUtmParams(),
      data_envio: new Date().toISOString(),
      url_origem: window.location.href,
      origem_formulario: 'Contato'
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
        setFormData({ nome: '', email: '', telefone: '', assunto: '', info: '' });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Houve um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <section id="contato" className="bg-via-blue py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text */}
          <div className="lg:w-1/3 text-white">
            <ScrollReveal direction="left">
              <h3 className="text-via-yellow font-bold uppercase tracking-wide mb-1">Solicite uma</h3>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Cotação</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Solicite uma visita técnica da nossa equipe para que possamos fazer um orçamento mais detalhado sem compromisso.
              </p>
              <p className="text-sm leading-relaxed">
                Nós faremos uma análise da sua conta de energia e do seu ambiente para apresentarmos a melhor proposta de instalação do sistema de energia fotovoltaica.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Form Card */}
          <div className="lg:w-2/3 w-full">
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-blue-600 font-bold text-sm mb-1">Nome *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Qual seu Nome?"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-via-yellow text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-blue-600 font-bold text-sm mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Seu melhor e-mail."
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-via-yellow text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                      <label htmlFor="telefone" className="block text-blue-600 font-bold text-sm mb-1">Telefone *</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        minLength={isDdiError ? 2 : 14}
                        maxLength={19}
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={`w-full bg-gray-50 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 text-sm transition-all ${
                          isDdiError 
                            ? 'border-red-500 ring-4 ring-red-500/20 bg-red-50/50 focus:ring-red-500' 
                            : 'border-gray-200 focus:ring-via-yellow'
                        }`}
                      />
                      {isDdiError && (
                        <p className="text-red-500 text-xs font-bold mt-2">
                          Por favor, remova o 55. Digite apenas o DDD e o número.
                        </p>
                      )}
                    </div>
                     <div>
                      <label htmlFor="assunto" className="block text-blue-600 font-bold text-sm mb-1">Assunto *</label>
                      <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        placeholder="Assunto"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-via-yellow text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="info" className="block text-blue-600 font-bold text-sm mb-1">Informações Adicionais</label>
                    <textarea
                      id="info"
                      name="info"
                      value={formData.info}
                      onChange={handleChange}
                      placeholder="Outras Informações Importantes."
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-via-yellow text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 py-2">
                    <input type="checkbox" id="robot" className="w-5 h-5 rounded border-gray-300 text-via-blue focus:ring-via-yellow" />
                    <label htmlFor="robot" className="text-sm text-gray-600">Não sou um robô</label>
                  </div>

                  <button 
                    type="submit" 
                    onClick={() => {
                      if (typeof (window as any).gtag_report_conversion === 'function') {
                        (window as any).gtag_report_conversion();
                      }
                    }}
                    className="w-full bg-[#25D366] hover:bg-[#1e9e05] text-white font-bold py-4 rounded-full uppercase transition shadow-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Solicitar Cotação no WhatsApp
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};