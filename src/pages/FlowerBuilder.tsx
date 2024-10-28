import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingCart, Flower, Package } from 'lucide-react';
import { flowers, bouquetStyles, extras } from '../data/flowers';
import { useCartStore } from '../stores/cartStore';

const FlowerBuilder = () => {
  const [selectedFlowers, setSelectedFlowers] = useState<{ id: string; quantity: number }[]>([]);
  const [selectedStyle, setSelectedStyle] = useState(bouquetStyles[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const addItem = useCartStore((state) => state.addItem);

  const calculateTotal = () => {
    const flowersTotal = selectedFlowers.reduce((sum, selected) => {
      const flower = flowers.find(f => f.id === selected.id);
      return sum + (flower?.price || 0) * selected.quantity;
    }, 0);

    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);

    return (flowersTotal * selectedStyle.priceMultiplier + extrasTotal).toFixed(2);
  };

  const handleAddFlower = (flowerId: string) => {
    setSelectedFlowers(prev => {
      const existing = prev.find(f => f.id === flowerId);
      if (existing) {
        return prev.map(f => 
          f.id === flowerId ? { ...f, quantity: f.quantity + 1 } : f
        );
      }
      return [...prev, { id: flowerId, quantity: 1 }];
    });
  };

  const handleRemoveFlower = (flowerId: string) => {
    setSelectedFlowers(prev => {
      const existing = prev.find(f => f.id === flowerId);
      if (existing?.quantity === 1) {
        return prev.filter(f => f.id !== flowerId);
      }
      return prev.map(f =>
        f.id === flowerId ? { ...f, quantity: f.quantity - 1 } : f
      );
    });
  };

  const handleAddToCart = () => {
    if (selectedFlowers.length === 0) {
      alert('Please select at least one flower');
      return;
    }

    const bouquet = {
      id: `custom-bouquet-${Date.now()}`,
      name: 'Custom Bouquet',
      description: `${selectedStyle.name} bouquet with ${selectedFlowers.reduce((sum, f) => sum + f.quantity, 0)} flowers`,
      price: parseFloat(calculateTotal()),
      category: 'flowers' as const,
      imageUrl: flowers.find(f => f.id === selectedFlowers[0].id)?.imageUrl || '',
      inStock: true,
    };

    addItem(bouquet);
    
    // Show success message
    const element = document.createElement('div');
    element.className = 'fixed z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    element.textContent = 'Bouquet added to cart!';
    element.style.top = '20px';
    element.style.right = '20px';
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 2000);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Bouquet</h1>
          <p className="text-gray-600">Design your perfect arrangement with our flower builder</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flower Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Choose Your Flowers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {flowers.map((flower) => (
                  <motion.div
                    key={flower.id}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-lg overflow-hidden border border-gray-200"
                  >
                    <img
                      src={flower.imageUrl}
                      alt={flower.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium">{flower.name}</h3>
                      <p className="text-sm text-gray-600">${flower.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <button
                          onClick={() => handleRemoveFlower(flower.id)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                          disabled={!selectedFlowers.find(f => f.id === flower.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-medium">
                          {selectedFlowers.find(f => f.id === flower.id)?.quantity || 0}
                        </span>
                        <button
                          onClick={() => handleAddFlower(flower.id)}
                          className="p-1 rounded-full bg-rose-100 hover:bg-rose-200 transition"
                        >
                          <Plus className="h-4 w-4 text-rose-600" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Style Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Choose Your Style</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bouquetStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedStyle(style)}
                    className={`p-4 rounded-lg border-2 transition ${
                      selectedStyle.id === style.id
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-rose-200'
                    }`}
                  >
                    <h3 className="font-medium">{style.name}</h3>
                    <p className="text-sm text-gray-600">{style.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Add Extras</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {extras.map((extra) => (
                  <motion.button
                    key={extra.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedExtras(prev =>
                      prev.includes(extra.id)
                        ? prev.filter(id => id !== extra.id)
                        : [...prev, extra.id]
                    )}
                    className={`p-4 rounded-lg border-2 transition ${
                      selectedExtras.includes(extra.id)
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-rose-200'
                    }`}
                  >
                    <h3 className="font-medium">{extra.name}</h3>
                    <p className="text-sm text-gray-600">${extra.price}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm p-6 sticky top-24"
            >
              <h2 className="text-xl font-semibold mb-4">Your Bouquet</h2>
              
              <div className="space-y-4 mb-6">
                {selectedFlowers.map((selected) => {
                  const flower = flowers.find(f => f.id === selected.id);
                  return (
                    <div key={selected.id} className="flex justify-between items-center">
                      <span>{flower?.name} × {selected.quantity}</span>
                      <span>${((flower?.price || 0) * selected.quantity).toFixed(2)}</span>
                    </div>
                  );
                })}
                
                {selectedExtras.map((extraId) => {
                  const extra = extras.find(e => e.id === extraId);
                  return (
                    <div key={extraId} className="flex justify-between items-center">
                      <span>{extra?.name}</span>
                      <span>${extra?.price.toFixed(2)}</span>
                    </div>
                  );
                })}

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <textarea
                  placeholder="Add a message for your bouquet..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  rows={3}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerBuilder;