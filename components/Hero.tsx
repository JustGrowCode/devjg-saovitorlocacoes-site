
import React from 'react';
import { FadeIn } from './islands/FadeIn';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579309401359-da07516b97a3?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <FadeIn direction="up">
            <span className="inline-block bg-primary text-white px-4 py-1 font-bold text-xs tracking-widest uppercase mb-4 rounded">
              Especialistas em Terraplanagem
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight mb-6">
              A Base Sólida que sua <span className="text-primary">Obra Exige</span>.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
              Seja por empreita completa ou locação de frota revisada, garantimos que seu cronograma nunca pare. Atendimento especializado em São Paulo e região.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-primary hover:bg-orange-600 text-white text-center px-8 py-4 rounded font-bold text-lg shadow-xl transition-all transform hover:translate-y-[-2px]"
              >
                Solicitar Orçamento Técnico →
              </a>
              <a
                href="#servicos"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-center px-8 py-4 rounded font-bold text-lg border border-white/30 transition-all"
              >
                Ver Serviços
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-50">
        <div className="flex flex-col items-end text-white font-display font-bold space-y-1">
          <span className="text-xs uppercase tracking-widest">Precisão</span>
          <span className="text-xs uppercase tracking-widest">Pontualidade</span>
          <span className="text-xs uppercase tracking-widest">Segurança</span>
        </div>
      </div>
    </div>
  );
};
