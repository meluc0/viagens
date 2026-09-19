import React from 'react';
import { Headphones, ShieldAlert, Award, CreditCard, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const TravelAssistance: React.FC = () => {
  const differentiators = [
    {
      icon: <Headphones className="w-6 h-6 text-amber-500" />,
      title: 'Concierge 24/7 em Português',
      description:
        'Não importa se você está em Tóquio, Roma ou no meio do Serengeti: nosso time de plantão responde imediatamente via WhatsApp no fuso horário do seu destino para resolver qualquer necessidade.',
      perk: 'Plantão emergencial ativo 365 dias ao ano',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
      title: 'Assessoria Consular & Vistos',
      description:
        'Cuidamos de toda a burocracia de vistos internacionais (EUA, Canadá, Austrália, ETIAS para Europa, Ásia e África). Revisão minuciosa de documentos e antecipação de agendamentos.',
      perk: 'Taxa de aprovação consular superior a 98%',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-amber-500" />,
      title: 'Proteção Cambial & Parcelamento em 12x',
      description:
        'Sem surpresas na fatura com oscilação do dólar ou euro. O valor é fixado em reais no momento do fechamento, parcelado em até 12x sem juros e sem incidência de IOF de cartão internacional.',
      perk: 'Economia média de 6% a 9% em tributos',
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: 'Benefícios VIP em Hotéis 5 Estrelas',
      description:
        'Graças às nossas parcerias diretas com as redes hoteleiras mais prestigiosas do planeta, nossos clientes desfrutam de early check-in, late check-out, café da manhã cortesia e upgrades de quarto.',
      perk: 'Mimos exclusivos e créditos para experiências gastronômicas',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-stone-900 text-stone-100 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            <span>A Certeza da Melhor Experiência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-white tracking-tight">
            Por que Escolher a Horizonte Viagens?
          </h2>
          <p className="mt-4 text-stone-400 text-base sm:text-lg">
            Viajar para o exterior deve ser sinônimo de encantamento e descanso. Cuidamos de todos
            os bastidores técnicos para você apenas viver os melhores momentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-stone-950/80 border border-stone-800 hover:border-amber-500/50 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center mb-5 group-hover:bg-amber-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-serif-display mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-amber-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400" />
                <span>{item.perk}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-14 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-transparent border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-amber-300">
              Imprevisto com voo ou bagagem no aeroporto internacional?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
              Você tem um número de WhatsApp emergencial direto com nossa equipe de operações para
              reacomodação imediata e assistência com as companhias aéreas.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20atendimento%20da%20Horizonte"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition"
          >
            Conhecer Nosso Protocolo de Segurança
          </a>
        </div>
      </div>
    </section>
  );
};
