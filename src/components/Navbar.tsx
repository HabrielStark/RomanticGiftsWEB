import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">RomanticGifts</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="text-gray-700 hover:text-rose-500 transition">
              Catalog
            </Link>
            <Link to="/flower-builder" className="text-gray-700 hover:text-rose-500 transition">
              Create Bouquet
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-rose-500 transition" />
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile">
              <User className="h-6 w-6 text-gray-700 hover:text-rose-500 transition" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/catalog"
            className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition"
          >
            Catalog
          </Link>
          <Link
            to="/flower-builder"
            className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition"
          >
            Create Bouquet
          </Link>
          <Link
            to="/cart"
            className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition"
          >
            Cart
          </Link>
          <Link
            to="/profile"
            className="block px-3 py-2 text-gray-700 hover:text-rose-500 transition"
          >
            Profile
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;