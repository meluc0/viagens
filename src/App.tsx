import React, { useState } from 'react';
import { Currency, Destination } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { TripPlanner } from './components/TripPlanner';
import { PackagesSection } from './components/PackagesSection';
import { TravelAssistance } from './components/TravelAssistance';
import { TravelChecklistSection } from './components/TravelChecklistSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DestinationModal } from './components/DestinationModal';
import { QuoteModal } from './components/QuoteModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('BRL');
  const [activeContinentFilter, setActiveContinentFilter] = useState<string>('Todos');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('Todos');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalPrefill, setQuoteModalPrefill] = useState('');

  const handleHeroSearch = (filters: { region?: string; category?: string }) => {
    if (filters.region) {
      setActiveContinentFilter(filters.region);
    }
    if (filters.category) {
      setActiveCategoryFilter(filters.category);
    }
  };

  const handleOpenQuoteModal = (prefill: string = '') => {
    setQuoteModalPrefill(prefill);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Hero with Interactive Trip Finder */}
      <main className="flex-1">
        <Hero
          onSearch={handleHeroSearch}
          onOpenQuoteModal={() => handleOpenQuoteModal('Roteiro Personalizado')}
        />

        {/* Curated Destinations Showcase */}
        <DestinationsSection
          currency={currency}
          activeContinentFilter={activeContinentFilter}
          activeCategoryFilter={activeCategoryFilter}
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Interactive Custom Trip Planner & Cost Simulator */}
        <TripPlanner
          currency={currency}
          onOpenQuoteModalWithData={(summary) => handleOpenQuoteModal(summary)}
        />

        {/* Complete Ready Packages with Flights + Hotels */}
        <PackagesSection
          currency={currency}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Agency Differentiators & Emergency 24/7 Concierge */}
        <TravelAssistance />

        {/* Interactive International Travel Preparation Checklist */}
        <TravelChecklistSection />

        {/* Real Customer Testimonials & Verified Reviews */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact & Free Consultation Form */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating WhatsApp Action for Quick Help */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Estou%20no%20site%20da%20Horizonte%20Viagens%20e%20gostaria%20de%20conversar%20com%20um%20consultor%20internacional."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold pl-0 group-hover:pr-2 group-hover:pl-1">
          Falar com Especialista
        </span>
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
        </span>
      </a>

      {/* Destination Detail Itinerary Modal */}
      <DestinationModal
        destination={selectedDestination}
        currency={currency}
        onClose={() => setSelectedDestination(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Fast Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillDestination={quoteModalPrefill}
      />
    </div>
  );
}
