import React from 'react';
import { Plane, Moon, Check, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { Currency } from '../types';
import { PACKAGES } from '../data/travelData';
import { formatCurrency } from '../utils/formatters';

interface PackagesSectionProps {
  currency: Currency;
  onOpenQuoteModal: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  currency,
  onOpenQuoteModal,
}) => {
  return (
    <section id="pacotes" className="py-20 bg-stone-50 text-stone-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Pacotes Internacionais Completos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 tracking-tight">
            Roteiros Prontos com Passagem e Hospedagem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Aéreo internacional em companhias de primeira linha, hotéis de categoria superior
            e passeios essenciais combinados para uma viagem sem preocupações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                id={`package-${pkg.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Image side */}
                <div className="relative sm:w-2/5 h-60 sm:h-auto overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-stone-950/70 to-transparent" />
                  {pkg.featuredBadge && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-stone-950 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span>{pkg.featuredBadge}</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center gap-1 text-xs font-semibold">
                      <Moon className="w-3.5 h-3.5 text-amber-300" />
                      <span>{pkg.nights} Noites</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                      {pkg.destinations}
                    </span>
                    <h3 className="text-xl font-bold font-serif-display text-stone-900 mt-1 leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {pkg.hotelCategory} • {pkg.departureDates}
                    </p>

                    <div className="mt-3 space-y-1.5 pt-2 border-t border-stone-100">
                      {pkg.perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] text-stone-500 block">
                        Por pessoa a partir de:
                      </span>
                      <div className="text-2xl font-black text-stone-950 font-serif-display">
                        {formatCurrency(pkg.priceBRL, currency)}
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold block">
                        Em até 12x sem juros no cartão
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenQuoteModal(`Pacote: ${pkg.title}`)}
                      className="px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>Garantir Vaga</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
