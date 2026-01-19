
import React from 'react';
import { Hammer, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    if (id === 'home') {
      window.location.href = '/';
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        const offset = 80; // Compensação do header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = elem.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Hammer className="text-primary h-8 w-8" />
              <span className="font-display font-extrabold text-2xl tracking-tight">
                SÃO VITOR <span className="text-primary">LOCAÇÕES</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Empresa especializada em serviços de terraplanagem e locação de máquinas pesadas. Precisão, pontualidade e frota 100% revisada para obras em São Paulo e região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 text-left">Home</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'servicos')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 text-left">Serviços</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'frota')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 text-left">Frota</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'sobre')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 text-left">Sobre Nós</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contato')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0 text-left">Contato</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white uppercase tracking-widest">Atendimento</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex flex-col">
                <span className="text-xs text-primary uppercase font-bold">Endereço</span>
                <span>São Paulo, SP - Região Metropolitana</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-primary uppercase font-bold">Telefone / WhatsApp</span>
                <span>(11) 99680-9510</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-primary uppercase font-bold">E-mail</span>
                <span>contato@saovitorlocacoes.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>©{year} São Vitor Locações. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
