import React from "react";

export default function FooterService({ onBook }) {
  return (
    <footer className="bg-cyan-900 text-white py-12 px-6 md:px-32 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Ready to Enjoy Hassle-Free Laundry?</h2>
          <p className="text-sm text-cyan-100">
            Schedule your pickup now or contact us to learn more about our services.
          </p>
        </div>
        <div>
          <button
            onClick={() => onBook("General Service")}
            className="bg-white text-cyan-700 font-semibold px-6 py-3 rounded-md hover:bg-cyan-100 transition duration-300"
          >
            Book a Service
          </button>
        </div>
      </div>
      <div className="border-t border-cyan-400 mt-10 pt-6 text-center text-sm text-cyan-100">
        &copy; 2025 Freshen Laundry Services. All rights reserved.
      </div>
    </footer>
  );
}
