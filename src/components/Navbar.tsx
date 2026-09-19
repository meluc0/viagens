import React, { useState, useEffect } from 'react';
import { Compass, PhoneCall, Globe, Menu, X, MessageCircle } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenQuoteModal: (prefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyChange,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinos', href: '#destinos' },
    { label: 'Pacotes', href: '#pacotes' },
    { label: 'Sob Medida', href: '#planejador' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Checklist', href: '#checklist' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md py-3 shadow-lg border-b border-stone-800'
          : 'bg-gradient-to-b from-stone-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider text-white font-serif-display uppercase">
              Horizonte
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-amber-400 font-medium uppercase">
              Viagens Internacionais
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Currency Selector */}
          <div className="flex items-center bg-stone-800/80 border border-stone-700/80 rounded-lg p-0.5 text-xs text-stone-300">
            <Globe className="w-3.5 h-3.5 ml-2 mr-1 text-amber-400" />
            <button
              onClick={() => onCurrencyChange('BRL')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'BRL'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'hover:text-white'
              }`}
            >
              BRL
            </button>
            <button
              onClick={() => onCurrencyChange('USD')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'USD'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'hover:text-white'
              }`}
            >
              USD
            </button>
            <button
              onClick={() => onCurrencyChange('EUR')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'EUR'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'hover:text-white'
              }`}
            >
              EUR
            </button>
          </div>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20uma%20viagem%20internacional"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-300 border border-emerald-600/40 transition-all"
            title="Atendimento WhatsApp 24h"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Plantão 24h</span>
          </a>

          {/* Primary CTA */}
          <button
            id="nav-quote-btn"
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold text-sm shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Solicitar Cotação</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex bg-stone-800 border border-stone-700 rounded-lg p-0.5 text-xs text-stone-300">
            <button
              onClick={() => onCurrencyChange('BRL')}
              className={`px-1.5 py-0.5 rounded text-[11px] ${
                currency === 'BRL' ? 'bg-amber-500 text-stone-950 font-bold' : ''
              }`}
            >
              BRL
            </button>
            <button
              onClick={() => onCurrencyChange('USD')}
              className={`px-1.5 py-0.5 rounded text-[11px] ${
                currency === 'USD' ? 'bg-amber-500 text-stone-950 font-bold' : ''
              }`}
            >
              USD
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-200 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/98 border-b border-stone-800 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-amber-400 text-base font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm text-center shadow transition"
            >
              Falar com Consultor Especialista
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20uma%20viagem%20internacional"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-emerald-700/30 text-emerald-300 text-sm font-semibold flex items-center justify-center gap-2 border border-emerald-600/40"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Plantão 24h no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
