import React, { useState } from 'react';
import { Clock, Users, Utensils, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function QuickOrderBar({ onSelectCategory }) {
  const [orderType, setOrderType] = useState('takeaway');
  const [prepTime, setPrepTime] = useState('15 mins');
  const [partySize, setPartySize] = useState('2');
  const [isCopied, setIsCopied] = useState(false);

  const handleAction = () => {
    const text = `Hi BITE UP! I want to arrange an express ${orderType} order for ${partySize} people, ready in approx ${prepTime}. Please share your fastest kitchen options!`;
    const url = `https://wa.me/917200748268?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative z-20 -mt-8 sm:-mt-12 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FAF6F0] border-2 border-[#E5DDD0] rounded-[2rem] p-4 sm:p-6 shadow-warm-xl">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#EAE0D2] gap-2">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso">
              Express Takeout & Kitchen Station
            </h3>
            <p className="text-xs text-[#7A6E60]">
              Hot, fresh food ready when you arrive. We prep upon your order.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#8A7D6E]">Prefer direct call?</span>
            <a
              href="tel:+917200748268"
              className="font-bold text-brand-red hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 72007 48268</span>
            </a>
          </div>
        </div>

        {/* Interactive Selector Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          
          {/* Order Mode */}
          <div className="bg-[#F3ECE0] rounded-2xl p-3 border border-[#E5DDD0]">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A6E60] block mb-1">
              Order Type
            </label>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-brand-red shrink-0" />
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-espresso focus:outline-none cursor-pointer"
              >
                <option value="Takeaway">Express Takeaway</option>
                <option value="Dine-In">Dine-In Table</option>
                <option value="Delivery">Doorstep Delivery</option>
              </select>
            </div>
          </div>

          {/* Time */}
          <div className="bg-[#F3ECE0] rounded-2xl p-3 border border-[#E5DDD0]">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A6E60] block mb-1">
              Target Pickup
            </label>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold shrink-0" />
              <select
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-espresso focus:outline-none cursor-pointer"
              >
                <option value="Ready in 15 mins">Ready in 15 mins</option>
                <option value="Ready in 30 mins">Ready in 30 mins</option>
                <option value="Evening 7:00 PM">Evening 7:00 PM</option>
                <option value="Night 9:00 PM">Night 9:00 PM</option>
              </select>
            </div>
          </div>

          {/* Servings */}
          <div className="bg-[#F3ECE0] rounded-2xl p-3 border border-[#E5DDD0]">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A6E60] block mb-1">
              Party Size
            </label>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-espresso shrink-0" />
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-espresso focus:outline-none cursor-pointer"
              >
                <option value="1">1 Person (Solo Craving)</option>
                <option value="2">2 People (Duo Meal)</option>
                <option value="3-4">3 - 4 People (Bucket Feast)</option>
                <option value="5+">5+ People (Party Box)</option>
              </select>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={handleAction}
              className="w-full bg-espresso hover:bg-brand-red text-white py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-warm transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
            >
              <span>Instant Express Pre-order</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
