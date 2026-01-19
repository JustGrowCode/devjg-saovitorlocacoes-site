
import React from 'react';
import { Quote } from 'lucide-react';
import { FadeIn } from './islands/FadeIn';

const reviews = [
  {
    text: "A São Vitor Locações foi fundamental para o sucesso da nossa obra. A precisão na terraplanagem e a pontualidade na entrega dos equipamentos superaram nossas expectativas. Profissionalismo impecável!",
    author: "Ricardo Oliveira",
    role: "Engenheiro Civil / Construtora Alfa"
  },
  {
    text: "Precisávamos de uma demolição controlada e a equipe da São Vitor executou o serviço com total segurança e agilidade. O suporte técnico foi excelente. Recomendo sem hesitação!",
    author: "Marcos Santos",
    role: "Mestre de Obras / Estruturas Prime"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-ice py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600">Confiança construída em cada m² trabalhado.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.2}>
              <div className="bg-white p-10 rounded-xl shadow-lg relative">
                <Quote className="absolute top-6 right-6 text-primary/10 w-20 h-20" />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-8 relative z-10">
                  "{rev.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{rev.author}</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-tighter">{rev.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
