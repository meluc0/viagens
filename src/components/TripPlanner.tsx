import React, { useState, useMemo } from 'react';
import { Sliders, Check, Sparkles, MessageCircle, Send, Users, Compass, Shield, Clock } from 'lucide-react';
import { Currency } from '../types';
import { formatCurrency } from '../utils/formatters';

interface TripPlannerProps {
  currency: Currency;
  onOpenQuoteModalWithData: (summary: string) => void;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({
  currency,
  onOpenQuoteModalWithData,
}) => {
  const [selectedRegion, setSelectedRegion] = useState('Europa Clássica');
  const [travelersType, setTravelersType] = useState('Casal / Dois Adultos');
  const [hotelStandard, setHotelStandard] = useState('Luxo 5★ & Boutique');
  const [duration, setDuration] = useState('12 a 14 dias');
  const [selectedPerks, setSelectedPerks] = useState<string[]>([
    'Guia privativo em português',
    'Chip eSIM 5G ilimitado',
    'Seguro viagem internacional ampliado',
  ]);

  const regions = [
    { name: 'Europa Clássica', basePrice: 15500, desc: 'França, Itália, Reino Unido, Suíça e Espanha' },
    { name: 'Ásia Milenar', basePrice: 18200, desc: 'Japão, Bali, Tailândia e Vietnã' },
    { name: 'África & Safáris', basePrice: 22400, desc: 'Tanzânia, África do Sul e Zanzibar' },
    { name: 'Neve & Aurora Boreal', basePrice: 19800, desc: 'Noruega, Islândia e Lapônia' },
    { name: 'América do Norte', basePrice: 14900, desc: 'Nova York, Califórnia e Canadá' },
  ];

  const travelerMultipliers: Record<string, { multiplier: number; label: string; icon: string }> = {
    'Casal / Dois Adultos': { multiplier: 2, label: '2 Viajantes', icon: '👫' },
    'Família (3 a 4 pessoas)': { multiplier: 3.5, label: 'Família (3-4)', icon: '👨‍👩‍👧‍👦' },
    'Solo Traveler (Individual)': { multiplier: 1.15, label: 'Individual', icon: '🧳' },
    'Grupo de Amigos (4+)': { multiplier: 4.8, label: 'Grupo', icon: '🥂' },
  };

  const hotelStandards: Record<string, { multiplier: number; label: string; desc: string }> = {
    'Conforto Premium 4★': { multiplier: 1.0, label: '4 Estrelas Superior', desc: 'Localizações nobres e excelente custo-benefício' },
    'Luxo 5★ & Boutique': { multiplier: 1.28, label: '5 Estrelas & Boutique', desc: 'Hotéis icônicos, vistas exclusivas e alta gastronomia' },
    'Palácio & Ultra Luxo': { multiplier: 1.65, label: 'Ultra Luxo & Resorts', desc: 'Relais & Châteaux, suítes privativas e mordomo' },
  };

  const perkOptions = [
    { id: 'Guia privativo em português', label: 'Guia privativo falando português', price: 1800 },
    { id: 'Salas VIP nos aeroportos', label: 'Acesso às Salas VIP dos Aeroportos (LoungeKey)', price: 500 },
    { id: 'Transfers executivos privativos', label: 'Transfers em carro executivo exclusivo', price: 1200 },
    { id: 'Chip eSIM 5G ilimitado', label: 'Chip eSIM internacional com internet 5G ilimitada', price: 300 },
    { id: 'Seguro viagem internacional ampliado', label: 'Seguro saúde com cobertura de US$ 150.000', price: 700 },
  ];

  const togglePerk = (id: string) => {
    if (selectedPerks.includes(id)) {
      setSelectedPerks(selectedPerks.filter((p) => p !== id));
    } else {
      setSelectedPerks([...selectedPerks, id]);
    }
  };

  const calculatedEstimate = useMemo(() => {
    const regionObj = regions.find((r) => r.name === selectedRegion) || regions[0];
    const travelerObj = travelerMultipliers[travelersType] || travelerMultipliers['Casal / Dois Adultos'];
    const hotelObj = hotelStandards[hotelStandard] || hotelStandards['Luxo 5★ & Boutique'];

    let base = regionObj.basePrice * travelerObj.multiplier * hotelObj.multiplier;

    // Add perks
    selectedPerks.forEach((pId) => {
      const perk = perkOptions.find((p) => p.id === pId);
      if (perk) base += perk.price;
    });

    return Math.round(base);
  }, [selectedRegion, travelersType, hotelStandard, selectedPerks]);

  const planningSummary = `Planejamento Sob Medida:
- Região: ${selectedRegion}
- Viajantes: ${travelersType}
- Padrão de Estadia: ${hotelStandard}
- Duração: ${duration}
- Adicionais: ${selectedPerks.join(', ') || 'Nenhum'}
- Estimativa aproximada: ${formatCurrency(calculatedEstimate, currency)}`;

  const handleWhatsAppDirect = () => {
    const encoded = encodeURIComponent(`Olá equipe da Horizonte Viagens! Fiz uma simulação de roteiro internacional no site e gostaria de conversar com um especialista:\n\n${planningSummary}`);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
  };

  return (
    <section id="planejador" className="py-20 bg-stone-900 text-stone-100 scroll-mt-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulador Interativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-white tracking-tight">
            Monte Seu Roteiro Internacional Sob Medida
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg">
            Escolha as suas preferências de viagem e veja em tempo real uma estimativa transparente
            com todos os serviços premium inclusos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 bg-stone-950/60 border border-stone-800 p-6 sm:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            {/* Step 1: Destino */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Compass className="w-4 h-4" />
                <span>1. Região do Mundo Pretendida</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {regions.map((reg) => (
                  <button
                    key={reg.name}
                    type="button"
                    onClick={() => setSelectedRegion(reg.name)}
                    className={`p-3 rounded-xl text-left border transition cursor-pointer ${
                      selectedRegion === reg.name
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-sm'
                        : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{reg.name}</span>
                      {selectedRegion === reg.name && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-1">{reg.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Viajantes */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Users className="w-4 h-4" />
                <span>2. Formato da Viagem</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.entries(travelerMultipliers).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTravelersType(key)}
                    className={`p-2.5 rounded-xl text-center border transition cursor-pointer ${
                      travelersType === key
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow'
                        : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="text-xl mb-1">{value.icon}</div>
                    <span className="text-xs block leading-tight">{value.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Hospedagem */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>3. Categoria de Hospedagem</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(hotelStandards).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setHotelStandard(key)}
                    className={`p-3 rounded-xl text-left border transition cursor-pointer ${
                      hotelStandard === key
                        ? 'bg-amber-500/15 border-amber-500 text-white'
                        : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <p className="text-xs font-bold">{value.label}</p>
                    <p className="text-[10px] text-stone-400 mt-1 leading-snug">{value.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Duração */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Clock className="w-4 h-4" />
                <span>4. Duração Estimada</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {['8 a 10 dias', '12 a 14 dias', '15 a 18 dias', '21+ dias'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                      duration === d
                        ? 'bg-stone-100 text-stone-950 font-bold border-white'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Experiências e Cuidados Adicionais */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Shield className="w-4 h-4" />
                <span>5. Serviços e Confortos Adicionais</span>
              </label>
              <div className="space-y-2">
                {perkOptions.map((perk) => {
                  const isChecked = selectedPerks.includes(perk.id);
                  return (
                    <div
                      key={perk.id}
                      onClick={() => togglePerk(perk.id)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                        isChecked
                          ? 'bg-stone-900 border-amber-500/80 text-stone-100'
                          : 'bg-stone-950/40 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition ${
                            isChecked
                              ? 'bg-amber-500 border-amber-500 text-stone-950'
                              : 'border-stone-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{perk.label}</span>
                      </div>
                      <span className="text-stone-400 text-[11px] font-mono">
                        +{formatCurrency(perk.price, currency)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-5">
            <div className="bg-gradient-to-b from-stone-850 to-stone-950 border border-amber-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Estimativa da Viagem
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold">
                  Sem Compromisso
                </span>
              </div>

              <div className="py-5 text-center">
                <span className="text-xs text-stone-400 block mb-1">
                  Investimento total estimado para a configuração:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif-display text-amber-300 tracking-tight">
                  {formatCurrency(calculatedEstimate, currency)}
                </div>
                <span className="text-xs text-stone-400 mt-2 block">
                  Ou em até 10x de {formatCurrency(Math.round(calculatedEstimate / 10), currency)} sem juros
                </span>
              </div>

              {/* What is included guarantee */}
              <div className="space-y-2 py-4 border-t border-stone-800 text-xs text-stone-300">
                <p className="font-semibold text-stone-200">Garantias incluídas neste plano:</p>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Consultor especialista dedicado antes e durante o roteiro</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Plantão de emergência 24h em português no fuso horário do destino</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Assessoria consular e documental para vistos internacionais</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Trava cambial garantida no momento da reserva</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-stone-800 space-y-3">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModalWithData(planningSummary)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Proposta Formal Gratuita</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar Agora no WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-stone-400">
                  Resposta rápida em média em menos de 15 minutos em horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
