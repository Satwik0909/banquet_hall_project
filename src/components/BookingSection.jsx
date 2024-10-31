import React from 'react'

const BookingSection = () => {
  return (
    <section id="booking" className="px-4 py-20">
      <div className="max-w-3xl p-8 mx-auto rounded-lg bg-black/50 backdrop-blur-sm">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">Book Your Event</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 text-white border border-gray-700 rounded-lg bg-black/50"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-white border border-gray-700 rounded-lg bg-black/50"
            />
            <input
              type="date"
              className="w-full px-4 py-2 text-white border border-gray-700 rounded-lg bg-black/50"
            />
            <select className="w-full px-4 py-2 text-white border border-gray-700 rounded-lg bg-black/50">
              <option value="">Select Venue</option>
              <option value="grand">Grand Ballroom</option>
              <option value="crystal">Crystal Hall</option>
              <option value="garden">Garden Terrace</option>
            </select>
          </div>
          <textarea
            placeholder="Additional Requirements"
            rows="4"
            className="w-full px-4 py-2 text-white border border-gray-700 rounded-lg bg-black/50"
          ></textarea>
          <button className="w-full py-3 font-semibold text-black transition bg-white rounded-lg hover:bg-opacity-90">
            Submit Booking Request
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingSection 