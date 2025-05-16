import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CategoriesSection from "@/components/categories-section"
import CorporateGiftsSection from "@/components/corporate-gifts-section"
import OurClientsSection from "@/components/our-clients-section"
import ClientPartnerGifts from "@/components/client-partner-gifts"
import PersonalizedGiftsSection from "@/components/personalized-gifts-section"
import FestiveHampersSection from "@/components/festive-hampers-section"
import EventConferenceSection from "@/components/event-conference-section"
import GiftingEffortlessSection from "@/components/gifting-effortless-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <CorporateGiftsSection />
      <OurClientsSection />
      <ClientPartnerGifts />
      <PersonalizedGiftsSection />
      <FestiveHampersSection />
      <EventConferenceSection />
      <GiftingEffortlessSection />
    </main>
  )
}
