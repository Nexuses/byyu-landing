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
    <section className="w-full py-8 md:py-16 bg-white border-b-[96px] border-[#ee4623]">
      <div className="container mx-auto px-4 md:px-24">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl font-bold mb-2">Our Corporate Gift Categories include</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Wide Variety of premium, customizable gifts, including exclusive local items and gourmet hampers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* First row */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[0].bg}`}> {/* Tech Gifts */}
              <div className="flex-1 flex flex-col justify-center pl-4 md:pl-8 pr-2 md:pr-4 py-6 md:py-12">
                <span className={`text-lg md:text-2xl font-semibold mb-2 md:mb-3 ${categories[0].text}`}>{categories[0].title}</span>
                <Link href="https://www.byyu.com/corporategifts" className="mt-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit hover:bg-[#d13d1d] transition-colors duration-300 text-sm md:text-base">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-4 md:p-8">
                <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center justify-center">
                  <Image src={categories[0].image} alt={categories[0].title} width={120} height={90} className="md:w-[200px] md:h-[150px] object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[1].bg}`}> {/* Drinkware */}
              <div className="flex-1 flex flex-col justify-center pl-4 md:pl-8 pr-2 md:pr-4 py-6 md:py-12">
                <span className={`text-lg md:text-2xl font-semibold mb-2 md:mb-3 ${categories[1].text}`}>{categories[1].title}</span>
                <Link href="https://www.byyu.com/corporategifts" className="mt-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit hover:bg-[#d13d1d] transition-colors duration-300 text-sm md:text-base">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-4 md:p-8">
                <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center justify-center">
                  <Image src={categories[1].image} alt={categories[1].title} width={120} height={90} className="md:w-[200px] md:h-[150px] object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[2].bg}`}> {/* Gift Sets */}
              <div className="flex-1 flex flex-col justify-center pl-4 md:pl-8 pr-2 md:pr-4 py-6 md:py-12">
                <span className={`text-lg md:text-2xl font-semibold mb-2 md:mb-3 ${categories[2].text}`}>{categories[2].title}</span>
                <Link href="https://www.byyu.com/corporategifts" className="mt-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit hover:bg-[#d13d1d] transition-colors duration-300 text-sm md:text-base">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-4 md:p-8">
                <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center justify-center">
                  <Image src={categories[2].image} alt={categories[2].title} width={120} height={90} className="md:w-[200px] md:h-[150px] object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[3].bg}`}> {/* Stationery */}
              <div className="flex-1 flex flex-col justify-center pl-4 md:pl-8 pr-2 md:pr-4 py-6 md:py-12">
                <span className={`text-lg md:text-2xl font-semibold mb-2 md:mb-3 ${categories[3].text}`}>{categories[3].title}</span>
                <Link href="https://www.byyu.com/corporategifts" className="mt-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit hover:bg-[#d13d1d] transition-colors duration-300 text-sm md:text-base">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-4 md:p-8">
                <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center justify-center">
                  <Image src={categories[3].image} alt={categories[3].title} width={120} height={90} className="md:w-[200px] md:h-[150px] object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className={`rounded-2xl p-0 flex flex-row items-center h-full relative ${categories[4].bg}`}> {/* Sustainable Gifts */}
              <div className="flex-1 flex flex-col justify-center pl-4 md:pl-8 pr-2 md:pr-4 py-6 md:py-12">
                <span className={`text-lg md:text-2xl font-semibold mb-2 md:mb-3 ${categories[4].text}`}>{categories[4].title}</span>
                <Link href="https://www.byyu.com/corporategifts" className="mt-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-[#ee4623] text-white font-semibold w-fit hover:bg-[#d13d1d] transition-colors duration-300 text-sm md:text-base">Shop now</Link>
              </div>
              <div className="flex items-center justify-center p-4 md:p-8">
                <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center justify-center">
                  <Image src={categories[4].image} alt={categories[4].title} width={120} height={90} className="md:w-[200px] md:h-[150px] object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 