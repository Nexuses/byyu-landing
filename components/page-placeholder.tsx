import React from "react"

export default function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
    </div>
  )
}
