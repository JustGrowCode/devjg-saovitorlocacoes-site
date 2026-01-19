
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
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

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

  const whatsappLink = "https://wa.me/5511996809510?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20obra.";

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
          <div className="bg-secondary py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-display font-bold mb-6 text-primary">
                Fale com Nossos Especialistas
              </h2>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                Estamos prontos para analisar seu projeto e entregar a melhor solução em terraplanagem e locação. Entre em contato direto pelo WhatsApp ou telefone.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-8 text-left">
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full text-primary">
                          <Phone size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Telefone / WhatsApp</h4>
                          <p className="text-gray-400 text-lg font-medium">+55 11 99680-9510</p>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full text-primary">
                          <Mail size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">E-mail</h4>
                          <p className="text-gray-400">contato@saovitorlocacoes.com.br</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-full text-primary">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">Atendimento</h4>
                          <p className="text-gray-400">São Paulo e Região Metropolitana</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col justify-center items-center space-y-6 border-t md:border-t-0 md:border-l border-gray-700 pt-8 md:pt-0 md:pl-8">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                    >
                      <MessageCircle size={24} />
                      Chamar no WhatsApp
                    </a>
                    <p className="text-gray-500 text-sm">
                      Atendimento rápido em horário comercial.<br/>
                      Segunda a Sexta das 07:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>
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
