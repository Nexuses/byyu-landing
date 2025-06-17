"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function NavBar() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)

  const categories: { name: string; href: string }[] = [
  ]

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 md:px-0" style={{ width: '90%', maxWidth: '90%' }}>
        <div className="flex flex-row items-center justify-between gap-4 md:gap-0 w-full">
          {/* Logo - Left aligned */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame.png"
                alt="Byyu Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          {/* Download App Button - Right aligned */}
          <div className="relative flex items-center">
            <button 
              className="flex items-center gap-2 bg-[#F03613] text-white px-4 py-2 rounded-full hover:bg-[#d32f0f] transition-colors"
              onClick={() => setIsDownloadOpen(!isDownloadOpen)}
            >
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
            {/* Download Dropdown */}
            {isDownloadOpen && (
              <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg py-0.5 z-50">
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.byyu" 
                  target="_blank"
                  className="flex justify-center px-0.5 py-0.5 hover:bg-gray-100"
                  onClick={() => setIsDownloadOpen(false)}
                >
                  <Image
                    src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame-2.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={48}
                    className="h-7 w-auto"
                  />
                </Link>
                <Link 
                  href="https://apps.apple.com/us/app/byyu-gifts-flowers-cakes/id6474729123" 
                  target="_blank"
                  className="flex justify-center px-0.5 py-0.5 hover:bg-gray-100"
                  onClick={() => setIsDownloadOpen(false)}
                >
                  <Image
                    src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(1)-1.png"
                    alt="Download on App Store"
                    width={140}
                    height={48}
                    className="h-7 w-auto"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#373743]">
        <div className="border-t-4 border-[#F03613]">
          <div className="container mx-auto px-4 md:px-0" style={{ width: '90%', maxWidth: '90%' }}>
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
