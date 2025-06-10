import React from 'react';

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
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-12">All Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="w-[250px] h-[220px] rounded-xl overflow-hidden bg-gray-100 mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 