import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#171310] text-[#D8CEBE] pt-12 sm:pt-16 pb-16 sm:pb-12 border-t border-[#2A231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Bar */}
        <div className="bg-[#231C16] border border-[#3A3026] rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-12 sm:mb-16 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center lg:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-brand-gold-light block mb-1">
              EXCLUSIVE OFFERS & SECRET MENU
            </span>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-white">
              Stay Connected With BITE UP
            </h3>
            <p className="text-xs text-[#A89A89] mt-1">
              Get weekend combo discounts and flash drop alerts straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#171310] border border-[#3E342B] rounded-full px-4 sm:px-5 py-3 sm:py-3.5 text-xs text-white placeholder-[#7C6E5F] focus:outline-none focus:border-brand-gold pr-24"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-brand-red hover:bg-brand-red-dark text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <>
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-10 sm:pb-12 border-b border-[#2A231C]">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-5 space-y-3 sm:space-y-4">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-red text-white flex items-center justify-center font-serif font-black text-lg sm:text-xl">
                B
              </div>
              <span className="font-serif text-xl sm:text-2xl font-black tracking-tight text-white">
                BITE UP
              </span>
            </a>
            <p className="text-xs text-[#A89A89] leading-relaxed max-w-sm">
              Tiruchirappalli’s premium fast-food destination. Hand-breaded crispy fried chicken, smashed burgers, wraps, loaded fries, and family feast boxes.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#231C16] border border-[#3A3026] flex items-center justify-center text-[#D8CEBE] hover:text-white hover:border-brand-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#231C16] border border-[#3A3026] flex items-center justify-center text-[#D8CEBE] hover:text-white hover:border-brand-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#combos" className="hover:text-white transition-colors">Combos</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Story</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="col-span-1 lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Favorites
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-white transition-colors">Fried Chicken</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Zinger Burgers</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Chicken Bites</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Loaded Fries</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Momos</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Dips</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="col-span-2 lg:col-span-3 space-y-2 sm:space-y-3 pt-2 lg:pt-0">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              Store Info
            </h4>
            <p className="text-xs text-[#A89A89] leading-relaxed">
              📍 Palpannai, Mahalakshmi Nagar, Tiruchirappalli, Tamil Nadu 620008
            </p>
            <p className="text-xs text-[#A89A89]">
              📞 <a href="tel:+917200748268" className="text-white hover:text-brand-red font-bold">+91 72007 48268</a>
            </p>
            <p className="text-xs text-[#A89A89]">
              ⏰ Open Daily: 11:00 AM – 11:30 PM
            </p>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#7A6E60] gap-3 text-center sm:text-left">
          <p>© 2026 BITE UP Food Shop. Design Sample 2.</p>
          <div className="flex items-center gap-4">
            <a href="tel:+917200748268" className="hover:text-white text-brand-gold-light transition-colors font-medium">
              Call Kitchen: +91 72007 48268
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
