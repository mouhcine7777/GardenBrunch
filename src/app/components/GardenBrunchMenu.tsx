"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const GardenBrunchMenu = () => {
  const menuItems = [
    {
      title: "Boissons chaudes",
      description: "Cafés artisanaux, chocolats chauds onctueux et lattes créatifs qui réchauffent l'âme",
      image: "/hot-drinks.jpg",
      slug: "boissons-chaudes"
    },
    {
      title: "Cocktails",
      description: "Créations signature de nos mixologues inspirées par les saveurs méditerranéennes",
      image: "/cocktails.jpg",
      slug: "cocktails"
    },
    {
      title: "Smoothies",
      description: "Mélanges nutritifs avec des fruits frais biologiques et superaliments naturels",
      image: "/smoothies.jpg",
      slug: "smoothies"
    },
    {
      title: "Petit déj",
      description: "Croissants feuilletés maison, œufs benedictine et confitures artisanales",
      image: "/breakfast.jpg",
      slug: "petit-dejeuner"
    },
    {
      title: "Les Brunchs",
      description: "Pancakes moelleux, avocado toast, saumon fumé et œufs pochés parfaits",
      image: "/brunch.jpg",
      slug: "brunchs"
    },
    {
      title: "Starters",
      description: "Carpaccio de betterave, tartare de thon à l'avocat et burrata crémeuse",
      image: "/starters.jpg",
      slug: "starters"
    },
    {
      title: "Plats",
      description: "Risotto aux champignons sauvages, filet de bœuf et pavé de saumon grillé",
      image: "/main-dishes.jpg",
      slug: "plats"
    },
    {
      title: "Desserts",
      description: "Tarte tatin, tiramisu traditionnel et fondant au chocolat coulant",
      image: "/desserts.jpg",
      slug: "desserts"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#f8f6f3] to-[#f0ede8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl text-[#2c3e34] mb-4 leading-tight"
            style={{ fontFamily: 'AmostelySignature, cursive' }}
          >
            Notre Menu
          </h2>
          <p 
            className="text-lg text-[#6b7c73] max-w-2xl mx-auto font-light"
            style={{ fontFamily: 'Display, serif' }}
          >
            Découvrez nos créations culinaires inspirées par la tradition française
            et sublimées par une touche moderne
          </p>
        </motion.div>

        {/* Menu Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl h-96 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Logo in right corner */}
              <div className="absolute top-4 right-4 z-20">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                />
              </div>

              {/* Content with subtle shadow overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                {/* Gradient shadow overlay positioned higher to be below text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                
                <div className="relative p-6">
                  <motion.h3
                    className="text-4xl text-white mb-3 drop-shadow-2xl"
                    style={{ fontFamily: 'Display, serif' }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/95 text-sm mb-4 leading-relaxed drop-shadow-lg"
                    style={{ fontFamily: 'Display, serif' }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Button with Next.js Link */}
                  <Link href={`/menu/${item.slug}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#3F6D4B] border border-[#3F6D4B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#9fb89a] hover:border-[#9fb89a] transition-all duration-300 drop-shadow-lg"
                      style={{ fontFamily: 'Display, serif' }}
                    >
                      Découvrir
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Elegant border effect */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GardenBrunchMenu;