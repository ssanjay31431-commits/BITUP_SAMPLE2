import React from 'react';
import { ArrowRight, Flame, Sparkles, Star } from 'lucide-react';

export default function Hero({ onExploreClick, onViewCombosClick }) {
  return (
    <section id="hero" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cream-100">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-b from-[#F2E8DC] to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-70" />
      <div className="absolute top-40 right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-gold/10 rounded-full blur-[100px] sm:blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-red/5 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#EFE8DD] border border-[#DFD3C3] px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-[#665747]">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>CRAFTED FRESH TO ORDER • TIRUCHIRAPPALLI</span>
            </div>

            {/* Main Title */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl xl:text-7xl font-black text-espresso tracking-tight leading-[1.1] break-words">
                CRISPY. JUICY.<br />
                <span className="text-brand-red italic font-serif font-extrabold relative inline-block">
                  DELICIOUS.
                  <svg className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-brand-gold" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                    <path d="M1 5.5C40 2 120 2 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg xl:text-xl text-[#6B5E4F] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed px-1 sm:px-0">
              Big Flavours. Fresh Bites. Unforgettable Taste. Experience our 12-hour marinated crispy fried chicken, handcrafted smash burgers, and loaded platters.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <a
                href="#menu"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 bg-espresso hover:bg-brand-red text-white px-7 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:scale-105 active:scale-95 group"
              >
                <span>EXPLORE MENU</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </span>
              </a>

              <a
                href="#combos"
                onClick={onViewCombosClick}
                className="inline-flex items-center justify-center gap-2 bg-[#EFE8DD] hover:bg-[#E5DDD0] text-espresso border border-[#DFD3C3] px-6 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105"
              >
                <Flame className="w-4 h-4 text-brand-red shrink-0" />
                <span>VIEW COMBOS</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-5 sm:pt-6 border-t border-[#E8DFD3] grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-black text-espresso block">100%</span>
                <span className="text-[10px] sm:text-xs text-[#7A6E60] font-medium leading-tight block mt-0.5">Fresh Chicken</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-black text-brand-red block">11+</span>
                <span className="text-[10px] sm:text-xs text-[#7A6E60] font-medium leading-tight block mt-0.5">Secret Herbs</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-black text-espresso block">4.9 ★</span>
                <span className="text-[10px] sm:text-xs text-[#7A6E60] font-medium leading-tight block mt-0.5">2.8k+ Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Gusto-Style Floating Plates */}
          <div className="lg:col-span-5 relative flex justify-center mt-2 sm:mt-0">
            
            {/* Main Center Podium & Image */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] aspect-[4/3] sm:aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-warm-xl border-4 border-[#FAF6F0] bg-[#EAE0D2] group">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"
                alt="BITE UP Golden Crispy Fried Chicken"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-black/10" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="bg-brand-red text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-1 sm:mb-2 inline-block">
                  Signature Dish
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-white drop-shadow-sm leading-snug">
                  Classic Golden Fried Chicken
                </h3>
                <p className="text-[11px] sm:text-xs text-cream-200 mt-0.5 line-clamp-1">
                  12-hour marinated, ultra-crunchy crust & juicy tenderness.
                </p>
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#FAF6F0] border border-[#E5DDD0] rounded-2xl p-3 sm:p-4 shadow-warm-lg max-w-[160px] sm:max-w-[190px] animate-float-slow hidden sm:block">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-500" />
                ))}
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-espresso leading-snug">
                "Best crispy crunch in Trichy hands down!"
              </p>
              <span className="text-[9px] sm:text-[10px] text-[#8C7E6E] block mt-0.5">
                Verified Food Reviewer
              </span>
            </div>

            {/* Floating Express Prep Card */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-espresso text-white rounded-2xl p-3 sm:p-4 shadow-warm-lg max-w-[170px] sm:max-w-[210px] border border-[#3E342B] hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center text-white shrink-0">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-gold-light">
                  Freshly Fried
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#D8CEBE] leading-relaxed">
                Prepared hot upon every order. Never kept under heat lamps.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
