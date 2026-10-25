import React from 'react';
import { ShoppingBag, Check, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1C1814] text-[#FAF6F0] px-5 py-3.5 rounded-2xl shadow-warm-xl border border-[#3E342B] animate-bounce-short transition-all duration-300">
      <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white shrink-0 shadow-sm">
        <Check className="w-4 h-4 stroke-[3]" />
      </div>
      <div className="text-sm">
        <p className="font-semibold text-white tracking-wide">{toast.title || 'Added to Tray!'}</p>
        <p className="text-xs text-[#C5B8A8]">{toast.message}</p>
      </div>
      <button
        onClick={onClose}
        className="ml-2 text-[#9E8E7D] hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
