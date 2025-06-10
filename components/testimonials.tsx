import Image from 'next/image'

const testimonials = [
  {
    text: `We sincerely thank the byyu team for their exceptional service during the Movado Distributor Summit 2025. From custom gift bags to premium hoodies and watch trays, every detail was executed with precision and elegance. Our global guests were impressed, and the curated gifting experience elevated the event. byyu proved to be a trusted partner in delivering excellence.`,
    name: 'Tusha Singh',
    title: 'Marketing Executive',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    text: `byyu was instrumental during our rebranding providing top-quality products on time with excellent service. The team was incredibly helpful and went above and beyond throughout the process.`,
    name: 'Vishal Deshmukh',
    title: 'Operations Executive',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <div className="w-full bg-[#F3E6D8] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-2">
          Inside byyu: Real Stories from Our Clients
        </h2>
        <p className="text-center text-gray-700 mb-10 text-base md:text-lg">
          Here's what our clients have to say about byyu in their own words.
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 w-full md:w-[500px] flex flex-col justify-between min-h-[300px]"
            >
              <p className="text-gray-900 text-sm md:text-base mb-6">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-gray-900">{t.name}</span>
                  <span className="text-xs text-gray-500">{t.title}</span>
                </div>
                <div className="flex ml-auto gap-1">
                  {[...Array(t.rating)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials