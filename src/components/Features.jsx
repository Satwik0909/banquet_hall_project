import React from 'react'

const features = [
  {
    title: "Catering Services",
    description: "Professional catering with customizable menus",
  },
  {
    title: "Decoration",
    description: "Elegant décor options to match your theme",
  },
  {
    title: "Sound System",
    description: "State-of-the-art audio and lighting equipment",
  },
  {
    title: "Parking",
    description: "Ample parking space with valet service",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features 