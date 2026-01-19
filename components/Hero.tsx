
import React from 'react';
import { FadeIn } from './islands/FadeIn';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-dark">
      {/* Background Image Static - Máquinas trabalhando */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:via-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <FadeIn direction="up">
            <span className="inline-block bg-primary text-white px-4 py-1 font-bold text-xs tracking-widest uppercase mb-4 rounded">
              São Vitor Locações
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">
              A Base Sólida que sua Obra Exige: <span className="text-primary">Terraplanagem com Precisão e Pontualidade</span>.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
              Seja por empreita completa ou locação de frota revisada, garantimos que seu cronograma nunca pare. Atendimento especializado em São Paulo e região.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-orange-600 text-white text-center px-8 py-4 rounded font-bold text-lg shadow-xl transition-all transform hover:translate-y-[-2px] active:scale-95"
              >
                Solicitar Orçamento Técnico →
              </button>
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md text-center px-8 py-4 rounded font-bold text-lg border border-white/30 transition-all active:scale-95"
              >
                Nossas Soluções
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col items-end text-white font-display font-bold space-y-1 bg-black/30 p-4 backdrop-blur-sm rounded-lg border-r-4 border-primary">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">Equipamento em foco</span>
          <span className="text-lg uppercase tracking-widest text-primary">FROTA 100% REVISADA</span>
          <div className="w-full h-0.5 bg-primary/30 mt-2"></div>
        </div>
      </div>
    </div>
  );
};
