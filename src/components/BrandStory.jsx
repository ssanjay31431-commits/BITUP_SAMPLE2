import React from 'react';
import { Flame, Sparkles, ShieldCheck, Heart, UtensilsCrossed, Clock } from 'lucide-react';

export default function BrandStory() {
  const pillars = [
    {
      icon: Flame,
      title: 'Hand-Breaded to Order',
      desc: 'Never stored under warming lamps. Dredged and fried only when you order.'
    },
    {
      icon: Sparkles,
      title: '11 Secret Herbs Rub',
      desc: 'Proprietary aromatic herb marinade infused for 12 slow hours.'
    },
    {
      icon: ShieldCheck,
      title: '100% Farm-Fresh Daily',
      desc: 'Prime quality cuts sourced fresh daily with zero compromise.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Artisan Buns & Dips',
      desc: 'Toasted brioche buns, crisp greens, and signature scratch-made sauces.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Espresso Ambient Container (Directly modeled on Gusto middle card) */}
        <div className="bg-[#1C1814] text-[#FAF6F0] rounded-[3rem] overflow-hidden shadow-warm-xl border border-[#3A3026]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Section */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80"
                alt="Friends enjoying BITE UP food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1814] via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1C1814]" />
              
              {/* Floating aesthetic quote tag */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-[#1C1814]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-gold-light">
                  Our Food Philosophy
                </span>
                <p className="text-xs text-[#DFD3C5] mt-1 italic">
                  "Every single bite should be as crispy, juicy, and flavor-packed as the very first one."
                </p>
              </div>
            </div>

            {/* Right Editorial Section */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-3">
                <span className="w-6 h-[1px] bg-brand-gold-light" />
                <span>ABOUT BITE UP</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                The Perfect Setting for Every Craving
              </h2>

              <p className="text-sm sm:text-base text-[#C4B7A7] leading-relaxed mb-8 font-normal">
                BITE UP was born with a singular mission: to deliver authentic, high-heat crispy fried chicken, towering smash burgers, and loaded street treats with gourmet restaurant standards and fast-casual energy.
              </p>

              {/* 4 Feature Columns with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#362C22]">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-semibold text-sm text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#9E8E7D] pl-10.5">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
