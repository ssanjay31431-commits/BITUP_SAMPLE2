import React from 'react';
import { Flame, Sparkles, ShieldCheck, UtensilsCrossed } from 'lucide-react';

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
    <section id="about" className="py-14 sm:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Espresso Ambient Container */}
        <div className="bg-[#1C1814] text-[#FAF6F0] rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-warm-xl border border-[#3A3026]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Section */}
            <div className="lg:col-span-6 relative min-h-[220px] sm:min-h-[380px] lg:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80"
                alt="Friends enjoying BITE UP food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1814] via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1C1814]" />
              
              {/* Floating quote tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:right-auto bg-[#1C1814]/85 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 max-w-sm">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-brand-gold-light block">
                  Our Food Philosophy
                </span>
                <p className="text-xs text-[#DFD3C5] mt-0.5 italic">
                  "Every single bite should be as crispy, juicy, and flavor-packed as the very first one."
                </p>
              </div>
            </div>

            {/* Right Editorial Section */}
            <div className="lg:col-span-6 p-5 sm:p-10 lg:p-16 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-2 sm:mb-3">
                <span className="w-6 h-[1px] bg-brand-gold-light" />
                <span>ABOUT BITE UP</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4">
                The Perfect Setting for Every Craving
              </h2>

              <p className="text-xs sm:text-base text-[#C4B7A7] leading-relaxed mb-6 sm:mb-8 font-normal">
                BITE UP was born with a singular mission: to deliver authentic, high-heat crispy fried chicken, towering smash burgers, and loaded street treats with gourmet restaurant standards and fast-casual energy.
              </p>

              {/* 4 Feature Columns with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-[#362C22]">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <h4 className="font-semibold text-xs sm:text-sm text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#9E8E7D] pl-9.5 sm:pl-10.5">
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
