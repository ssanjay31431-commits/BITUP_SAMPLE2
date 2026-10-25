import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';

export default function FeaturedPodium({ onAddToCart, onOpenProductModal }) {
  const podiumItems = [
    {
      id: 'bg-1',
      name: 'Monster Crispy Zinger Burger',
      category: 'burgers',
      price: 219,
      originalPrice: 259,
      rating: 5.0,
      badge: 'Signature',
      description: 'Jumbo spicy fried chicken breast patty, melted American cheddar, crisp iceberg & house mayo.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'fc-1',
      name: 'Classic Crispy Fried Chicken (2 Pcs)',
      category: 'fried-chicken',
      price: 189,
      originalPrice: 220,
      rating: 4.9,
      badge: 'Bestseller',
      pieces: '2 Pieces',
      description: 'Golden, extra-crunchy exterior with juicy chicken marinated in 11 secret herbs & spices.',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
      isHero: true
    },
    {
      id: 'lf-1',
      name: 'Cheesy Loaded Chicken Fries',
      category: 'loaded-fries',
      price: 189,
      originalPrice: 229,
      rating: 4.9,
      badge: 'Crowd Favorite',
      description: 'Crispy salted fries smothered in warm liquid cheddar, fried chicken chunks & jalapenos.',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-cream-100 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[400px] sm:h-[500px] bg-[#EAE0D0]/50 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            <span className="w-6 sm:w-8 h-[1px] bg-brand-gold" />
            <span>SIGNATURE MENU</span>
            <span className="w-6 sm:w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-espresso tracking-tight">
            A Menu Crafted for Every Mood
          </h2>
          <p className="text-xs sm:text-base text-[#6E6152] mt-2 sm:mt-3 font-normal max-w-lg mx-auto">
            From shatteringly crisp fried chicken to molten cheese-drenched smash burgers, taste what makes BITE UP unforgettable.
          </p>
        </div>

        {/* Organic Stone / Clay Podiums Container */}
        <div className="bg-[#EFE8DD] border border-[#DFD3C2] rounded-3xl sm:rounded-[3rem] p-5 sm:p-10 lg:p-12 shadow-podium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {podiumItems.map((dish) => (
              <div
                key={dish.id}
                className={`relative flex flex-col items-center text-center transition-all duration-300 ${
                  dish.isHero ? 'md:-translate-y-4' : ''
                }`}
              >
                {/* Badge */}
                {dish.badge && (
                  <div className="mb-2.5 sm:mb-3">
                    <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full shadow-sm ${
                      dish.isHero 
                        ? 'bg-espresso text-white' 
                        : 'bg-brand-red text-white'
                    }`}>
                      {dish.badge}
                    </span>
                  </div>
                )}

                {/* Circular Dish Container */}
                <div 
                  onClick={() => onOpenProductModal(dish)}
                  className="cursor-pointer group relative w-36 h-36 sm:w-52 sm:h-52 rounded-full overflow-hidden p-2 bg-[#FAF6F0] shadow-warm-lg hover:shadow-warm-xl transition-all duration-500 hover:scale-105"
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>

                {/* Dish Info */}
                <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 max-w-xs">
                  <div className="flex items-center justify-center gap-1 text-amber-500 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span className="font-bold text-espresso">{dish.rating}</span>
                  </div>

                  <h3 
                    onClick={() => onOpenProductModal(dish)}
                    className="font-serif text-lg sm:text-2xl font-bold text-espresso hover:text-brand-red cursor-pointer transition-colors leading-snug"
                  >
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#7A6E60] line-clamp-2 px-2">
                    {dish.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
                    <span className="font-serif text-xl sm:text-2xl font-black text-brand-red">
                      ₹{dish.price}
                    </span>
                    {dish.originalPrice && (
                      <span className="text-xs text-[#9E8E7D] line-through font-medium">
                        ₹{dish.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Tray Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onAddToCart(dish, 1)}
                      className="inline-flex items-center gap-2 bg-espresso hover:bg-brand-red text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-warm transition-all hover:scale-105 active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Tray</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
