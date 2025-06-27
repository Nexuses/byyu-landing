"use client"

import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const industryLeaders = [
  {
    name: "talabat",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/talabat.png",
    alt: "Talabat logo",
    url: "https://www.talabat.com/uae"
  },
  {
    name: "deliveroo",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/deliveroo.png",
    alt: "Deliveroo logo",
    url: "https://deliveroo.ae/"
  },
  {
    name: "flowwow",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Flowwow.png",
    alt: "Flowwow logo",
    url: "https://flowwow.ae/"
  },
  {
    name: "noon food",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/noonfood.png",
    alt: "Noon Food logo",
    url: "https://food.noon.com/uae-en/"
  },
  {
    name: "nownow",
    logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/nownow.png",
    alt: "NowNow logo",
    url: "https://www.noonnownow.com/"
  }
]

export default function IndustryLeaders() {
  const isMobile = useIsMobile()

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Flowers That Travel With Love – Across Every Platform</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We're proud to partner with top aggregators and platforms that share our commitment to quality and excellence.
          </p>
        </div>
        
        {isMobile ? (
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {industryLeaders.map((leader) => (
                  <CarouselItem key={leader.name} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="flex items-center justify-center p-4">
                      {leader.url ? (
                        <Link href={leader.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                          <Image src={leader.logo} alt={leader.alt} width={240} height={100} className="object-contain h-24 w-auto" />
                        </Link>
                      ) : (
                        <Image src={leader.logo} alt={leader.alt} width={240} height={100} className="object-contain h-24 w-auto" />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {industryLeaders.map((leader) => (
              <div key={leader.name} className="flex items-center justify-center">
                {leader.url ? (
                  <Link href={leader.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image src={leader.logo} alt={leader.alt} width={240} height={100} className="object-contain h-32 w-auto" />
                  </Link>
                ) : (
                  <Image src={leader.logo} alt={leader.alt} width={240} height={100} className="object-contain h-32 w-auto" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 