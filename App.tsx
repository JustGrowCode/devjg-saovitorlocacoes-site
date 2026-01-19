
import React, { useState, useEffect } from 'react';
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
  const [activeTab, setActiveTab] = useState('home');

  // Simple hash-based router simulation for internal sections
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Sections with scroll-mt to account for fixed header height */}
        <section id="home">
          <Hero />
        </section>
        
        <section id="servicos" className="scroll-mt-20 md:scroll-mt-24">
          <Services />
        </section>

        <section id="sobre" className="scroll-mt-20 md:scroll-mt-24">
          <About />
        </section>

        <section id="frota" className="scroll-mt-20 md:scroll-mt-24">
          <Fleet />
          <WorkModes />
        </section>

        <section id="depoimentos" className="scroll-mt-20 md:scroll-mt-24">
          <Testimonials />
        </section>

        <section id="contato" className="scroll-mt-20 md:scroll-mt-24">
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
