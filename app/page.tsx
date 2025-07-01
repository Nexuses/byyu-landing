import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CategoriesSection from "@/components/categories-section"
import CorporateGiftsSection from "@/components/corporate-gifts-section"
import CustomizeGiftsSection from "@/components/customize-gifts-section"
import OurClientsSection from "@/components/our-clients-section"
import Testimonials from "@/components/testimonials"
import GiftingEffortlessSection from "@/components/gifting-effortless-section"
import CorporateGiftsCategories from "@/components/corporate-gifts-categories"
import IndustryLeaders from "@/components/industry-leaders"
import Forms from "@/components/forms"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <CorporateGiftsSection />
      <CustomizeGiftsSection />
      <OurClientsSection />
      <Testimonials />
      <CorporateGiftsCategories />
      <IndustryLeaders />
      <Forms />
      <GiftingEffortlessSection />
    </main>
  )
}