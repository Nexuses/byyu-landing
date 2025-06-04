'use client';

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "Hampers",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img.png",
  },
  {
    name: "Flowers",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(1).png",
  },
  {
    name: "Chocolates",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(2).png",
  },
  {
    name: "Cakes",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(3).png",
  },
  {
    name: "Plants",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(4).png",
  },
  {
    name: "Perfumes",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(5).png",
  },
  {
    name: "Kid",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(6).png",
  },
  {
    name: "Dry Fruits",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(7).png",
  },
  {
    name: "Combos",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(8).png",
  },
  {
    name: "Candles",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/img%20(9).png",
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-center mb-12"
        >
          All Categories
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center font-medium pb-3">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}