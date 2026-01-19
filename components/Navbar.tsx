
import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Sobre Nós', id: 'sobre' },
    { name: 'Frota', id: 'frota' },
    { name: 'Contato', id: 'contato' },
  ];

  const whatsappLink = "https://wa.me/5511996809510?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    if (id === 'home') {
      // Força o redirecionamento para a raiz, causando um refresh natural
      window.location.href = '/';
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        const offset = 80;
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
    
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => handleLinkClick(e, 'home')} 
            className="flex items-center gap-2 group cursor-pointer border-none bg-transparent"
          >
            <Hammer className="text-primary h-8 w-8 transition-transform group-hover:rotate-12" />
            <span className="text-white font-display font-extrabold text-xl tracking-tight">
              SÃO VITOR <span className="text-primary">LOCAÇÕES</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider cursor-pointer border-none bg-transparent"
              >
                {link.name}
              </button>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-md font-bold transition-all transform hover:scale-105 cursor-pointer border-none flex items-center"
            >
              WHATSAPP
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none transition-colors bg-transparent border-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-secondary shadow-xl transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible border-t border-gray-700' : 'scale-y-0 opacity-0 invisible h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="block w-full text-left text-white hover:text-primary hover:bg-gray-800 px-4 py-4 font-medium border-b border-gray-700 last:border-none transition-colors cursor-pointer bg-transparent"
            >
              {link.name}
            </button>
          ))}
          <div className="px-4 pt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-white py-4 rounded-md font-bold shadow-lg active:scale-95 transition-transform cursor-pointer border-none"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
