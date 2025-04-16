import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-950 to-blue-900 text-white py-10 px-5 sm:px-10 lg:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">

        {/* Logo + Description */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-bold mb-3">📚 BookNest</h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Discover, explore and buy your favorite books in just a few clicks. We bring stories to life.
          </p>
          <div className="flex gap-4 mt-4 justify-center sm:justify-start">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer text-lg" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer text-lg" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer text-lg" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer text-lg" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className='hover:text-gray-100'><Link to="/">🏠 Home</Link></li>
            <li className='hover:text-gray-100'><Link to="/shop">🛒 Shop</Link></li>
            <li className='hover:text-gray-100'><Link to="/about">ℹ️ About</Link></li>
            <li className='hover:text-gray-100'><Link to="/reviews">📝 Blog</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className='hover:text-gray-100'><Link to="/faq">❓ FAQs</Link></li>
            <li className='hover:text-gray-100'><Link to="/shipping">🚚 Shipping Policy</Link></li>
            <li className='hover:text-gray-100'><Link to="/returns">↩️ Returns</Link></li>
            <li className='hover:text-gray-100'><Link to="/terms">📜 Terms</Link></li>
            <li className='hover:text-gray-100'><Link to="/privacy">🔒 Privacy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">Contact Us</h3>
          <p className="text-sm text-gray-300">📧 hamzarathore0000@gmail.com</p>
          <p className="text-sm text-gray-300 mt-2">📞 +92 300 1234567</p>
          <p className="text-sm text-gray-300 mt-2">📍 Lahore, Pakistan</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold">TheReadingNook</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
