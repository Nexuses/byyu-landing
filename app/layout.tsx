import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "byyu - Corporate Gifting",
  description: "Personalized corporate gifts for every occasion",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>byyu - Corporate Gifting</title>
        <link rel="icon" href="/byyu-favicon.png" type="image/png" />
        <meta name="google-site-verification" content="googlefc99b112cfdfcda1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
