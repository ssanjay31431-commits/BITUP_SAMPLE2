import React, { useState, useMemo } from 'react';
import { Search, Flame, Star, Plus, Minus, ShoppingBag, Sparkles, Filter, X } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ cart, onAddToCart, onUpdateQuantity, onOpenProductModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegFilter, setVegFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended' | 'price-asc' | 'price-desc' | 'rating'

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Veg/Non-veg check
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'non-veg' && item.isVeg) return false;

      // Search check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description?.toLowerCase().includes(query);
        const matchCat = item.category?.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0; // default order
    });
  }, [selectedCategory, searchQuery, vegFilter, sortBy]);

  // Helper to find cart quantity
  const getCartQuantity = (itemId) => {
    const found = cart.find((c) => c.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span>FULL BITE UP MENU</span>
            <span className="w-8 h-[1px] bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-espresso tracking-tight">
            Handcrafted With Passion
          </h2>
          <p className="text-sm sm:text-base text-[#6E6152] mt-3 font-normal">
            Explore our full range of 14 categories. Every piece is hand-breaded and prepared fresh to guarantee that unforgettable crunch.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7E6E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burgers, fried chicken, momos, combos..."
                className="w-full bg-[#FAF6F0] border border-[#E5DDD0] rounded-full pl-11 pr-10 py-3 text-sm text-espresso placeholder-[#9E8E7D] focus:outline-none focus:border-espresso focus:ring-1 focus:ring-espresso shadow-warm-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C7E6E] hover:text-espresso"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Pills & Sorter */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-start md:justify-end">
              {/* Veg Toggle */}
              <div className="flex items-center bg-[#EFE8DD] p-1 rounded-full border border-[#DFD3C2] text-xs font-semibold">
                <button
                  onClick={() => setVegFilter('all')}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    vegFilter === 'all'
                      ? 'bg-espresso text-white shadow-sm'
                      : 'text-[#6B5E4F] hover:text-espresso'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setVegFilter('non-veg')}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
                    vegFilter === 'non-veg'
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'text-[#6B5E4F] hover:text-brand-red'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Non-Veg
                </button>
                <button
                  onClick={() => setVegFilter('veg')}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
                    vegFilter === 'veg'
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-[#6B5E4F] hover:text-emerald-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Veg
                </button>
              </div>

              {/* Sort Select */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAF6F0] border border-[#E5DDD0] text-xs font-semibold text-espresso rounded-full px-4 py-2.5 focus:outline-none cursor-pointer shadow-warm-sm"
              >
                <option value="recommended">Featured Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated (★)</option>
              </select>
            </div>

          </div>

          {/* Horizontal Scrollable Category Pills */}
          <div className="overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2 min-w-max">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-espresso text-white shadow-warm scale-105'
                        : 'bg-[#FAF6F0] text-[#5A4E40] hover:bg-[#EFE8DD] border border-[#E5DDD0]'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Count & Active Category Badge */}
        <div className="flex items-center justify-between text-xs text-[#7A6E60] mb-6">
          <span>
            Showing <strong className="text-espresso font-bold">{filteredItems.length}</strong> items in{' '}
            <span className="text-brand-red font-semibold">
              {CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'All Items'}
            </span>
          </span>

          {(selectedCategory !== 'all' || searchQuery || vegFilter !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setVegFilter('all');
              }}
              className="text-brand-red hover:underline font-semibold flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset filters
            </button>
          )}
        </div>

        {/* Food Items Grid (Gusto-inspired rounded cards) */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#FAF6F0] border border-[#E5DDD0] rounded-3xl p-12 text-center max-w-md mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-[#EFE8DD] flex items-center justify-center text-3xl mx-auto mb-4">
              🔍
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso mb-1">No items found</h3>
            <p className="text-xs text-[#7A6E60] mb-5">
              We couldn't find any dish matching your filter. Try searching for something else!
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setVegFilter('all');
              }}
              className="bg-espresso text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-brand-red transition-all"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const qtyInCart = getCartQuantity(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#E2D5C3] shadow-warm hover:shadow-warm-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image Container with Badges */}
                  <div
                    onClick={() => onOpenProductModal(item)}
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#EFE8DD]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}

                    {/* Pieces / Weight info */}
                    {item.pieces && (
                      <span className="absolute bottom-3 left-3 bg-espresso/80 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                        {item.pieces}
                      </span>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] font-bold text-espresso flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{item.rating || '4.9'}</span>
                    </div>

                    {/* Veg indicator dot */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-md shadow-sm">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Category and Spicy info */}
                      <div className="flex items-center justify-between text-[11px] text-[#8C7E6E] mb-1">
                        <span className="uppercase font-semibold tracking-wider text-brand-gold">
                          {item.category?.replace('-', ' ')}
                        </span>
                        {typeof item.spicyLevel === 'number' && item.spicyLevel > 0 && (
                          <div className="flex items-center gap-0.5 text-brand-red">
                            {[...Array(item.spicyLevel)].map((_, i) => (
                              <Flame key={i} className="w-3 h-3 fill-brand-red" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => onOpenProductModal(item)}
                        className="font-serif text-lg font-bold text-espresso hover:text-brand-red cursor-pointer transition-colors leading-snug line-clamp-1 mb-1.5"
                      >
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#6B5E4F] line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-3 border-t border-[#EAE0D2] flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif text-xl font-black text-brand-red">
                            ₹{item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-[#9E8E7D] line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Cart Button or Counter */}
                      {qtyInCart > 0 ? (
                        <div className="flex items-center bg-[#EFE8DD] rounded-full p-0.5 border border-[#DFD3C2]">
                          <button
                            onClick={() => onUpdateQuantity(item.id, qtyInCart - 1)}
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold text-xs text-espresso">
                            {qtyInCart}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, qtyInCart + 1)}
                            className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-espresso hover:bg-brand-red hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(item, 1)}
                          className="inline-flex items-center gap-1.5 bg-espresso hover:bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
