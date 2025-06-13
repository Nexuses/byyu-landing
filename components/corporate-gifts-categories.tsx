import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Tech Gifts",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Tech-Gifts.png",
    bg: "bg-[#2F2F2F]",
    button: "bg-[#ee4623] text-white",
    text: "text-white",
    link: "/shop?category=tech-gifts"
  },
  {
    title: "Drinkware",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Drinkware-1.png",
    bg: "bg-[#A2A7AA]",
    button: "bg-[#232323] text-white",
    text: "text-[#232323]",
    link: "/shop?category=drinkware"
  },
  {
    title: "Gift Sets",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Gift%20Sets-1.png",
    bg: "bg-[#A2A7AA]",
    button: "bg-[#232323] text-white",
    text: "text-[#232323]",
    link: "/shop?category=gift-sets"
  },
  {
    title: "Stationery",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Stationary.png",
    bg: "bg-[#2F2F2F]",
    button: "bg-[#ee4623] text-white",
    text: "text-white",
    link: "/shop?category=stationery"
  },
  {
    title: "Sustainable Gifts",
    image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Sustainable%20Gifts.png",
    bg: "bg-[#2F2F2F]",
    button: "bg-[#ee4623] text-white",
    text: "text-white",
    link: "/shop?category=sustainable-gifts"
  },
]

export default function CorporateGiftsCategories() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Corporate Gift Categories include</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Wide Variety of premium, customizable gifts, including exclusive local items and gourmet hampers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First row */}
          <div className="flex flex-col gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[0].bg}`}> {/* Tech Gifts */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12">
                <span className={`text-2xl md:text-2xl font-semibold mb-6 ${categories[0].text}`}>{categories[0].title}</span>
                <Link href="https://www.byyu.com/" className="mt-4 px-6 py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <Image src={categories[0].image} alt={categories[0].title} width={160} height={120} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[1].bg}`}> {/* Drinkware */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12">
                <span className={`text-2xl md:text-2xl font-semibold mb-6 ${categories[1].text}`}>{categories[1].title}</span>
                <Link href="https://www.byyu.com/" className="mt-4 px-6 py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <Image src={categories[1].image} alt={categories[1].title} width={160} height={120} className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[2].bg}`}> {/* Gift Sets */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12">
                <span className={`text-2xl md:text-2xl font-semibold mb-6 ${categories[2].text}`}>{categories[2].title}</span>
                <Link href="https://www.byyu.com/" className="mt-4 px-6 py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <Image src={categories[2].image} alt={categories[2].title} width={160} height={120} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[3].bg}`}> {/* Stationery */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12">
                <span className={`text-2xl md:text-2xl font-semibold mb-6 ${categories[3].text}`}>{categories[3].title}</span>
                <Link href="https://www.byyu.com/" className="mt-4 px-6 py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <Image src={categories[3].image} alt={categories[3].title} width={160} height={120} className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-col gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[4].bg}`}> {/* Sustainable Gifts */}
              <div className="flex-1 flex flex-col justify-center px-8 py-12">
                <span className={`text-2xl md:text-2xl font-semibold mb-6 ${categories[4].text}`}>{categories[4].title}</span>
                <Link href="https://www.byyu.com/" className="mt-4 px-6 py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
                  <Image src={categories[4].image} alt={categories[4].title} width={160} height={120} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 