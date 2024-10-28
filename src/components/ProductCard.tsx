import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../stores/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = () => {
    addItem(product);
    // Trigger success animation
    const element = document.createElement('div');
    element.className = 'fixed z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    element.textContent = 'Added to cart!';
    element.style.top = '20px';
    element.style.right = '20px';
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition shadow-lg"
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </motion.button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold text-gray-900 dark:text-white"
          >
            ${product.price.toFixed(2)}
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;