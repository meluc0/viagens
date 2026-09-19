import React, { useState, useMemo } from 'react';
import { MapPin, Calendar, Star, CheckCircle, ArrowRight, ShieldCheck, Filter } from 'lucide-react';
import { Destination, Currency } from '../types';
import { DESTINATIONS } from '../data/travelData';
import { formatCurrency } from '../utils/formatters';

interface DestinationsSectionProps {
  currency: Currency;
  activeContinentFilter?: string;
  activeCategoryFilter?: string;
  onSelectDestination: (dest: Destination) => void;
  onOpenQuoteModal: (prefillDestination?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  currency,
  activeContinentFilter,
  activeCategoryFilter,
  onSelectDestination,
  onOpenQuoteModal,
}) => {
  const [selectedContinent, setSelectedContinent] = useState<string>(activeContinentFilter || 'Todos');
  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategoryFilter || 'Todos');

  // Update when props change
  React.useEffect(() => {
    if (activeContinentFilter) setSelectedContinent(activeContinentFilter);
  }, [activeContinentFilter]);

  React.useEffect(() => {
    if (activeCategoryFilter) setSelectedCategory(activeCategoryFilter);
  }, [activeCategoryFilter]);

  const continents = ['Todos', 'Europa', 'Ásia', 'Américas', 'África e Oriente Médio'];
  const categories = ['Todos', 'Romance', 'Luxo', 'Família', 'Aventura', 'Cultural'];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchContinent = selectedContinent === 'Todos' || item.continent === selectedContinent;
      const matchCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      return matchContinent && matchCategory;
    });
  }, [selectedContinent, selectedCategory]);

  return (
    <section id="destinos" className="py-20 bg-stone-100 text-stone-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Destinos Internacionais Curados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 tracking-tight">
            Experiências Extraordinárias pelo Mundo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Cada roteiro é desenhado minuciosamente com as melhores conexões aéreas,
            hotéis de alto padrão e vivências autênticas guiadas por especialistas locais.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-10">
          {/* Continent tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedContinent === continent
                    ? 'bg-stone-900 text-amber-300 shadow-md scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {continent}
              </button>
            ))}
          </div>

          {/* Category tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 text-xs">
            <span className="flex items-center gap-1 text-stone-500 font-semibold px-2">
              <Filter className="w-3.5 h-3.5" />
              Estilo:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-600 text-lg font-medium">
              Nenhum roteiro encontrado com essa combinação de filtros.
            </p>
            <button
              onClick={() => {
                setSelectedContinent('Todos');
                setSelectedCategory('Todos');
              }}
              className="mt-4 px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-stone-800"
            >
              Ver todos os destinos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => {
              return (
                <div
                  key={destination.id}
                  id={`destination-${destination.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/80 text-white backdrop-blur-sm">
                        {destination.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-400 text-stone-950 flex items-center gap-1 shadow">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{destination.rating}</span>
                      </span>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{destination.country} • {destination.continent}</span>
                      </div>
                      <h3 className="text-xl font-bold font-serif-display leading-tight text-white drop-shadow-sm">
                        {destination.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {destination.tagline}
                      </p>

                      {/* Visa badge */}
                      <div className="mt-3">
                        {destination.visaRequiredForBrazilians ? (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                            <span>Assessoria de Visto Inclusa</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Sem necessidade de visto para brasileiros</span>
                          </div>
                        )}
                      </div>

                      {/* Top Highlights Preview */}
                      <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                          Destaques do Roteiro
                        </p>
                        {destination.highlights.slice(0, 2).map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                            <span className="text-amber-500 font-bold mt-0.5">•</span>
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Action */}
                    <div className="pt-4 border-t border-stone-100 flex items-end justify-between">
                      <div>
                        <span className="text-[11px] text-stone-500 block">
                          A partir de ({destination.durationDays} dias / pessoa):
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-extrabold text-stone-900 font-serif-display">
                            {formatCurrency(destination.priceBRL, currency)}
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-semibold block">
                          Em até 10x sem juros ou 5% no Pix
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectDestination(destination)}
                        className="px-3.5 py-2 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                        title="Ver roteiro completo"
                      >
                        <span>Detalhes</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Itinerary Invitation */}
        <div className="mt-14 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-white">
              Não encontrou o destino ou duração que procurava?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              Nossa equipe de consultores internacionais monta roteiros totalmente personalizados
              para qualquer lugar do globo, no seu tempo e com suas preferências.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Roteiro Personalizado')}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-lg hover:shadow-amber-500/20 transition cursor-pointer"
          >
            Criar Viagem Sob Medida
          </button>
        </div>
      </div>
    </section>
  );
};
