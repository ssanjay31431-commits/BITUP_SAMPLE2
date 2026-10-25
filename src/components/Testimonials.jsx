import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Karthik S.',
      role: 'Local Foodie',
      rating: 5,
      text: 'The shatteringly crispy coating on the fried chicken drumsticks is completely unmatched in Trichy. Juicy on the inside, seasoned to perfection.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Priya M.',
      role: 'Burger Enthusiast',
      rating: 5,
      text: 'The Monster Zinger Burger with warm toasted brioche and loaded cheese is absolutely sensational. Fast counter service every single time.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Arun Kumar',
      role: 'Family Customer',
      rating: 5,
      text: 'Our weekend family ritual! The 8 Pcs Mega Feast Bucket with the peri-peri loaded fries and dips feeds the whole gang at unbeatable value.',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <section className="py-20 bg-cream-100 border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span>TESTIMONIALS</span>
            <span className="w-6 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-espresso tracking-tight">
            What Our Guests Say
          </h2>
          <p className="text-sm sm:text-base text-[#6E6152] mt-2">
            Over 2,800+ 5-star ratings across Trichy. Real bites, real opinions.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-[#E2D5C3] shadow-warm flex flex-col justify-between relative group hover:border-brand-gold transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4E4133] leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EAE0D2]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#DFD3C2]"
                />
                <div>
                  <h4 className="font-bold text-sm text-espresso">{rev.name}</h4>
                  <span className="text-xs text-[#8C7E6E]">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
