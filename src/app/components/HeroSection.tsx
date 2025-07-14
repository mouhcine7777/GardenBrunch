"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GardenBrunchHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Garden Brunch Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Garden Brunch Logo"
            width={120}
            height={120}
            className="mx-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Creative Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: 'AmostelySignature, cursive' }}
        >
          Where Stories Begin
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#9fb899] mb-8 font-light tracking-wide drop-shadow-md"
          style={{ fontFamily: 'Display, serif' }}
        >
          A Culinary Journey Through Time
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Discover the art of refined comfort dining in our enchanting garden sanctuary. 
          Every dish tells a story, every moment creates a memory.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="flex justify-center"
        >
<motion.button
  whileHover={{ scale: 1.05, backgroundColor: '#9fb899' }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const section = document.getElementById("menu");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-[#B2C9AC] hover:bg-[#9fb899] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
  style={{ fontFamily: 'Display, serif' }}
>
  View Menu
</motion.button>

        </motion.div>
      </div>
    </div>
  );
};

export default GardenBrunchHero;