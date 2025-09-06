import React from 'react'
import facebook from "../../assets/image/Footer/facebook.png"
import youtube from "../../assets/image/Footer/youtube.png"
import instagram from "../../assets/image/Footer/instagram.png"
import twitter from "../../assets/image/Footer/twitter.png"
import appstore from "../../assets/image/Footer/appstore.webp"
import playstore from "../../assets/image/Footer/playstore.webp"

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white px-5 md:px-32 py-10">
  <div className="grid grid-cols-2 md:flex md:justify-between gap-6">
    {/* Services */}
    <div>
      <h2 className="text-lg font-bold uppercase mb-2">Services</h2>
      <ul className="space-y-1 text-sm">
        <li className="hover:text-red-500 cursor-pointer">Washing</li>
        <li className="hover:text-red-500 cursor-pointer">Ironing</li>
        <li className="hover:text-red-500 cursor-pointer">Dry Cleaning</li>
        <li className="hover:text-red-500 cursor-pointer">Pickup & Delivery</li>
      </ul>
    </div>

    {/* Popular Cities */}
    <div>
      <h2 className="text-lg font-bold uppercase mb-2">Popular Cities</h2>
      <ul className="space-y-1 text-sm">
        <li className="hover:text-red-500 cursor-pointer">Mumbai</li>
        <li className="hover:text-red-500 cursor-pointer">Delhi</li>
        <li className="hover:text-red-500 cursor-pointer">Bhopal</li>
        <li className="hover:text-red-500 cursor-pointer">Indore</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h2 className="text-lg font-bold uppercase mb-2">Company</h2>
      <ul className="space-y-1 text-sm">
        <li className="hover:text-red-500 cursor-pointer">About Us</li>
        <li className="hover:text-red-500 cursor-pointer">Contact</li>
        <li className="hover:text-red-500 cursor-pointer">Careers</li>
      </ul>
    </div>

    {/* Follow Us */}
    <div>
      <h2 className="text-lg font-bold uppercase mb-3">Follow Us</h2>
      <div className="flex gap-4 mb-4">
        <img className="w-6 h-6 cursor-pointer" src={facebook} alt="Facebook" />
        <img className="w-6 h-6 cursor-pointer" src={instagram} alt="Instagram" />
        <img className="w-6 h-6 cursor-pointer" src={twitter} alt="Twitter" />
        <img className="w-6 h-6 cursor-pointer" src={youtube} alt="YouTube" />
      </div>
      <div className="space-y-2">
        <img
          className="h-10 rounded-sm w-auto"
          src={appstore}
          alt="App Store"
        />
        <img
          className="h-10 rounded-sm w-auto"
          src={playstore}
          alt="Play Store"
        />
      </div>
    </div>
  </div>

  {/* Bottom Info */}
  <div className="flex flex-col md:flex-row justify-between mt-10 text-sm border-t border-gray-600 pt-4">
    <div>&copy; 2025 LaundryMate. All rights reserved.</div>
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#" className="hover:text-red-500">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-red-500">
        Terms & Conditions
      </a>
      <a href="#" className="hover:text-red-500">
        Support
      </a>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer