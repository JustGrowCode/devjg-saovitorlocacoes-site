
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
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Frota', href: '#frota' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#home') {
      // Refresh na LP conforme solicitado: volta ao topo e limpa a URL
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        window.location.hash = '';
      }, 500);
    } else {
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Hammer className="text-primary h-8 w-8 transition-transform group-hover:rotate-12" />
            <span className="text-white font-display font-extrabold text-xl tracking-tight">
              SÃO VITOR <span className="text-primary">LOCAÇÕES</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-md font-bold transition-all transform hover:scale-105 cursor-pointer"
            >
              ORÇAMENTO
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none transition-colors"
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
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-white hover:text-primary hover:bg-gray-800 px-4 py-4 font-medium border-b border-gray-700 last:border-none transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 pt-6">
            <a
              href="#contato"
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="block w-full text-center bg-primary text-white py-4 rounded-md font-bold shadow-lg active:scale-95 transition-transform cursor-pointer"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
