import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'Combos', href: '#combos' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-warm py-2.5 sm:py-3 border-b border-[#E8DFD3]'
          : 'bg-[#FAF6F0]/80 backdrop-blur-sm py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-espresso group-hover:bg-brand-red text-white flex items-center justify-center transition-all duration-300 shadow-sm">
              <span className="font-serif font-black text-lg sm:text-xl tracking-tighter">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-black tracking-tight text-espresso leading-none flex items-center gap-1">
                BITE UP
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8C7E6E] font-medium mt-0.5 hidden xs:block">
                Crispy • Juicy • Fresh
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4A3F33] hover:text-brand-red transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Express Phone CTA (Desktop) */}
            <a
              href="tel:+917200748268"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-espresso bg-[#EFE8DD] hover:bg-[#E5DDD0] px-4 py-2.5 rounded-full transition-colors border border-[#DFD3C3]"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>+91 72007 48268</span>
            </a>

            {/* Cart Tray Pill */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 sm:gap-2.5 bg-espresso hover:bg-brand-red text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-warm transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-4 h-4 text-brand-gold-light" />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Tray</span>
              {cartCount > 0 ? (
                <span className="bg-brand-red text-white text-[10px] sm:text-[11px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                  {cartCount}
                </span>
              ) : (
                <span className="text-[11px] font-bold text-[#D8CEBE] sm:hidden">0</span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-[#EFE8DD] flex items-center justify-center text-espresso hover:bg-[#E5DDD0] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[56px] bottom-0 z-50 bg-[#FAF6F0]/98 backdrop-blur-xl border-t border-[#E8DFD3] px-6 py-6 overflow-y-auto flex flex-col justify-between animate-fade-in md:hidden">
          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif font-bold text-espresso hover:text-brand-red transition-colors py-2 border-b border-[#EFE8DD] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-brand-gold uppercase tracking-wider">➔</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 space-y-3 pb-8">
            <a
              href="tel:+917200748268"
              className="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-espresso py-3.5 rounded-full shadow-warm"
            >
              <Phone className="w-4 h-4 text-brand-gold-light" />
              <span>Call Kitchen: +91 72007 48268</span>
            </a>

            <a
              href="https://wa.me/917200748268?text=Hi%20BITE%20UP"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#1F8A4C] py-3.5 rounded-full"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
