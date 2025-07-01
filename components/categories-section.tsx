'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    name: "Luxury Corporate Hamper",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/ramadhan-gift-hampers-moslem-theme-celebrete-holy-bake-snack-nastar-bakery-cookies-pud%201.png",
  },
  {
    name: "Wellness & Relaxation Hamper",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/concept-gift-with-basket-cosmetics-white-table%201.png",
  },
  {
    name: "Gourmet Food Hamper",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/different-products-wooden-table-kitchen-healthy-food-balanced-diet%201.png",
  },
  {
    name: "Eco-Friendly Hamper",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/eco-friendly-recyclable-tableware-isolated%20(1)%201.png",
  },
  {
    name: "Festive Hamper",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/concept-gift-with-christmas-basket-white-wooden-table%201.png",
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          All Categories
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {categories.map((category, index) => (
            <Link href="https://www.byyu.com/product-list/hampers-77" key={index}>
              <motion.div className="group cursor-pointer flex flex-col items-center">
                <div className="w-[150px] h-[130px] md:w-[215px] md:h-[190px] lg:w-[250px] lg:h-[220px] rounded-xl overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center font-medium pb-3 text-sm md:text-base">{category.name}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}