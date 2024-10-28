import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="ml-2 text-xl font-semibold text-white">RomanticGifts</span>
            </div>
            <p className="text-sm">Making moments special since 1970</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="hover:text-rose-400 transition">Catalog</Link></li>
              <li><Link to="/flower-builder" className="hover:text-rose-400 transition">Create Bouquet</Link></li>
              <li><Link to="/profile" className="hover:text-rose-400 transition">My Account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@romanticgifts.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Love Street, NY 10001</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe for special offers and updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button className="w-full bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} RomanticGifts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;