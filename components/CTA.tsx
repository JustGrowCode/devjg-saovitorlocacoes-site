
import React from 'react';
import { FadeIn } from './islands/FadeIn';

export const CTA: React.FC = () => {
  const whatsappLink = "https://wa.me/5511996809510?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

  return (
    <div className="relative py-32 px-4 overflow-hidden bg-secondary">
      {/* Minimalist Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-[#2a2a2a] to-primary/20"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <FadeIn direction="up">
          <span className="inline-block bg-primary text-white px-4 py-1 font-bold text-xs tracking-widest uppercase mb-6 rounded">
            Pronto para começar?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
            Sua Obra Não Pode Esperar por uma <span className="text-primary">Base Fraca</span>.
          </h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Fale com um de nossos especialistas hoje mesmo. Vamos analisar seu projeto e indicar a solução mais eficiente e segura, seja por empreita ou locação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-orange-600 text-white px-10 py-5 rounded font-bold text-xl shadow-2xl transition-all transform hover:scale-105"
            >
              Orçamento via WhatsApp
            </a>
            <a
              href="tel:5511996809510"
              className="inline-block bg-white hover:bg-gray-100 text-secondary px-10 py-5 rounded font-bold text-xl shadow-2xl transition-all transform hover:scale-105"
            >
              Ligar (11) 99680-9510
            </a>
          </div>
        </FadeIn>
      </div>
      
      {/* Subtle minimalist texture overlay for a professional industrial touch */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </div>
  );
};
