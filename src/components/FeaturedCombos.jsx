import React from 'react';
import { ShoppingBag, Star, Check, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_COMBOS } from '../data/menuData';

export default function FeaturedCombos({ onAddToCart, onOpenProductModal }) {
  return (
    <section id="combos" className="py-20 bg-cream-200 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
              <Flame className="w-4 h-4 fill-brand-red text-brand-red" />
              <span>VALUE PACKED FEASTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-espresso tracking-tight">
              Popular Combos & Buckets
            </h2>
            <p className="text-sm sm:text-base text-[#6E6152] mt-2 max-w-xl">
              Complete hunger-busting meals pairing our signature crispy fried chicken, burgers, seasoned fries, and chilled beverages at special discounted prices.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-espresso hover:text-brand-red transition-colors self-start md:self-end"
          >
            <span>View All Combos In Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#E2D5C3] shadow-warm hover:shadow-warm-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div 
                onClick={() => onOpenProductModal(combo)}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#EFE8DD]"
              >
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Discount Tag */}
                <span className="absolute top-3 left-3 bg-brand-red text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {combo.discount}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-espresso flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{combo.rating}</span>
                </div>

                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                  {combo.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 
                    onClick={() => onOpenProductModal(combo)}
                    className="font-serif text-xl font-bold text-espresso hover:text-brand-red transition-colors cursor-pointer leading-tight mb-2"
                  >
                    {combo.title}
                  </h3>

                  <p className="text-xs text-[#7A6E60] leading-relaxed mb-3">
                    {combo.description}
                  </p>

                  {/* Included Items Checklist */}
                  {combo.features && (
                    <div className="space-y-1.5 pt-2 border-t border-[#EAE0D2]">
                      {combo.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#5A4E40]">
                          <Check className="w-3.5 h-3.5 text-brand-red shrink-0 stroke-[2.5]" />
                          <span className="font-medium truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price and Add Button */}
                <div className="pt-3 border-t border-[#EAE0D2] flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-black text-brand-red">
                        ₹{combo.price}
                      </span>
                      {combo.originalPrice && (
                        <span className="text-xs text-[#9E8E7D] line-through">
                          ₹{combo.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">
                      Combo Saver
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCart(combo, 1)}
                    className="bg-espresso hover:bg-brand-red text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                    aria-label={`Add ${combo.title} to tray`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
