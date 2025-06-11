'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const gifts = [
  {
    title: "Premium Gift Boxes",
    description: "Curated collections of luxury items",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%201618873171.png"
  },
  {
    title: "Corporate Hampers",
    description: "Elegant corporate gifting solutions",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Cystech/1579d996-5ad1-4c2b-9622-a556080d1694%201%20(1).png"
  },
  {
    title: "Festive Collections",
    description: "Special occasion gift sets",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/DSC_0038%201%20(3).png"
  }
]

export default function GiftShowcaseSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Our Premium Gift Collections
          </h2>
          <p className="text-lg text-gray-600">
            Thoughtfully curated gifts for every corporate occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-[300px] mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={gift.image}
                  alt={gift.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {gift.title}
                </h3>
                <p className="text-gray-600">
                  {gift.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}