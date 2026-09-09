import React from 'react';
import { HeroLanding } from '../components/HeroLanding';
import { ScrollReveal } from '../components/ScrollReveal';
import { BenefitsSection } from '../components/BenefitsSection';
import { IMAGES } from '../constants';
import { CheckCircle, Sun, TrendingDown, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const PROJECT_PHOTOS = [
  { id: 1, title: "BAMBUÍ - MARICÁ", details: "8 PLACAS | 2 MICROS", img: "https://viaenergiasolar.com.br/drive/imagens/projetos1.webp" },
  { id: 2, title: "TAQUARA", details: "23 PLACAS", img: "https://viaenergiasolar.com.br/drive/imagens/projetos2.webp" },
  { id: 3, title: "MARICÁ", details: "17 PLACAS", img: "https://viaenergiasolar.com.br/drive/imagens/projetos3.webp" },
  { id: 4, title: "PECHICHA", details: "62 PLACAS", img: "https://viaenergiasolar.com.br/drive/imagens/projetos4.webp" }
];

export const Home: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Seção 1: Hero & Único Formulário */}
      <HeroLanding />

      {/* Seção 2: Credibilidade Instantânea */}
      <div className="bg-via-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center">
            <div className="border-r border-white/10">
              <p className="text-via-yellow text-2xl md:text-3xl font-black">+2.000</p>
              <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Instalações</p>
            </div>
            <div className="lg:border-r border-white/10">
              <p className="text-via-yellow text-2xl md:text-3xl font-black">80%</p>
              <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Economia</p>
            </div>
            <div className="border-r border-white/10 pt-4 lg:pt-0">
              <p className="text-via-yellow text-2xl md:text-3xl font-black">25 Anos</p>
              <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Garantia</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="text-via-yellow text-2xl md:text-3xl font-black">Rio/RJ</p>
              <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Suporte Local</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção 3: Benefícios Estratégicos */}
      <div className="mt-[-2px]">
        <BenefitsSection />
      </div>

      {/* Seção 4: Prova Social (Galeria de Fotos) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-via-blue mb-4">
              Quem instalou, <span className="text-via-yellow">começou a economizar na conta!</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Confira fotos reais de alguns dos nossos mais de 2.000 projetos entregues em todo o Rio de Janeiro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_PHOTOS.map((photo, i) => (
              <ScrollReveal key={photo.id} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg">
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-via-blue/90 via-via-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <p className="text-via-yellow font-black text-sm uppercase mb-1">{photo.title}</p>
                      <p className="text-white text-xs font-bold mb-1">{photo.details}</p>
                      <p className="text-white/60 text-[10px] font-medium">Instalação homologada Via Solar</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 5: O Processo (Simples e Rápido) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-via-blue text-center mb-20">
            Sua jornada para a <span className="text-via-yellow">liberdade</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="relative group">
              <div className="w-20 h-20 bg-via-blue text-via-yellow rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                <Sun size={36} strokeWidth={2.5} />
              </div>
              <p className="text-via-blue font-black text-xl mb-2">1. Cotação</p>
              <p className="text-gray-400 text-sm px-4">Analisamos sua conta e o potencial do seu telhado.</p>
              <div className="hidden lg:block absolute top-10 -right-6 text-gray-200">
                <ArrowRight size={24} />
              </div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 bg-via-blue text-via-yellow rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                <ShieldCheck size={36} strokeWidth={2.5} />
              </div>
              <p className="text-via-blue font-black text-xl mb-2">2. Engenharia</p>
              <p className="text-gray-400 text-sm px-4">Cuidamos de toda a papelada e projeto técnico.</p>
              <div className="hidden lg:block absolute top-10 -right-6 text-gray-200">
                <ArrowRight size={24} />
              </div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 bg-via-blue text-via-yellow rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                <Zap size={36} strokeWidth={2.5} />
              </div>
              <p className="text-via-blue font-black text-xl mb-2">3. Instalação</p>
              <p className="text-gray-400 text-sm px-4">Equipe própria instala em tempo recorde.</p>
              <div className="hidden lg:block absolute top-10 -right-6 text-gray-200">
                <ArrowRight size={24} />
              </div>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-green-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                <TrendingDown size={36} strokeWidth={2.5} />
              </div>
              <p className="text-via-blue font-black text-xl mb-2">4. Economia</p>
              <p className="text-gray-400 text-sm px-4">Seu sistema começa a gerar dinheiro para você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Quem Somos (Autoridade) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-via-yellow/20 rounded-[3rem] blur-2xl"></div>
              <img src={IMAGES.ABOUT_US} alt="Via Solar" className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-via-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">Sobre a Via Solar</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-via-blue mb-8 leading-tight">Expertise técnica e <span className="text-via-yellow">compromisso real</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Não somos apenas instaladores. Somos parceiros da sua economia. Sediada no Rio de Janeiro, a **Via Solar** utiliza tecnologia de ponta e equipe certificada para garantir que seu investimento tenha o melhor retorno possível.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-via-blue font-bold">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={20} />
                  </div>
                  Atendimento em todo o estado do RJ
                </li>
                <li className="flex items-center gap-4 text-via-blue font-bold">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={20} />
                  </div>
                  Equipe de Engenharia Local
                </li>
                <li className="flex items-center gap-4 text-via-blue font-bold">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={20} />
                  </div>
                  Homologação garantida junto à Enel/Light
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7: CTA Final (O último empurrão) */}
      <section className="py-20 bg-via-blue relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
            O Sol vai pagar sua conta. <br className="hidden md:block" /> <span className="text-via-yellow">O que você está esperando?</span>
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Junte-se a centenas de famílias que já estão economizando até 80% todos os meses.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-via-yellow text-via-blue-dark font-black text-xl py-6 px-12 rounded-3xl shadow-[0_0_40px_rgba(255,204,0,0.3)] hover:scale-105 transition-transform uppercase tracking-tighter"
          >
            QUERO MEU ORÇAMENTO GRATUITO AGORA!
          </button>
        </div>
        
        {/* Decorative elements for the final CTA */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-via-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-via-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};