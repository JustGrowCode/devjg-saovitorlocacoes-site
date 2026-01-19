
import React from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';
import { FadeIn } from './islands/FadeIn';

export const About: React.FC = () => {
  return (
    <div className="bg-ice py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6 leading-tight">
                Por Que Escolher a <br />
                <span className="text-primary">São Vitor Locações?</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                No mercado de terraplanagem, a escolha do parceiro certo faz toda a diferença. Com mais de 30 anos de experiência, consolidamos nossa reputação na entrega de projetos com excelência. Nossa missão é oferecer soluções completas e eficientes, superando as expectativas através da precisão, pontualidade e segurança.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary font-display">Equipe Qualificada e Certificada</h4>
                    <p className="text-gray-600">Operadores treinados para máxima segurança e eficiência operacional.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary font-display">Zero Tempo de Máquina Parada</h4>
                    <p className="text-gray-600">Frota própria com manutenção preventiva rigorosa em dia.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary font-display">Compromisso com Prazos</h4>
                    <p className="text-gray-600">Planejamento detalhado e execução impecável respeitando seu cronograma.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 relative">
            <FadeIn direction="right">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Operação de terraplanagem"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 border-[16px] border-primary/10 pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full z-0 opacity-10"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary rounded-full z-0 opacity-10"></div>
              
              <div className="absolute bottom-6 left-6 bg-secondary text-white p-6 rounded-lg shadow-xl z-20 max-w-xs">
                <p className="text-4xl font-display font-extrabold text-primary mb-1">30+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Anos de Experiência no Mercado</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
