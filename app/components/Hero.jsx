"use client"
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-gray-500 to-gray-100 py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      {/* Left Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 py-20">BlackGears Technology</h1>
        <p className="text-gray-600 mt-4">
          Etiam in dolor non eros euismod tincidunt. Proin venenatis tellus a risus efficitur gravida non non lacus.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/contact">
            <button className="px-6 py-3 bg-[#2e2e2e] text-white rounded-md hover:bg-[#434343]">
              Contact Us Now
            </button>
          </Link>
          <button className="px-6 py-3 rounded-md hover:bg-[#434343] bg-[#2e2e2e]">
            Play Video
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img src="/hero-image.png" alt="Hero Image" className="max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
  )
}

export default Hero