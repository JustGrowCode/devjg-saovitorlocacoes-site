
import React from 'react';
import { Package, Timer, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './islands/FadeIn';

export const WorkModes: React.FC = () => {
  return (
    <div className="bg-secondary py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 text-white">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Você Escolhe Como Trabalhar
            </h2>
            <p className="text-xl text-primary opacity-80 italic">
              "Duas modalidades para atender suas necessidades específicas"
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Empreita */}
          <FadeIn direction="left">
            <div className="bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden border-t-8 border-primary">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Package className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary">Empreita (Serviço Pronto)</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Solução completa onde a empresa analisa o projeto e entrega o serviço finalizado. Você foca no gerenciamento e nós na execução bruta.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium">Preço fixo por projeto</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium">Prazo garantido em contrato</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium">Operador, combustível e gestão inclusos</p>
                </div>
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Ideal para: Projetos completos com prazo definido.</p>
              <a href="#contato" className="block text-center bg-secondary text-white font-bold py-4 rounded-lg hover:bg-black transition-colors">
                Contratar Empreita
              </a>
            </div>
          </FadeIn>

          {/* Locação */}
          <FadeIn direction="right">
            <div className="bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden border-t-8 border-accent">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Timer className="text-accent w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary">Locação (Hora ou Mês)</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                O cliente aluga o equipamento e gerencia o serviço pelo tempo que precisar. Ideal para quem já possui equipe e precisa de fôlego mecânico.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium">Controle total da operação diária</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium">Flexibilidade total de cronograma</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm font-medium">Opções com ou sem operador especializado</p>
                </div>
              </div>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Ideal para: Flexibilidade e controle direto da obra.</p>
              <a href="#contato" className="block text-center bg-accent text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors">
                Alugar Equipamento
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
