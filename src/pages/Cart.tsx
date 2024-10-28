import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, CreditCard } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Order placed successfully!');
    }, 2000);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-8"
        >
          Shopping Cart
        </motion.h1>

        {items.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 mb-8"
          >
            Your cart is empty
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-4"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="rounded-lg border-gray-300 focus:ring-rose-500"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-2 font-semibold">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isCheckingOut}
                    className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition flex items-center justify-center gap-2"
                  >
                    {isCheckingOut ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <CreditCard className="h-5 w-5" />
                        <span>Checkout</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;