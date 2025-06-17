import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function GiftingEffortlessSection() {
  return (
    <section className="w-full py-4 md:py-20">
      <div className="container mx-auto px-4">
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: 'url(https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%2018.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 pt-8 px-6 pb-6 md:p-12">
            {/* Left image */}
            <div className="relative w-full md:w-1/2 aspect-[16/10] order-2 md:order-1">
              <div className="relative w-full h-full">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Byyu%20-%20Valentines%20Day%20(1)%201.png"
                  alt="Byyu App Interface"
                  fill
                  className="object-contain mt-[32px] md:mt-[48px]"
                  priority
                />
              </div>
            </div>

            {/* Right content */}
            <div className="w-full md:w-1/2 space-y-6 flex flex-col items-center text-center md:items-start md:text-left order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Let&apos;s Make Gifting Effortless & Impactful!
              </h2>
              <p className="text-lg text-gray-700">
                Byyu can help you build stronger relationships through gifting. Get in touch to start planning your next corporate gift!
              </p>
              <Link href="https://www.byyu.com/contact-us">
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-[#F04A23] hover:bg-[#d83d18] text-white px-8 font-bold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 