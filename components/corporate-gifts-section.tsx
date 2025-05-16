import Image from "next/image"

export default function CorporateGiftsSection() {
  const categories = [
    {
      title: "Flowers",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/image%206.png",
    },
    {
      title: "Cakes",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Rectangle%2041.png",
    },
    {
      title: "Combo",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/image%20(1).png",
    },
    {
      title: "Moleskine",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/image%2019.png",
    },
    {
      title: "Anniversary",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/image%20(2).png",
    },
    {
      title: "Explore Gifts",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/image%20(3).png",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Corporate Gift Categories include
          </h2>
          <p className="text-gray-600">
            Wide Variety of premium, customizable gifts, including exclusive local items and gourmet hampers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3 border border-gray-200">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-center">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 