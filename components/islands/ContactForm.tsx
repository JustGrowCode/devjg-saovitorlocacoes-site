
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-secondary mb-2">Mensagem Enviada!</h3>
        <p className="text-gray-600">Obrigado pelo contato. Um de nossos especialistas ligará para você em breve.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-primary font-bold hover:underline"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-2xl">
      <div className="grid gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nome Completo</label>
          <input 
            required
            type="text" 
            placeholder="Ex: João da Silva"
            className="w-full px-4 py-3 bg-ice border-none rounded focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">E-mail</label>
            <input 
              required
              type="email" 
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-ice border-none rounded focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Telefone / WhatsApp</label>
            <input 
              required
              type="tel" 
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 bg-ice border-none rounded focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Tipo de Serviço</label>
          <select className="w-full px-4 py-3 bg-ice border-none rounded focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
            <option>Terraplanagem (Empreita)</option>
            <option>Locação de Maquinário</option>
            <option>Demolição</option>
            <option>Perfuração / Estacas</option>
            <option>Outros</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Conte sobre sua Obra</label>
          <textarea 
            required
            rows={4}
            placeholder="Descreva brevemente sua necessidade..."
            className="w-full px-4 py-3 bg-ice border-none rounded focus:ring-2 focus:ring-primary outline-none transition-all"
          ></textarea>
        </div>
        <button 
          disabled={status === 'loading'}
          className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : 'SOLICITAR ORÇAMENTO AGORA'}
        </button>
      </div>
    </form>
  );
};
