import React from 'react'
import { AuroraBackground } from './components/AuroraBackground'
import BookingSection from './components/BookingSection'
import Features from './components/Features'
import FloatingNav from './components/FloatingNav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import VenueGallery from './components/VenueGallery'
import WaitlistSection from './components/WaitlistSection'

function App() {
  return (
    <div className="w-full min-h-screen bg-black dark:bg-black">
      <Navbar />
      <AuroraBackground
        containerClassName="min-h-screen"
        className="mx-auto max-w-7xl"
        blur={100}
        intensity={15}
      >
        <Hero />
        <VenueGallery />
        <Features />
        <WaitlistSection />
        <BookingSection />
      </AuroraBackground>
      <FloatingNav />
      <Footer />
    </div>
  )
}

export default App 