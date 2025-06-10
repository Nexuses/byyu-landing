import React from "react"

const Forms = () => {
  return (
    <section className="bg-[#2F2F2F] flex justify-center items-center py-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 px-4">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Elevate Your Brand with<br />Thoughtful Gifting</h1>
          <p className="mb-8 text-sm md:text-base">Looking to impress clients, partners, or teams? Contact byyu <br/> for premium corporate gifting solutions that blend quality, <br/> customization, and lasting impact.</p>
          <h1 className="font-semibold text-base md:text-lg">Let's create something unforgettable<br />reach out today.</h1>
        </div>
        {/* Right Section */}
        <div className="flex-1 bg-white rounded-md shadow-md p-6 flex flex-col justify-center min-w-[320px] max-w-md mx-auto">
          <form className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-xs font-medium mb-1" htmlFor="firstName">First name *</label>
                <input id="firstName" name="firstName" type="text" required className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium mb-1" htmlFor="lastName">Last name *</label>
                <input id="lastName" name="lastName" type="text" required className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <p className="text-[10px] text-gray-500 mt-1">By clicking Submit, you agree to our terms and conditions</p>
            <button type="submit" className="bg-[#F24E1E] text-white rounded px-6 py-2 text-sm font-semibold mt-2 hover:bg-[#d84315] transition-colors">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Forms 