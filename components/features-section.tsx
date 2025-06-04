import Link from "next/link"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#212529] mb-4">
            Delight your clients and teams with premium corporate gifts.
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            From onboarding kits to holiday hampers, our B2B specialists curate high-quality gifts that strengthen business relationships and show appreciation.
          </p>
          <Link href="/corporate-gifts" className="inline-block">
            <button className="bg-[#ee4623] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d63d1d] transition-colors">
              Explore Corporate Gifts
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 