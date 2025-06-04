"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-xl space-y-4 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <form className="space-y-4">
          <Input placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Message" required />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </div>
    </div>
  )
}
