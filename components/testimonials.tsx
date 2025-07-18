import Image from 'next/image'

const testimonials = [
  {
    text: `We sincerely thank the byyu team for their exceptional service during the Movado Distributor Summit 2025. From custom gift bags to premium hoodies and watch trays, every detail was executed with precision and elegance. Our global guests were impressed, and the curated gifting experience elevated the event. byyu proved to be a trusted partner in delivering excellence.`,
    name: 'Tusha Singh',
    title: 'Marketing Executive',
    rating: 5,
  },
  {
    text: `byyu was instrumental during our rebranding providing top-quality products on time with excellent service. The team was incredibly helpful and went above and beyond throughout the process.`,
    name: 'Vishal Deshmukh',
    title: 'Operations Executive',
    rating: 5,
  },
  {
    text: `The attention to detail and quality of products from byyu exceeded our expectations. Their team's dedication to understanding our brand needs resulted in perfect corporate gifts that truly represented our company values.`,
    name: 'Sarah Chen',
    title: 'Brand Manager',
    rating: 5,
  },
  {
    text: `Working with byyu transformed our corporate gifting strategy. Their innovative approach and premium product selection helped us strengthen our client relationships. The team's responsiveness and professionalism made the entire process seamless.`,
    name: 'Michael Rodriguez',
    title: 'Client Relations Director',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <div className="w-full bg-[#F3E6D8] py-16">
      <div className="container mx-auto px-4 md:px-24">
        <h2 className="text-4xl font-bold text-black text-center mb-4">
          Inside byyu: Real Stories from Our Clients
        </h2>
        <p className="text-center text-gray-700 mb-16 text-base md:text-lg">
          Here's what our clients have to say about byyu in their own words.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 md:p-10 w-full flex flex-col justify-between min-h-[300px]"
            >
              <p className="text-gray-900 text-sm md:text-base mb-6">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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