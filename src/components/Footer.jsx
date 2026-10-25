import React, { useState } from 'react';
import { ArrowRight, Flame, Instagram, Facebook, MapPin, Phone, Check } from 'lucide-react';

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
    <footer className="bg-[#171310] text-[#D8CEBE] pt-16 pb-12 border-t border-[#2A231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Bar (Modeled on Gusto bottom strip) */}
        <div className="bg-[#231C16] border border-[#3A3026] rounded-3xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold-light block mb-1">
              EXCLUSIVE OFFERS & SECRET MENU
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
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
                placeholder="Enter your email address"
                className="w-full bg-[#171310] border border-[#3E342B] rounded-full px-5 py-3.5 text-xs text-white placeholder-[#7C6E5F] focus:outline-none focus:border-brand-gold"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A231C]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-red text-white flex items-center justify-center font-serif font-black text-xl">
                B
              </div>
              <span className="font-serif text-2xl font-black tracking-tight text-white">
                BITE UP
              </span>
            </a>
            <p className="text-xs text-[#A89A89] leading-relaxed max-w-sm">
              Tiruchirappalli’s premium fast-food destination. Hand-breaded crispy fried chicken, smashed burgers, wraps, loaded fries, and family feast boxes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#231C16] border border-[#3A3026] flex items-center justify-center text-[#D8CEBE] hover:text-white hover:border-brand-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#231C16] border border-[#3A3026] flex items-center justify-center text-[#D8CEBE] hover:text-white hover:border-brand-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Signature Menu</a></li>
              <li><a href="#combos" className="hover:text-white transition-colors">Combos & Buckets</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Brand Story</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Food Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-white transition-colors">Fried Chicken</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Zinger Burgers</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Chicken Bites</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Loaded Fries</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Momos & Snacks</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Signature Dips</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Express Store
            </h4>
            <p className="text-xs text-[#A89A89] leading-relaxed">
              📍 Palpannai, Mahalakshmi Nagar, Tiruchirappalli, Tamil Nadu 620008
            </p>
            <p className="text-xs text-[#A89A89]">
              📞 Direct Call: <a href="tel:+917200748268" className="text-white hover:text-brand-red font-bold">+91 72007 48268</a>
            </p>
            <p className="text-xs text-[#A89A89]">
              ⏰ Open Daily: 11:00 AM – 11:30 PM
            </p>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6E60] gap-4">
          <p>© 2026 BITE UP Food Shop. Design Sample 2 (Gusto Editorial Edition). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#A89A89] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#A89A89] transition-colors cursor-pointer">Terms of Service</span>
            <a href="tel:+917200748268" className="hover:text-white text-brand-gold-light transition-colors font-medium">
              Call Counter: +91 72007 48268
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
