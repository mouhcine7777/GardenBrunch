"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface Smoothie {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  ingredients: string[];
}

const SmoothiesMenu = () => {
  const [selectedItems, setSelectedItems] = useState<Record<number, boolean>>({});

  const smoothies: Smoothie[] = [
    {
      id: 1,
      name: "Passion Coconut",
      price: 65,
      description: "Lait de coco, fruit de la passion, banane et sirop d'érable.",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&h=400&fit=crop&crop=center",
      ingredients: ["Lait de coco", "Fruit de la passion", "Banane", "Sirop d'érable"]
    },
    {
      id: 2,
      name: "Berry Dreamy",
      price: 60,
      description: "Lait d'amandes, acai, banane et framboise.",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop&crop=center",
      ingredients: ["Lait d'amandes", "Acai", "Banane", "Framboise"]
    },
    {
      id: 3,
      name: "Energy Boost Shake",
      price: 65,
      description: "Lait, amandes, noix, dattes et raisins secs.",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=400&fit=crop&crop=center",
      ingredients: ["Lait", "Amandes", "Noix", "Dattes", "Raisins secs"]
    },
    {
      id: 4,
      name: "Mango Purple",
      price: 65,
      description: "Mangue, fraise et banane.",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&h=400&fit=crop&crop=center",
      ingredients: ["Mangue", "Fraise", "Banane"]
    },
    {
      id: 5,
      name: "Green Lagoon",
      price: 60,
      description: "Pomme, kiwi, brocoli, épinards et miel.",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=400&fit=crop&crop=center",
      ingredients: ["Pomme", "Kiwi", "Brocoli", "Épinards", "Miel"]
    },
    {
      id: 6,
      name: "Viking",
      price: 60,
      description: "Betterave, banane et fraise.",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=500&h=400&fit=crop&crop=center",
      ingredients: ["Betterave", "Banane", "Fraise"]
    }
  ];

  const toggleItem = (id: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f6f3] to-[#f0ede8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-5xl md:text-7xl text-[#3F6D4B] mb-4 leading-tight font-bold tracking-wide"
            style={{ 
              fontFamily: 'AmostelySignature, cursive',
              textShadow: '2px 2px 4px rgba(63, 109, 75, 0.1)'
            }}
          >
            Smoothies
          </h1>
          <p 
            className="text-lg text-[#6b7c73] max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'Display, serif' }}
          >
            Mélanges nutritifs avec des fruits frais biologiques et superaliments naturels
          </p>
        </motion.div>

        {/* Smoothie Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {smoothies.map((smoothie) => (
            <motion.div
              key={smoothie.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#f0ede8]"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F6D4B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              

              
              {/* Card Content */}
              <div className="relative p-6">
                {/* Header with price */}
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="text-2xl text-[#3F6D4B] font-bold group-hover:text-[#2c5a36] transition-colors duration-300 leading-snug"
                    style={{ 
                      fontFamily: 'Display, serif',
                      textShadow: '1px 1px 2px rgba(63, 109, 75, 0.1)'
                    }}
                  >
                    {smoothie.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#3F6D4B]" style={{ fontFamily: 'Display, serif' }}>
                      {smoothie.price}
                    </span>
                    <span className="text-sm text-[#6b7c73] ml-1">dh</span>
                  </div>
                </div>
                
                {/* Description */}
                <p 
                  className="text-[#6b7c73] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: 'Display, serif' }}
                >
                  {smoothie.description}
                </p>

                {/* Toggle Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleItem(smoothie.id)}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedItems[smoothie.id] 
                      ? 'bg-[#3F6D4B] text-white shadow-lg transform scale-105' 
                      : 'bg-[#f8f6f3] text-[#3F6D4B] hover:bg-[#3F6D4B] hover:text-white border-2 border-[#3F6D4B]/20 hover:border-[#3F6D4B]'
                  }`}
                  style={{ fontFamily: 'Display, serif' }}
                >
                  {selectedItems[smoothie.id] ? 'Masquer les détails' : 'Voir les détails'}
                </motion.button>

                {/* Expandable Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedItems[smoothie.id] ? 'auto' : 0,
                    opacity: selectedItems[smoothie.id] ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-4 border-t border-[#f0ede8]">
                    {/* Image */}
                    <div className="w-full h-32 rounded-xl mb-4 overflow-hidden">
                      <img 
                        src={smoothie.image} 
                        alt={smoothie.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Ingredients */}
                    <div className="space-y-4">
                      <h4 
                        className="text-lg font-bold text-[#3F6D4B]"
                        style={{ fontFamily: 'Display, serif' }}
                      >
                        Ingrédients
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {smoothie.ingredients.map((ingredient, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-2 bg-gradient-to-r from-[#3F6D4B]/10 to-[#3F6D4B]/5 text-[#3F6D4B] rounded-full text-sm font-medium border border-[#3F6D4B]/20 hover:bg-[#3F6D4B]/20 transition-colors duration-200"
                            style={{ fontFamily: 'Display, serif' }}
                          >
                            {ingredient}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#3F6D4B]/5 to-transparent rounded-tr-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16 py-8"
        >
          <div className="text-[#3F6D4B] text-lg font-medium">
            <span style={{ fontFamily: 'Display, serif' }}>
              Fait avec amour et des ingrédients naturels
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmoothiesMenu;