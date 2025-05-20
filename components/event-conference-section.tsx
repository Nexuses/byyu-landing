import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EventConferenceSection() {
  return (
    <section className="w-full bg-[#A2A7AA] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Event & Conference Gifting
            </h2>
            <p className="text-lg text-gray-700">
              Make every event memorable with custom-branded giveaways and curated gift boxes.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8"
            >
              Shop now
            </Button>
          </div>

          {/* Right image */}
          <div className="relative w-full md:w-1/2 aspect-[16/10] -mr-4 md:-mr-8">
            <div className="relative w-full h-full">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/DSC_0038%201%20(3).png"
                alt="Event and Conference Gifting Products"
                fill
                className="object-contain mt-[80px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 