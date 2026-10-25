import React, { useState } from 'react';
import { X, Flame, Star, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function ProductModal({ item, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-warm-xl border border-[#E5DDD0] flex flex-col md:flex-row max-h-[85vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-espresso flex items-center justify-center shadow-md transition-all hover:scale-105"
          aria-label="Close modal"
        >
          <X className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>

        {/* Image Side */}
        <div className="md:w-1/2 relative bg-[#EFE8DD] h-44 sm:h-56 md:h-full shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          
          {item.badge && (
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-red text-white text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
              {item.badge}
            </span>
          )}

          {item.pieces && (
            <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-espresso/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
              {item.pieces}
            </span>
          )}
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs text-[#7A6E60] mb-1.5 sm:mb-2">
              <span className="uppercase tracking-widest font-semibold text-brand-gold text-[10px] sm:text-xs">
                {item.category?.replace('-', ' ')}
              </span>
              <div className="flex items-center gap-1 bg-[#EAE2D5] px-2 py-0.5 rounded-full text-espresso font-semibold text-xs">
                <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-500 text-amber-500" />
                <span>{item.rating || '4.9'}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-espresso leading-snug mb-2 sm:mb-3">
              {item.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-brand-red">
                ₹{item.price}
              </span>
              {item.originalPrice && (
                <span className="text-sm sm:text-base text-[#9C8F7F] line-through">
                  ₹{item.originalPrice}
                </span>
              )}
              {item.originalPrice && (
                <span className="text-[10px] sm:text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-md">
                  Save ₹{item.originalPrice - item.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#5C5042] leading-relaxed mb-4 sm:mb-6 font-normal">
              {item.description}
            </p>

            {/* Dietary & Spice Level */}
            <div className="space-y-1.5 sm:space-y-2 py-2.5 sm:py-3 border-y border-[#E5DDD0] mb-4 sm:mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7A6E60]">Dietary Type:</span>
                <span className={`font-semibold flex items-center gap-1.5 ${item.isVeg ? 'text-emerald-700' : 'text-brand-red'}`}>
                  <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-brand-red'}`} />
                  {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>

              {typeof item.spicyLevel === 'number' && item.spicyLevel > 0 && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#7A6E60]">Spice Level:</span>
                  <div className="flex items-center gap-1 text-brand-red">
                    {[...Array(3)].map((_, i) => (
                      <Flame
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < item.spicyLevel
                            ? 'text-brand-red fill-brand-red'
                            : 'text-[#D0C2B0]'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-[10px] sm:text-[11px] font-semibold text-espresso">
                      {item.spicyLevel === 3 ? 'Extra Fiery' : item.spicyLevel === 2 ? 'Medium' : 'Mild'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-1">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center bg-[#EAE2D5] rounded-full p-1 border border-[#D5C7B5]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 sm:w-9 text-center font-bold text-xs sm:text-sm text-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Tray Button */}
              <button
                onClick={handleAdd}
                className="flex-1 bg-espresso hover:bg-brand-red text-white py-2.5 sm:py-3 px-4 sm:px-5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:shadow-glow-red"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add • ₹{item.price * quantity}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
