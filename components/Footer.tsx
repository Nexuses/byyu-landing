import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#E82A1B] text-white py-4">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Navigation Links */}
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-16">
              <div className="flex flex-col gap-3">
                <Link href="/" className="hover:text-yellow-300 text-left text-sm md:text-base">
                  Home
                </Link>
                <Link href="https://www.byyu.com/contact-us" className="hover:text-yellow-300 text-left text-sm md:text-base">
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="https://www.byyu.com/privacypolicy" className="hover:text-yellow-300 text-left text-sm md:text-base">
                  Privacy Policy
                </Link>
                <Link href="https://www.byyu.com/corporategifts" className="hover:text-yellow-300 text-left text-sm md:text-base">
                  Corporate Gifts
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="https://www.byyu.com/termsconditions" className="hover:text-yellow-300 text-left text-sm md:text-base">
                  Terms & conditions
                </Link>
                <Link href="https://www.byyu.com/blog/" className="hover:text-yellow-300 text-left text-sm md:text-base">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* App Store and Social Media Icons */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.byyu" target="_blank">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame-2.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="https://apps.apple.com/us/app/byyu-gifts-flowers-cakes/id6474729123" target="_blank">
                <Image
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(1)-1.png"
                  alt="Download on App Store"
                  width={140}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-2 flex-wrap justify-center">
              <Link href="https://www.facebook.com/profile.php?id=61552755963187" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(2).png" 
                  alt="Facebook" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://x.com/byyu_com" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(3).png" 
                  alt="Twitter" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://www.linkedin.com/company/thebyyu/about/" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(4).png" 
                  alt="LinkedIn" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=971523487661" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(5).png" 
                  alt="WhatsApp" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://www.instagram.com/byyu.ae/" target="_blank">
                <Image 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Frame%20(6).png" 
                  alt="Instagram" 
                  width={32} 
                  height={32} 
                />
              </Link>
              <Link href="https://www.tiktok.com/@byyu.ae/" target="_blank">
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