import React from 'react';
import { Instagram, Sparkles } from 'lucide-react';

export default function FoodGallery() {
  const galleryImages = [
    {
      title: 'Golden Fried Chicken',
      category: '11 Secret Spices',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1'
    },
    {
      title: 'Monster Zinger Burger',
      category: 'Artisan Brioche Bun',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1'
    },
    {
      title: 'Crispy Fried Momos',
      category: 'Fiery Dip Included',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1'
    },
    {
      title: 'Loaded Chicken Fries',
      category: 'Molten Cheddar Cheese',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1'
    },
    {
      title: 'Crispy Ranch Wrap',
      category: 'Flaky Grilled Tortilla',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1'
    },
    {
      title: 'Chilled Milkshakes',
      category: 'Thick & Rich Shakes',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
      span: 'col-span-1'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>VISUAL CRUNCH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-espresso tracking-tight">
            The BITE UP Food Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6E6152] mt-2">
            A glimpse into our kitchen creations. Fresh ingredients, high heat, and pure culinary passion.
          </p>
        </div>

        {/* 6-Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-warm border border-[#DFD3C2] bg-[#EFE8DD]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <span className="text-[10px] text-brand-gold-light uppercase font-bold tracking-wider">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-bold text-white line-clamp-1">
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
