import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#E82A1B] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-24">
              <Link href="/" className="hover:underline min-w-[100px]">
                Home
              </Link>
              <Link href="/privacy" className="hover:underline min-w-[140px]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline min-w-[180px]">
                Terms & conditions
              </Link>
            </div>
            <div className="flex gap-24">
              <Link href="/contact" className="hover:underline min-w-[100px]">
                Contact Us
              </Link>
              <Link href="/corporate-gifts" className="hover:underline min-w-[140px]">
                Corporate Gifts
              </Link>
              <Link href="/blog" className="hover:underline min-w-[180px]">
                Blog
              </Link>
            </div>
          </div>

          {/* App Store and Social Media Icons */}
          <div className="flex items-center gap-6">
            <Link href="https://play.google.com/store" target="_blank">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame-2.png"
                alt="Get it on Google Play"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="https://apps.apple.com" target="_blank">
              <Image
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(1)-1.png"
                alt="Download on App Store"
                width={140}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(2).png" 
                  alt="Facebook" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(3).png" 
                  alt="Twitter" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(4).png" 
                  alt="LinkedIn" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://whatsapp.com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(5).png" 
                  alt="WhatsApp" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(6).png" 
                  alt="Instagram" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://tiktok.com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(7).png" 
                  alt="TikTok" 
                  width={32} 
                  height={32} 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 