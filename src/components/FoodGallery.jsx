import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FoodGallery() {
  const galleryImages = [
    {
      title: 'Golden Fried Chicken',
      category: '11 Secret Spices',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Monster Zinger Burger',
      category: 'Artisan Brioche',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Crispy Fried Momos',
      category: 'Fiery Dip Included',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Loaded Chicken Fries',
      category: 'Molten Cheddar',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Crispy Ranch Wrap',
      category: 'Grilled Tortilla',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Chilled Milkshakes',
      category: 'Thick & Rich',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>VISUAL CRUNCH</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-espresso tracking-tight">
            The BITE UP Food Gallery
          </h2>
          <p className="text-xs sm:text-base text-[#6E6152] mt-1.5 sm:mt-2">
            A glimpse into our kitchen creations. Fresh ingredients, high heat, and pure culinary passion.
          </p>
        </div>

        {/* 6-Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm border border-[#DFD3C2] bg-[#EFE8DD]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
                <span className="text-[9px] sm:text-[10px] text-brand-gold-light uppercase font-bold tracking-wider">
                  {item.category}
                </span>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
