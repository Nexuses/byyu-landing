import Image from "next/image"

export default function CorporateGiftsSection() {
  const categories = [
    {
      title: "Client & Partner Gifts",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/happy-business-people-chatting-while-celebrating-christmas-office%201.png",
    },
    {
      title: "Personalized & Curated Gifts",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/woman-wrapping-christmas-gift-while-sitting-carped-living-room%201.png",
    },
    {
      title: "Festive & Holiday Hampers",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/happy-business-people-chatting-while-celebrating-christmas-office%202.png",
    },
    {
      title: "Event & Conference Gifting",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/happy-business-people-chatting-while-celebrating-christmas-office%203.png",
    },
    {
      title: "The Prestige Box",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/happy-business-people-chatting-while-celebrating-christmas-office%204.png",
    },
    {
      title: "The Appreciation Crate",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/empty-wicker-basket-wooden-table-dark-background%20(1)%201.png",
    },
  ]

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-2">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Corporate Gift Categories include
          </h2>
          <p className="text-gray-600 text-base">
            Wide Variety of premium, customizable gifts, including exclusive local items and gourmet hampers.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center" style={{width:'100%',maxWidth:'200px'}}>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-1 w-full transition-transform hover:scale-105">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-gray-900 font-medium text-center text-base mt-3">
                {category.title === "Client & Partner Gifts"
                  ? (<><span>Client & Partner</span><br /><span>Gifts</span></>)
                  : category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 