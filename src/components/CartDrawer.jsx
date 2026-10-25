import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, MessageCircle, Phone } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeItem, clearCart }) {
  const [diningMode, setDiningMode] = useState('takeaway'); // 'takeaway' | 'dine-in' | 'delivery'
  const [customerName, setCustomerName] = useState('');
  const [orderNote, setOrderNote] = useState('');

  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const packagingFee = diningMode === 'delivery' ? 25 : 0;
  const grandTotal = subtotal + packagingFee;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `🍗 *NEW BITE UP ORDER* 🍗\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) {
      message += `👤 *Customer:* ${customerName.trim()}\n`;
    }
    message += `🍽️ *Dining Mode:* ${diningMode.toUpperCase()}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `*ORDER ITEMS:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} × ₹${item.price} = ₹${item.quantity * item.price}\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *Subtotal:* ₹${subtotal}\n`;
    if (packagingFee > 0) {
      message += `📦 *Packaging:* ₹${packagingFee}\n`;
    }
    message += `✨ *Grand Total:* ₹${grandTotal}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;

    if (orderNote.trim()) {
      message += `📝 *Special Instructions:* ${orderNote.trim()}\n\n`;
    }

    message += `_Sent via BITE UP Online Menu_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917200748268?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-md bg-[#FAF6F0] shadow-warm-xl flex flex-col border-l border-[#E5DDD0]">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#E8DFD3] flex items-center justify-between bg-[#F4ECE0]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-espresso text-white flex items-center justify-center">
                <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-espresso">Your Tray</h2>
                <p className="text-[11px] sm:text-xs text-[#7A6E60]">
                  {totalItems} {totalItems === 1 ? 'delicious bite' : 'delicious bites'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-[#8A7D6E] hover:text-brand-red transition-colors px-2 py-1 rounded-md"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 hover:bg-white text-espresso flex items-center justify-center shadow-sm transition-all"
                aria-label="Close cart"
              >
                <X className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 sm:space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EFE7DC] flex items-center justify-center text-3xl sm:text-4xl mb-3 sm:mb-4">
                  🍗
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso mb-1">Your Tray is Empty</h3>
                <p className="text-xs sm:text-sm text-[#7A6E60] max-w-xs mb-6 px-4">
                  Add your favorite crispy fried chicken, juicy burgers, and combos to get started.
                </p>
                <button
                  onClick={onClose}
                  className="bg-espresso hover:bg-brand-red text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Explore Delicious Menu
                </button>
              </div>
            ) : (
              <>
                {/* Dining Mode Picker */}
                <div className="bg-[#EFE8DD] p-1 rounded-xl sm:rounded-2xl flex text-xs font-semibold text-[#5A4E40]">
                  <button
                    onClick={() => setDiningMode('takeaway')}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all text-xs ${
                      diningMode === 'takeaway'
                        ? 'bg-white text-espresso shadow-sm'
                        : 'hover:text-espresso'
                    }`}
                  >
                    🥡 Takeaway
                  </button>
                  <button
                    onClick={() => setDiningMode('dine-in')}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all text-xs ${
                      diningMode === 'dine-in'
                        ? 'bg-white text-espresso shadow-sm'
                        : 'hover:text-espresso'
                    }`}
                  >
                    🍽️ Dine-In
                  </button>
                  <button
                    onClick={() => setDiningMode('delivery')}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all text-xs ${
                      diningMode === 'delivery'
                        ? 'bg-white text-espresso shadow-sm'
                        : 'hover:text-espresso'
                    }`}
                  >
                    🛵 Delivery
                  </button>
                </div>

                {/* Items */}
                <div className="space-y-2.5 sm:space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 border border-[#E8DFD3] shadow-warm-sm flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-xs sm:text-sm text-espresso truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                          <span className="font-bold text-xs sm:text-sm text-brand-red">
                            ₹{item.price * item.quantity}
                          </span>
                          <span className="text-[11px] text-[#8A7D6E]">
                            (₹{item.price} ea)
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center bg-[#FAF6F0] rounded-full p-0.5 border border-[#E0D5C5] shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 sm:w-7 text-center font-bold text-xs text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#A59585] hover:text-brand-red transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details & Special Instructions */}
                <div className="bg-[#FAF6F0] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#E8DFD3] space-y-2.5 sm:space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#6E6152] mb-1">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul"
                      className="w-full text-sm sm:text-xs bg-white border border-[#E0D5C5] rounded-lg sm:rounded-xl px-3 py-2 text-espresso focus:outline-none focus:border-espresso"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6E6152] mb-1">
                      Kitchen Instructions
                    </label>
                    <input
                      type="text"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="e.g. Extra spicy, extra dips, less sauce"
                      className="w-full text-sm sm:text-xs bg-white border border-[#E0D5C5] rounded-lg sm:rounded-xl px-3 py-2 text-espresso focus:outline-none focus:border-espresso"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-[#F4ECE0] border-t border-[#E8DFD3] space-y-3 sm:space-y-4">
              {/* Bill Details */}
              <div className="space-y-1 text-xs text-[#6E6152]">
                <div className="flex justify-between">
                  <span>Item Subtotal:</span>
                  <span className="font-semibold text-espresso">₹{subtotal}</span>
                </div>
                {packagingFee > 0 && (
                  <div className="flex justify-between">
                    <span>Delivery Packaging:</span>
                    <span className="font-semibold text-espresso">₹{packagingFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm sm:text-base font-bold text-espresso pt-1.5 border-t border-[#E2D5C3]">
                  <span>Total Amount:</span>
                  <span className="text-brand-red font-serif text-lg sm:text-xl">₹{grandTotal}</span>
                </div>
              </div>

              {/* Order Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#1F8A4C] hover:bg-[#187540] text-white py-3 sm:py-3.5 px-5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Send Order on WhatsApp</span>
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 ml-auto" />
                </button>

                <a
                  href="tel:+917200748268"
                  className="w-full bg-espresso hover:bg-espresso-light text-white py-2.5 sm:py-3 px-5 rounded-full font-semibold text-xs flex items-center justify-center gap-2 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Kitchen: +91 72007 48268</span>
                </a>
              </div>

              <p className="text-[10px] sm:text-[11px] text-center text-[#8C7E6E]">
                📍 Pay directly at pickup counter or via UPI on delivery
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
