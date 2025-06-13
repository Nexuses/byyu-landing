"use client"

import React, { useState } from "react"

const Forms = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget; // Save reference to the form

    const formData = new FormData(form)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email')
    }

    try {
      // Send form data to email endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'alexander.b@skilloncall.com',
          subject: 'New Contact Form Submission',
          text: `
            Name: ${data.firstName} ${data.lastName}
            Email: ${data.email}
          `
        }),
      })

      if (response.ok) {
        form.reset(); // Use the saved reference
        setShowSuccess(true);
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          {showSuccess ? (
            <div className="text-center py-4">
              <div className="text-green-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Thank You!</h3>
              <p className="text-sm text-gray-600">Your message has been submitted successfully.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-4 text-sm text-[#F24E1E] hover:text-[#d84315] font-medium"
              >
                Submit another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#F24E1E] text-white rounded px-6 py-2 text-sm font-semibold mt-2 hover:bg-[#d84315] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Forms 