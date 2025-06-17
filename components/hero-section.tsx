'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[#373743]" />
      <section className="relative pt-0 pb-4 md:pt-12 md:pb-8">
        <div className="container mx-auto px-0 md:px-6">
          <div className="bg-[#EEDFCC] shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-4 md:p-16 space-y-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-[#212529] text-center md:text-left">
                  Corporate Gifting, Made Effortless.
                </h1>
                <p className="text-gray-600 text-lg text-center md:text-left">
                  From handcrafted artisanal treats to premium lifestyle essentials, we offer a diverse range of high-quality gifts tailored to suit every occasion.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-[#ee4623] hover:bg-[#d63d1d] text-white transform hover:scale-105 transition-transform duration-300 font-bold"
                  >
                    <Link href="https://www.byyu.com/">Shop Now</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[350px] md:h-[500px] w-full mb-[-15px]"
              >
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Gifts%20Banner.png"
                  alt="Corporate Gift Collection" 
                  fill 
                  className="object-contain transform hover:scale-105 transition-transform duration-300"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}