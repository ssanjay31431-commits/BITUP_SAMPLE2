import React, { useState } from 'react';
import { X, Flame, Star, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function ProductModal({ item, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-3xl overflow-hidden shadow-warm-xl border border-[#E5DDD0] flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-espresso flex items-center justify-center shadow-md transition-all hover:scale-105"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Side */}
        <div className="md:w-1/2 relative bg-[#EFE8DD] min-h-[260px] md:min-h-full">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
          
          {item.badge && (
            <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {item.badge}
            </span>
          )}

          {item.pieces && (
            <span className="absolute bottom-4 left-4 bg-espresso/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
              {item.pieces}
            </span>
          )}
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs text-[#7A6E60] mb-2">
              <span className="uppercase tracking-widest font-semibold text-brand-gold">
                {item.category?.replace('-', ' ')}
              </span>
              <div className="flex items-center gap-1 bg-[#EAE2D5] px-2.5 py-0.5 rounded-full text-espresso font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{item.rating || '4.9'}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso leading-snug mb-3">
              {item.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-brand-red">
                ₹{item.price}
              </span>
              {item.originalPrice && (
                <span className="text-base text-[#9C8F7F] line-through">
                  ₹{item.originalPrice}
                </span>
              )}
              {item.originalPrice && (
                <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-md">
                  Save ₹{item.originalPrice - item.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#5C5042] leading-relaxed mb-6 font-normal">
              {item.description}
            </p>

            {/* Dietary & Spice Level */}
            <div className="space-y-2 py-3 border-y border-[#E5DDD0] mb-6">
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
                    <span className="ml-1 text-[11px] font-semibold text-espresso">
                      {item.spicyLevel === 3 ? 'Extra Fiery' : item.spicyLevel === 2 ? 'Medium Spicy' : 'Mild Spice'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center bg-[#EAE2D5] rounded-full p-1 border border-[#D5C7B5]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center font-bold text-sm text-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Tray Button */}
              <button
                onClick={handleAdd}
                className="flex-1 bg-espresso hover:bg-brand-red text-white py-3 px-5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:shadow-glow-red"
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
