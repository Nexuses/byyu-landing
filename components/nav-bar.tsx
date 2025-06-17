"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Flowers", href: "/flowers" },
    { name: "Cakes", href: "/cakes" },
    { name: "Combo", href: "/combo" },
    { name: "Birthday", href: "/birthday" },
    { name: "Anniversary", href: "/anniversary" },
    { name: "Explore Gifts", href: "/explore-gifts" },
  ]

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 md:px-0" style={{ width: '90%', maxWidth: '90%' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Mobile Menu Button and Logo Container */}
          <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {/* Logo - Centered on mobile */}
            <Link href="/" className="flex-shrink-0 md:flex-shrink-0 absolute left-1/2 md:static md:left-auto -translate-x-1/2 md:translate-x-0">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame.png"
                alt="Byyu Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          {/* Download App Button - Now in its own container */}
          <div className="hidden md:block">
            <button className="flex items-center gap-2 bg-[#F03613] text-white px-4 py-2 rounded-full hover:bg-[#d32f0f] transition-colors">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download App</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#373743]">
        <div className="border-t-4 border-[#F03613]">
          <div className="container mx-auto px-4 md:px-0" style={{ width: '90%', maxWidth: '90%' }}>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4`}>
              <div className="flex flex-col space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-white hover:text-red-400 transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center py-3" style={{ gap: '160px' }}>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-white hover:text-red-400 transition-colors text-lg"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
