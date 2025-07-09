"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CustomizeGiftsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occasion: "",
    giftType: "",
    nameOrInitials: "",
    personalMessage: "",
    otherInstructions: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data to email endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'alexander.b@skilloncall.com',
          subject: 'New Customize Gift Request',
          text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Occasion: ${formData.occasion}
            Gift Type: ${formData.giftType}
            Name or Initials: ${formData.nameOrInitials}
            Personal Message: ${formData.personalMessage}
            Other Instructions: ${formData.otherInstructions}
          `
        }),
      })

      if (response.ok) {
        // Reset form data
        setFormData({
          name: "",
          email: "",
          occasion: "",
          giftType: "",
          nameOrInitials: "",
          personalMessage: "",
          otherInstructions: ""
        })
        setShowSuccess(true)
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

  const customizationOptions = [
    {
      title: "Drinkwares",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Bottles%20&%20Mugs.png",
    },
    {
      title: "Tech Gifts",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Travel%20&%20Tech.png",
    },
    {
      title: "Stationery",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Office%20&%20Stationery.png",
    },
    {
      title: "Sustainable gifts",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Promotional%20Giveaways.png",
    },
    {
      title: "Gift Sets",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Corporate%20Gifting.png",
    },
    {
      title: "Apparels",
      image: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/Byyu%20landing%20page/Caps%20&%20Hats.png",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Customize Gift Categories include
          </h2>
          <p className="text-gray-600 text-base">
            Go beyond gifting. Explore premium, customization options that blend utility with elegance
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {customizationOptions.map((option, index) => (
            <Link 
              href="https://www.byyu.com/customize" 
              key={index} 
              className="flex flex-col items-center hover:no-underline" 
              style={{width:'100%',maxWidth:'200px'}}
            >
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-1 w-full transition-transform hover:scale-105">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-gray-900 font-medium text-center text-base mt-3">
                {option.title === "Personal Branding"
                  ? (<><span>Personal</span><br /><span>Branding</span></>)
                  : option.title}
              </h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-[#ee4623] hover:bg-[#d63d1d] text-white transform hover:scale-105 transition-transform duration-300 font-bold"
              >
                CUSTOMIZE
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Customize Your Gift
                </DialogTitle>
              </DialogHeader>
              {showSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-600 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-sm text-gray-600 mb-4">Your customize gift request has been submitted successfully.</p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="text-sm text-[#ee4623] hover:text-[#d63d1d] font-medium"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="occasion" className="text-gray-700 font-medium">
                      What is the occasion?
                    </Label>
                    <Input
                      id="occasion"
                      type="text"
                      value={formData.occasion}
                      onChange={(e) => handleInputChange("occasion", e.target.value)}
                      placeholder="e.g., Birthday, Anniversary, Corporate Event"
                      className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="giftType" className="text-gray-700 font-medium">
                      What type of gift are you looking for?
                    </Label>
                    <Input
                      id="giftType"
                      type="text"
                      value={formData.giftType}
                      onChange={(e) => handleInputChange("giftType", e.target.value)}
                      placeholder="e.g., Bottles & Mugs, Travel & Tech, Office & Stationery"
                      className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nameOrInitials" className="text-gray-700 font-medium">
                      Add a name or initials (if any):
                    </Label>
                    <Input
                      id="nameOrInitials"
                      type="text"
                      value={formData.nameOrInitials}
                      onChange={(e) => handleInputChange("nameOrInitials", e.target.value)}
                      placeholder="Enter name or initials to be customized"
                      className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="personalMessage" className="text-gray-700 font-medium">
                      Would you like to include a personal message?
                    </Label>
                    <Textarea
                      id="personalMessage"
                      value={formData.personalMessage}
                      onChange={(e) => handleInputChange("personalMessage", e.target.value)}
                      placeholder="Enter your personal message here..."
                      className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623] min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherInstructions" className="text-gray-700 font-medium">
                      Any other instructions or preferences?
                    </Label>
                    <Textarea
                      id="otherInstructions"
                      value={formData.otherInstructions}
                      onChange={(e) => handleInputChange("otherInstructions", e.target.value)}
                      placeholder="Any additional requirements, color preferences, or special instructions..."
                      className="border-gray-300 focus:border-[#ee4623] focus:ring-[#ee4623] min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ee4623] hover:bg-[#d63d1d] text-white font-bold px-8 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
} 