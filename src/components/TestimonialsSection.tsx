import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-stone-50 text-stone-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>Depoimentos Reais de Viajantes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-stone-900 tracking-tight">
            Memórias Inesquecíveis que Ajudamos a Construir
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Mais de 28.000 clientes já desbravaram os cinco continentes com nosso suporte dedicado.
            Veja o que diz quem já viajou conosco.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>Nota média 4.98 / 5.0 baseada em mais de 1.450 avaliações verificadas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-amber-200 absolute top-5 right-5 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-stone-700 text-sm italic leading-relaxed relative z-10">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/60"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm text-stone-900">{t.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-xs text-stone-500">{t.city}</p>
                  <p className="text-[11px] font-semibold text-amber-700 mt-0.5">
                    {t.trip} ({t.year})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
