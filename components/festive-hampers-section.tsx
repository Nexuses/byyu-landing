import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function FestiveHampersSection() {
  return (
    <section className="w-full bg-[#2A2A2A] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left image */}
          <div className="relative w-full md:w-1/2 aspect-[16/10] -ml-4 md:-ml-8">
            <div className="relative w-full h-full">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Cystech/1579d996-5ad1-4c2b-9622-a556080d1694%201%20(1).png"
                alt="Festive and holiday gift hampers with decorative items"
                fill
                className="object-contain mt-[80px]"
                priority
              />
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Festive & Holiday Hampers
            </h2>
            <p className="text-lg text-gray-300">
              Celebrate in style with exclusive, themed gift collections for Diwali, Christmas, New Year, and more.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="bg-[#FF3D00] text-white hover:bg-[#FF5722] px-8"
            >
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 