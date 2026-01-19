
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Fleet } from './components/Fleet';
import { WorkModes } from './components/WorkModes';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ContactForm } from './components/islands/ContactForm';

const App: React.FC = () => {
  useEffect(() => {
    // Garante que ao carregar a página com um hash, o scroll respeite a margem do header
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* Serviços Section */}
        <section id="servicos" className="scroll-mt-16 md:scroll-mt-24">
          <Services />
        </section>

        {/* Sobre Nós Section */}
        <section id="sobre" className="scroll-mt-16 md:scroll-mt-24">
          <About />
        </section>

        {/* Frota Section */}
        <section id="frota" className="scroll-mt-16 md:scroll-mt-24">
          <Fleet />
          <WorkModes />
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="scroll-mt-16 md:scroll-mt-24">
          <Testimonials />
        </section>

        {/* Contato Section */}
        <section id="contato" className="scroll-mt-16 md:scroll-mt-24">
          <div className="bg-secondary py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-display font-bold mb-6 text-primary">
                  Solicite um Orçamento Técnico
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Estamos prontos para analisar seu projeto e entregar a melhor solução em terraplanagem e locação.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white flex items-center justify-center rounded-full text-xs">✓</span>
                    Atendimento em São Paulo e Região
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white flex items-center justify-center rounded-full text-xs">✓</span>
                    Consultoria especializada inclusa
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white flex items-center justify-center rounded-full text-xs">✓</span>
                    Frota 100% revisada
                  </li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
