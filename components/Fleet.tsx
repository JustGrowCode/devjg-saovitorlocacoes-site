
import React from 'react';
import { FadeIn } from './islands/FadeIn';

const machines = [
  {
    title: 'Retroescavadeira',
    desc: 'A máquina "tudo-em-um" para escavar e nivelar em diversos tipos de terreno.',
    highlight: 'Versátil',
    img: 'https://images.unsplash.com/photo-1590483736622-39da8af75bba?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Mini Carregadeira (Bobcat)',
    desc: 'Especialista em locais apertados, limpeza de canteiros e demolições internas.',
    highlight: 'Compacta',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Mini Escavadeira',
    desc: 'Força e precisão para piscinas e serviços delicados próximos a muros e jardins.',
    highlight: 'Precisa',
    img: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Implementos Especiais',
    desc: 'Martelo Rompedor, Perfuratriz e Valetadeira para necessidades específicas.',
    highlight: 'Completo',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop'
  }
];

export const Fleet: React.FC = () => {
  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              A Máquina Certa para o Serviço Certo
            </h2>
            <p className="text-xl text-primary font-medium italic">
              "Nossa frota está sempre revisada e pronta para qualquer desafio."
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-xl bg-secondary aspect-video">
                <img 
                  src={machine.img} 
                  alt={machine.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded uppercase mb-3">
                    {machine.highlight}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{machine.title}</h3>
                  <p className="text-gray-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {machine.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
