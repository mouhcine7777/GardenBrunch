"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const StickyMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Boissons chaudes", slug: "boissons-chaudes" },
    { title: "Cocktails", slug: "cocktails" },
    { title: "Smoothies", slug: "smoothies" },
    { title: "Petit déj", slug: "petit-dejeuner" },
    { title: "Les Brunchs", slug: "brunchs" },
    { title: "Starters", slug: "starters" },
    { title: "Plats", slug: "plats" },
    { title: "Desserts", slug: "desserts" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#f8f6f3] to-[#f0ede8] shadow-lg z-50 border-b border-[#3F6D4B]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="relative w-7 h-7 flex flex-col justify-center items-center space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-[#3F6D4B] origin-center"
            />
            <motion.div
              animate={{
                opacity: isOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-[#3F6D4B]"
            />
            <motion.div
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-[#3F6D4B] origin-center"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#3F6D4B] absolute left-0 right-0 top-full"
            >
              <div className="py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 
                    }}
                  >
                    <Link 
                      href={`/menu/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl hover:bg-white/10 transition-colors duration-300 group text-center"
                    >
                      <span 
                        className="text-xl text-white group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: 'Display, serif' }}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default StickyMenu;