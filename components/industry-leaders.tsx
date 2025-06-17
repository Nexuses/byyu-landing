import Image from "next/image"

const industryLeaders = [
  {
    name: "talabat",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/talabat.png",
    alt: "Talabat logo"
  },
  {
    name: "deliveroo",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/deliveroo.png",
    alt: "Deliveroo logo"
  },
  {
    name: "flowwow",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Flowwow.png",
    alt: "Flowwow logo"
  },
  {
    name: "noon food",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/noonfood.png",
    alt: "Noon Food logo"
  },
  {
    name: "nownow",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/nownow.png",
    alt: "NowNow logo"
  }
]

export default function IndustryLeaders() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Flowers That Travel With Love – Across Every Platform</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We're proud to partner with top aggregators and platforms that share our commitment to quality and excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {industryLeaders.map((leader) => (
            <div key={leader.name} className="flex items-center justify-center">
              <Image src={leader.logo} alt={leader.alt} width={240} height={100} className="object-contain h-32 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 