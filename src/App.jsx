import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickOrderBar from './components/QuickOrderBar';
import FeaturedPodium from './components/FeaturedPodium';
import FeaturedCombos from './components/FeaturedCombos';
import MenuSection from './components/MenuSection';
import BrandStory from './components/BrandStory';
import FoodGallery from './components/FoodGallery';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';

export default function App() {
  // Load Cart from localStorage if present
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('biteup_tray_sample2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [toast, setToast] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('biteup_tray_sample2', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Show Toast helper
  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Add Item to Cart
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name || product.title,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: quantity,
          },
        ];
      }
    });

    const displayName = product.name || product.title;
    showToast('Added to Tray!', `${quantity}x ${displayName}`);
  };

  // Update Item Quantity
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove Item
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCart([]);
    showToast('Tray Cleared', 'All items removed from tray.');
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-100 font-sans text-espresso flex flex-col">
      {/* Navbar */}
      <Navbar
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => {}}
          onViewCombosClick={() => {}}
        />

        {/* 2. Interactive Express Order / Station Bar */}
        <QuickOrderBar />

        {/* 3. Signature Taste Organic Podium Showcase (Gusto Reference Highlight) */}
        <FeaturedPodium
          onAddToCart={handleAddToCart}
          onOpenProductModal={(item) => setModalItem(item)}
        />

        {/* 4. Featured Combos */}
        <FeaturedCombos
          onAddToCart={handleAddToCart}
          onOpenProductModal={(item) => setModalItem(item)}
        />

        {/* 5. Complete Signature Menu with 14 categories & filters */}
        <MenuSection
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onOpenProductModal={(item) => setModalItem(item)}
        />

        {/* 6. Brand Story & Atmosphere (Dark Espresso Card) */}
        <BrandStory />

        {/* 7. Visual Food Gallery Grid */}
        <FoodGallery />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Contact Section & Opening Hours */}
        <ContactSection />
      </main>

      {/* 10. Editorial Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
        clearCart={handleClearCart}
      />

      {/* Product Detail Modal */}
      <ProductModal
        item={modalItem}
        isOpen={!!modalItem}
        onClose={() => setModalItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
