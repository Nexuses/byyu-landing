import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
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
      <div className="container mx-auto px-0 py-3" style={{ width: '90%', maxWidth: '90%' }}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame.png"
              alt="Byyu Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border-[0.5px] border-gray-300 outline-none ring-[0.5px] ring-gray-300 ring-offset-4 ring-offset-[#E8D2CD] focus:border-red-500 focus:ring-red-400"
                placeholder="Search for gifts..."
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F03613] text-white px-6 py-1.5 rounded-full">
                Submit
              </button>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-6">
            <Link href="/corporate-gifts" className="flex items-center">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/a-1.png"
                alt="Corporate Gifts"
                width={180}
                height={60}
              />
            </Link>
            <Link href="/wishlist" className="flex flex-col items-center text-gray-700">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame-1.png"
                alt="Wishlist Icon"
                width={32}
                height={32}
                className="mb-1"
              />
              Wishlist
            </Link>
            <Link href="/signin" className="flex flex-col items-center text-gray-700">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(1).png"
                alt="Sign In Icon"
                width={32}
                height={32}
                className="mb-1"
              />
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#373743]">
        <div className="border-t-4 border-[#F03613]">
          <div className="container mx-auto px-0" style={{ width: '90%', maxWidth: '90%' }}>
            <div className="flex justify-center py-3" style={{ gap: '160px' }}>
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
