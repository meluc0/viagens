import React, { useState } from 'react';
import { Compass, ShieldCheck, Mail, Phone, MapPin, CheckCircle, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Newsletter Bar */}
      <div className="border-b border-stone-800/80 bg-stone-900/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold font-serif-display text-white">
              Receba Curadorias Exclusivas e Alertas de Tarifas
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Cadastre-se na nossa newsletter privativa e receba dicas de destinos, mudanças de regras de vistos e promoções secretas.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm bg-emerald-950/60 border border-emerald-800 px-4 py-2.5 rounded-xl">
                <CheckCircle className="w-4 h-4" />
                <span>Inscrição confirmada! Você receberá nosso guia mensal.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-96">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shrink-0 transition"
                >
                  Inscrever
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Credentials (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-white font-serif-display uppercase">
                Horizonte
              </span>
              <span className="block text-[9px] tracking-[0.2em] text-amber-400 font-semibold uppercase">
                Viagens Internacionais
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
            Desde 2011 desenhando experiências de viagens extraordinárias pelo mundo.
            Membro oficial da IATA, credenciada Cadastur e parceira das maiores redes de hospitalidade de luxo global.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Accreditations badges */}
          <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-stone-400">
            <span className="px-2.5 py-1 bg-stone-900 border border-stone-800 rounded-md">
              IATA 57-5 2910
            </span>
            <span className="px-2.5 py-1 bg-stone-900 border border-stone-800 rounded-md">
              Cadastur 26.042.890/0001-44
            </span>
            <span className="px-2.5 py-1 bg-stone-900 border border-stone-800 rounded-md">
              ABAV Nacional
            </span>
          </div>
        </div>

        {/* Col 2: Destinos */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Destinos Globais
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><a href="#destinos" className="hover:text-amber-400 transition">Japão: Tóquio & Quioto</a></li>
            <li><a href="#destinos" className="hover:text-amber-400 transition">Itália: Costa Amalfitana & Roma</a></li>
            <li><a href="#destinos" className="hover:text-amber-400 transition">Suíça: Alpes & Glacier Express</a></li>
            <li><a href="#destinos" className="hover:text-amber-400 transition">Tanzânia & Safári Serengeti</a></li>
            <li><a href="#destinos" className="hover:text-amber-400 transition">Noruega & Aurora Boreal</a></li>
            <li><a href="#destinos" className="hover:text-amber-400 transition">Bali & Sudeste Asiático</a></li>
          </ul>
        </div>

        {/* Col 3: Serviços */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Serviços Especializados
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li><a href="#planejador" className="hover:text-amber-400 transition">Roteiros 100% Sob Medida</a></li>
            <li><a href="#contato" className="hover:text-amber-400 transition">Assessoria Consular de Vistos</a></li>
            <li><a href="#diferenciais" className="hover:text-amber-400 transition">Emissão de Passagens Aéreas</a></li>
            <li><a href="#diferenciais" className="hover:text-amber-400 transition">Seguro Viagem Internacional</a></li>
            <li><a href="#planejador" className="hover:text-amber-400 transition">Lua de Mel & Bodas</a></li>
            <li><a href="#checklist" className="hover:text-amber-400 transition">Checklist Pré-Embarque</a></li>
          </ul>
        </div>

        {/* Col 4: Contato */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            Central & Plantão
          </h4>
          <div className="space-y-2.5 text-xs text-stone-400">
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>(11) 3090-4800</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>contato@horizonteviagens.com.br</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>Av. Faria Lima, 3477 - 14º Andar, São Paulo - SP</span>
            </p>
            <p className="text-[11px] text-amber-400/90 pt-1 font-semibold">
              Plantão de Emergência 24h para passageiros em viagem.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-stone-800/80 py-6 text-center text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Horizonte Viagens Internacionais Ltda. CNPJ: 26.042.890/0001-44. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-300 transition">Termos de Serviço</a>
            <a href="#" className="hover:text-stone-300 transition">Política de Privacidade</a>
            <a href="#" className="hover:text-stone-300 transition">Condições Gerais de Contratação</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
