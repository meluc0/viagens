import React, { useState } from 'react';
import { Search, ShieldCheck, Headphones, Award, PlaneTakeoff, Sparkles } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: { region?: string; category?: string }) => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenQuoteModal }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [travelMonth, setTravelMonth] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      region: selectedRegion || undefined,
      category: selectedCategory || undefined,
    });
    const destSection = document.getElementById('destinos');
    if (destSection) {
      destSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with warm/dark luxury treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Paisagem internacional paradisíaca"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Especialistas em Experiências Internacionais Sob Medida</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif-display tracking-tight leading-[1.12] text-stone-50 max-w-4xl mx-auto">
          O mundo ao seu alcance com a segurança que você merece.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
          Roteiros internacionais personalizados, hotéis selecionados a dedo,
          assessoria completa de vistos e{' '}
          <strong className="text-amber-300 font-semibold">suporte concierge 24 horas em português</strong>{' '}
          durante toda a sua estadia no exterior.
        </p>

        {/* Interactive Trip Finder Bar */}
        <div className="mt-10 max-w-4xl mx-auto bg-stone-900/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-stone-700/80 shadow-2xl text-left">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Região / Continente */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                Região / Destino
              </label>
              <select
                id="hero-region-select"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-stone-800/90 border border-stone-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              >
                <option value="">Todos os Continentes</option>
                <option value="Europa">Europa (Itália, França, Suíça...)</option>
                <option value="Ásia">Ásia (Japão, Bali, Tailândia...)</option>
                <option value="África e Oriente Médio">África & Oriente Médio</option>
                <option value="Américas">Américas (EUA, Canadá, Patagônia)</option>
              </select>
            </div>

            {/* Estilo de Viagem */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                Estilo da Viagem
              </label>
              <select
                id="hero-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-stone-800/90 border border-stone-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              >
                <option value="">Qualquer Estilo</option>
                <option value="Romance">Lua de Mel & Romance</option>
                <option value="Família">Família & Conforto</option>
                <option value="Luxo">Luxo & Gastronomia</option>
                <option value="Aventura">Aventura & Natureza</option>
                <option value="Cultural">Cultural & Histórico</option>
              </select>
            </div>

            {/* Época / Mês */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                Quando Pretende Ir
              </label>
              <select
                id="hero-month-select"
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-stone-800/90 border border-stone-700 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              >
                <option value="">Flexível / Indiferente</option>
                <option value="primeiro-semestre">Próximos 3 meses</option>
                <option value="julho">Férias de Julho 2026</option>
                <option value="segundo-semestre">Primavera / Outono 2026</option>
                <option value="reveillon">Réveillon & Fim de Ano</option>
              </select>
            </div>

            {/* CTA Search Button */}
            <div className="flex items-end">
              <button
                id="hero-search-button"
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Explorar Roteiros</span>
              </button>
            </div>
          </form>

          {/* Quick links inside search box */}
          <div className="mt-3 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <PlaneTakeoff className="w-3.5 h-3.5 text-amber-400" />
              Destinos em alta: Tóquio, Costa Amalfitana, Suíça e Safári Serengeti
            </span>
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition"
            >
              Ou prefere um roteiro 100% personalizado?
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-200">15+ Anos de Excelência</p>
              <p className="text-[11px] text-stone-400">Agência IATA & Cadastur</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-200">Concierge 24/7</p>
              <p className="text-[11px] text-stone-400">Suporte em português</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-200">Segurança Jurídica</p>
              <p className="text-[11px] text-stone-400">Assessoria total de vistos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-800 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-200">99.6% de Satisfação</p>
              <p className="text-[11px] text-stone-400">+28.000 clientes no mundo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
