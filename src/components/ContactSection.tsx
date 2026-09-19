import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelMonth: '',
    travelers: '2',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${formData.name || 'um viajante'}. Gostaria de solicitar uma cotação para ${formData.destination || 'uma viagem internacional'}.`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-stone-900 text-stone-100 scroll-mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Agency Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Atendimento Exclusivo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-white tracking-tight leading-tight">
              Vamos Desenhar Sua Próxima Viagem?
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Conte-nos como você imagina sua viagem perfeita. Nossos consultores especialistas
              pesquisam as melhores opções de rotas aéreas, tarifas negociadas e experiências
              exclusivas sem nenhum custo ou compromisso.
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-800 text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">Central de Atendimento & Concierge</p>
                  <p className="text-xs text-stone-400">(11) 3090-4800 / (11) 99999-9999 (WhatsApp 24h)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">E-mail Corporativo</p>
                  <p className="text-xs text-stone-400">contato@horizonteviagens.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">Escritório Central (Atendimento com Hora Marcada)</p>
                  <p className="text-xs text-stone-400">
                    Av. Brigadeiro Faria Lima, 3477 - 14º Andar - Itaim Bibi, São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">Horário de Funcionamento</p>
                  <p className="text-xs text-stone-400">
                    Segunda a Sexta: 09h às 19h | Sábados: 09h às 14h | Plantão Emergencial 24h/7
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 text-xs text-stone-400 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <span>
                Agência Credenciada IATA (nº 57-5 2910) e Cadastur Ministério do Turismo.
                Garantia de segurança jurídica e financeira.
              </span>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950/90 border border-stone-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif-display text-white">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-white">{formData.name}</strong>. Nosso consultor
                  especialista já foi notificado e entrará em contato pelo WhatsApp e e-mail
                  em até 30 minutos em horário comercial com um roteiro preliminar.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Iniciar Conversa Imediata no WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        destination: '',
                        travelMonth: '',
                        travelers: '2',
                        notes: '',
                      });
                    }}
                    className="px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold"
                  >
                    Enviar Outra Solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-stone-800">
                  <h3 className="text-xl font-bold font-serif-display text-white">
                    Solicitar Cotação Sem Compromisso
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Preencha os dados abaixo para receber um orçamento detalhado com opções de aéreo e hotéis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Seu Nome Completo *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Carlos Eduardo Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">WhatsApp com DDD *</label>
                    <input
                      required
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">E-mail Principal *</label>
                    <input
                      required
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Destino Pretendido *</label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: Japão, Costa Amalfitana, Suíça..."
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Previsão de Mês / Ano</label>
                    <input
                      type="text"
                      placeholder="Ex: Julho 2026 / Outubro 2026"
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Número de Pessoas</label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="1">1 Pessoa (Solo)</option>
                      <option value="2">2 Pessoas (Casal / Dupla)</option>
                      <option value="3">3 Pessoas</option>
                      <option value="4">4 Pessoas (Família)</option>
                      <option value="5+">5+ Pessoas (Grupo)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Detalhes Adicionais ou Preferências (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte sobre interesses: lua de mel, vinícolas, ritmo relaxado, hotel com vista, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 transition cursor-pointer disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Processando solicitação...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Pedido de Cotação Gratuita</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-stone-400">
                  🔒 Seus dados estão seguros. Não enviamos spam e respeitamos a LGPD.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
