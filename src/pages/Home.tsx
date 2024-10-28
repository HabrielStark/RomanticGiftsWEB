import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Flower, Send } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Make Every Moment Special
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 mb-8"
            >
              Discover perfect gifts for your loved ones. From stunning bouquets to thoughtful presents.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition"
            >
              Explore Gifts
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-pink-50 rounded-xl"
            >
              <Heart className="h-12 w-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Curated with Love</h3>
              <p className="text-gray-600">Handpicked selection of romantic gifts</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-purple-50 rounded-xl"
            >
              <Gift className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Perfect Presents</h3>
              <p className="text-gray-600">Gifts for every special occasion</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-pink-50 rounded-xl"
            >
              <Flower className="h-12 w-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Flowers</h3>
              <p className="text-gray-600">Daily fresh bouquets and arrangements</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-purple-50 rounded-xl"
            >
              <Send className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery available</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;