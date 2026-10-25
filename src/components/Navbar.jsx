import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, Flame } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
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
          ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-warm py-3 border-b border-[#E8DFD3]'
          : 'bg-[#FAF6F0]/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-espresso group-hover:bg-brand-red text-white flex items-center justify-center transition-all duration-300 shadow-sm">
              <span className="font-serif font-black text-xl tracking-tighter">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-black tracking-tight text-espresso leading-none flex items-center gap-1">
                BITE UP
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8C7E6E] font-medium mt-0.5">
                Crispy • Juicy • Fresh
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
          <div className="flex items-center gap-3">
            {/* Express Phone CTA */}
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
              className="relative flex items-center gap-2.5 bg-espresso hover:bg-brand-red text-white px-5 py-2.5 rounded-full shadow-warm transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-4 h-4 text-brand-gold-light" />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Tray</span>
              {cartCount > 0 && (
                <span className="bg-brand-red text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center -mr-1 ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-[#EFE8DD] flex items-center justify-center text-espresso hover:bg-[#E5DDD0] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#E8DFD3] px-6 py-5 shadow-warm-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#3D3328] hover:text-brand-red transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E8DFD3] flex flex-col gap-3">
              <a
                href="tel:+917200748268"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-espresso bg-[#EFE8DD] py-3 rounded-full"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Kitchen: +91 72007 48268</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
