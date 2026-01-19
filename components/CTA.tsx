
import React from 'react';
import { FadeIn } from './islands/FadeIn';

export const CTA: React.FC = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
          alt="Obra fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
            Sua Obra Não Pode Esperar por uma Base Fraca.
          </h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Fale com um de nossos especialistas hoje mesmo. Vamos analisar seu projeto e indicar a solução mais eficiente e segura, seja por empreita ou locação.
          </p>
          <a
            href="#contato"
            className="inline-block bg-secondary hover:bg-black text-white px-10 py-5 rounded-md font-bold text-xl shadow-2xl transition-all transform hover:scale-105"
          >
            Solicitar Orçamento Técnico Agora →
          </a>
        </FadeIn>
      </div>
    </div>
  );
};
