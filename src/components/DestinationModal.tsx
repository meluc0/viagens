import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, ShieldCheck, Star, Plane, Clock, Award, MessageCircle } from 'lucide-react';
import { Destination, Currency } from '../types';
import { formatCurrency } from '../utils/formatters';

interface DestinationModalProps {
  destination: Destination | null;
  currency: Currency;
  onClose: () => void;
  onOpenQuoteModal: (prefill: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  currency,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!destination) return null;

  const [activePhoto, setActivePhoto] = useState<string>(destination.image);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Olá! Estou no site da Horizonte e me encantei com o roteiro de "${destination.name}" (${destination.durationDays} dias). Gostaria de receber mais detalhes e valores atualizados!`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
              {destination.continent}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {destination.category} • {destination.durationDays} Dias
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-7">
          {/* Main Visual & Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-stone-900 leading-tight">
              {destination.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-stone-600">
              <span className="flex items-center gap-1 text-amber-700 font-semibold">
                <MapPin className="w-4 h-4" />
                {destination.country}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-stone-400" />
                Melhor época: {destination.bestSeason}
              </span>
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-current" />
                {destination.rating} ({destination.reviewsCount} avaliações)
              </span>
            </div>
          </div>

          {/* Photo Gallery with selector */}
          <div className="space-y-2">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-inner">
              <img
                src={activePhoto}
                alt={destination.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[destination.image, ...destination.gallery].map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(photo)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition cursor-pointer ${
                    activePhoto === photo ? 'border-amber-500 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base text-stone-700 italic border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r-lg">
            "{destination.tagline}"
          </p>

          {/* Visa information card */}
          <div className="p-4 rounded-xl border bg-stone-50 border-stone-200">
            <div className="flex items-start gap-3">
              {destination.visaRequiredForBrazilians ? (
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Regras de Visto e Entrada para Brasileiros
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  {destination.visaNote}
                </p>
              </div>
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div>
            <h3 className="text-lg font-bold font-serif-display text-stone-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Roteiro Dia a Dia Sugerido</span>
            </h3>
            <div className="space-y-3 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-stone-200">
              {destination.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-start gap-4 pl-8">
                  <div className="absolute left-1.5 top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow" />
                  <div className="bg-stone-50 border border-stone-200/80 p-3.5 rounded-xl w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                        Dia {day.day}: {day.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is Included */}
          <div>
            <h3 className="text-lg font-bold font-serif-display text-stone-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>O que está Incluído neste Roteiro</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.included.map((inc, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-emerald-950">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Price & Actions */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-stone-500 block">
              Investimento por pessoa em apto duplo:
            </span>
            <div className="text-2xl font-black text-stone-900 font-serif-display">
              {formatCurrency(destination.priceBRL, currency)}
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold block">
              Em até 10x sem juros no cartão ou desconto à vista
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(`Roteiro: ${destination.name}`);
              }}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-md transition cursor-pointer text-center"
            >
              Solicitar Cotação Personalizada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
