import React, { useState } from 'react';
import NoiseFilter from './components/NoiseFilter';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Archivo from './components/Archivo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F2F0E9] text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-[#CC5833] selection:text-white">
      {/* Global Noise Overlay */}
      <NoiseFilter />

      {/* Floating Island Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Features Section (Micro-Paneles & Software feel) */}
      <Features />

      {/* High-Contrast Manifesto Section */}
      <Manifesto onOpenBooking={handleOpenBooking} />

      {/* Archivo Section (Stacked Cards on Scroll with Canvas Animations) */}
      <Archivo onOpenBooking={handleOpenBooking} />

      {/* Pricing Section */}
      <Pricing onOpenBooking={handleOpenBooking} />

      {/* Footer Section */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
