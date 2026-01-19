
import React from 'react';
import { Hammer, Ruler, Drill, Settings2 } from 'lucide-react';
import { FadeIn } from './islands/FadeIn';

const services = [
  {
    title: 'Demolição Controlada',
    desc: 'Removemos estruturas antigas com martelo rompedor de alta performance, garantindo a limpeza total e a prontidão do seu terreno.',
    icon: <Hammer className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Limpeza e Terraplanagem',
    desc: 'Corte e aterro com compactação rigorosa, utilizando tecnologia de ponta para garantir níveis e prumos exatos exigidos pelo projeto.',
    icon: <Ruler className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Perfuração de Estacas',
    desc: 'Perfuração para fundações, sapatas e blocos. Garantimos diâmetro e profundidade exatos, prontos para a concretagem.',
    icon: <Drill className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Serviços Complementares',
    desc: 'Abertura de valas, carregamento de caminhões e movimentação de materiais. Soluções completas para seu canteiro.',
    icon: <Settings2 className="w-10 h-10 text-primary" />,
  },
];

export const Services: React.FC = () => {
  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              Soluções Completas em Terraplanagem
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Sua obra no nível da perfeição com equipamentos modernos e equipe altamente qualificada.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="p-8 bg-ice rounded-lg border-b-4 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col items-start">
                <div className="mb-6 p-3 bg-white rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
