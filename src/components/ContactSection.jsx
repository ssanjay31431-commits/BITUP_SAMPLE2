import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-24 bg-cream-200 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-brand-gold/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            <span className="w-6 sm:w-8 h-[1px] bg-brand-gold" />
            <span>FIND US & ORDER</span>
            <span className="w-6 sm:w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-espresso tracking-tight">
            Visit Our Store or Order Ahead
          </h2>
          <p className="text-xs sm:text-base text-[#6E6152] mt-2 sm:mt-3">
            Drop by for fresh hot bites right out of the fryer, or message us on WhatsApp for rapid takeout pickup.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Address */}
            <div className="bg-[#FAF6F0] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E2D5C3] shadow-warm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-3 sm:mb-4">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso mb-1">Store Address</h3>
              <p className="text-xs sm:text-sm text-[#6E6152] leading-relaxed mb-3">
                Palpannai, Mahalakshmi Nagar, Tiruchirappalli, Tamil Nadu 620008
              </p>
              <a
                href="https://maps.google.com/?q=Palpannai+Mahalakshmi+Nagar+Tiruchirappalli"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Direct Phone Line */}
            <div className="bg-[#FAF6F0] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E2D5C3] shadow-warm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center mb-3 sm:mb-4">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso mb-1">Direct Kitchen Line</h3>
              <p className="text-xs text-[#6E6152] mb-1.5">
                Call for instant kitchen orders & queries:
              </p>
              <a
                href="tel:+917200748268"
                className="font-serif text-lg sm:text-xl font-black text-espresso hover:text-brand-red transition-colors block mb-1"
              >
                +91 72007 48268
              </a>
              <span className="text-[10px] sm:text-[11px] text-[#8C7E6E]">Instant kitchen response</span>
            </div>

            {/* WhatsApp Chat */}
            <div className="bg-[#FAF6F0] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E2D5C3] shadow-warm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#1F8A4C]/10 text-[#1F8A4C] flex items-center justify-center mb-3 sm:mb-4">
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso mb-1">WhatsApp Ordering</h3>
              <p className="text-xs text-[#6E6152] mb-3">
                Send your order list on WhatsApp for instant confirmation:
              </p>
              <a
                href="https://wa.me/917200748268?text=Hi%20BITE%20UP,%20I%20would%20like%20to%20order"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1F8A4C] hover:bg-[#187540] text-white text-xs font-bold px-4 py-2 sm:py-2.5 rounded-full shadow-sm transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat: +91 72007 48268</span>
              </a>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#FAF6F0] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E2D5C3] shadow-warm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-espresso mb-1">Opening Hours</h3>
              <div className="space-y-1.5 text-xs text-[#5C5042] mt-2.5">
                <div className="flex justify-between border-b border-[#EFE8DD] pb-1">
                  <span>Mon – Thu:</span>
                  <span className="font-bold text-espresso">11:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Fri – Sun:</span>
                  <span className="font-bold text-brand-red">11:00 AM – 11:30 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Quick Inquiry Message Form */}
          <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 border border-[#E2D5C3] shadow-warm-lg">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso mb-1">
              Send Kitchen Message
            </h3>
            <p className="text-xs text-[#7A6E60] mb-5 sm:mb-6">
              Have bulk party orders, catering questions, or suggestions? Drop us a line.
            </p>

            {submitted ? (
              <div className="bg-[#EFE8DD] border border-[#DFD3C2] rounded-2xl p-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-espresso">Message Received!</h4>
                <p className="text-xs text-[#6E6152]">
                  Our kitchen supervisor will respond to your number shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6E6152] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-[#E0D5C5] rounded-xl px-3.5 py-2.5 sm:py-3 text-sm text-espresso focus:outline-none focus:border-espresso transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6E6152] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#E0D5C5] rounded-xl px-3.5 py-2.5 sm:py-3 text-sm text-espresso focus:outline-none focus:border-espresso transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6E6152] mb-1">
                    Order Details / Inquiry
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need (e.g. 50 pcs chicken bucket for party...)"
                    className="w-full bg-white border border-[#E0D5C5] rounded-xl px-3.5 py-2.5 sm:py-3 text-sm text-espresso focus:outline-none focus:border-espresso transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-espresso hover:bg-brand-red text-white py-3 sm:py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-warm transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send To Kitchen Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
