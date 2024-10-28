import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import FlowerBuilder from './pages/FlowerBuilder';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/flower-builder" element={<FlowerBuilder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;