import Image from 'next/image'
import { Button } from "@/components/ui/button"

const ClientPartnerGifts = () => {
  return (
    <div className="w-full bg-[#2F2F2F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Gift Card Image */}
          <div className="relative w-full md:w-1/2 aspect-[16/10] -ml-4 md:-ml-8">
            <div className="relative w-full h-full">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%201618873171.png"
                alt="Byyu Gift Card"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Client & Partner Gifts
            </h2>
            <p className="text-lg text-gray-300">
              Strengthen relationships with high-end, elegant gifts that leave a lasting impression.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="bg-[#FF3B1D] hover:bg-[#FF2400] text-white px-8"
            >
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientPartnerGifts 