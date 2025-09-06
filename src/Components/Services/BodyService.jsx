import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Wash & Fold',
    description: 'Basic washing, drying, and folding service for daily wear.',
    image: 'https://i.pinimg.com/originals/d2/cb/2c/d2cb2c66974f285c4ad943a0032a55a1.jpg'
  },
  {
    name: 'Wash & Iron',
    description: 'Washing followed by pressing (ironing) for neat finish.',
    image: 'https://salopsparkles.files.wordpress.com/2021/02/images-2021-02-05t205356.940.jpeg?w=738'
  },
  {
    name: 'Dry Cleaning',
    description: 'For delicate clothes like suits, sarees, blazers.',
    image: 'https://black-and-white.co.in/wp-content/uploads/2024/04/what-is-dry-cleaning.jpg'
  },
  {
    name: 'Steam Ironing',
    description: 'High-quality crease-free steam finish for garments.',
    image: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/13/980x490/landscape-1427642388-ironing-steam.jpg?resize=1200:*'
  },
  {
    name: 'Only Ironing',
    description: 'For clothes already washed at home, just need pressing.',
    image: 'https://www.cleanipedia.com/images/v2/480e8d2bfe631823e336426edf67e17c-1800w-1200h.jpg'
  }
];

const BodyService = () => {
  const [addmsg, setaddmsg] = useState(false);
  const [notadd, setnotadd] = useState(false);
  const [errormsg, seterrormsg] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const addstatus = params.get('status');

    if (addstatus === 'failed') {
      setnotadd(true);
    } else if (addstatus === 'success') {
      setaddmsg(true);
    } else if (addstatus === 'error') {
      seterrormsg(true);
    }
  }, []);

  return (
    <>
      {/* ✅ Success Modal */}
     {/* ✅ Success Modal */}
{addmsg && (
  <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
    <div className="bg-white/80 backdrop-blur-md border border-green-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-300 scale-100">
      <h2 className="text-2xl font-bold text-green-600 mb-2 animate-bounce">✅ Booking Successful!</h2>
      <p className="text-gray-700">Your service has been booked successfully.</p>
      <button
        onClick={() => {
          setaddmsg(false);
          window.history.replaceState({}, document.title, window.location.pathname);
        }}
        className="mt-4 bg-green-600 text-white cursor-pointer px-5 py-2 rounded-full hover:bg-green-700 transition duration-200"
      >
        OK
      </button>
    </div>
  </div>
)}

{/* ❌ Failed Modal */}
{notadd && (
  <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
    <div className="bg-white/80 backdrop-blur-md border border-red-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-300 scale-100">
      <h2 className="text-2xl font-bold text-red-600 mb-2 animate-bounce">❌ Booking Failed!</h2>
      <p className="text-gray-700">Please try again.</p>
      <button
        onClick={() => {
          setnotadd(false);
          window.history.replaceState({}, document.title, window.location.pathname);
        }}
        className="mt-4 bg-red-600 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-red-700 transition duration-200"
      >
        OK
      </button>
    </div>
  </div>
)}

{/* ⚠️ Error Modal */}
{errormsg && (
  <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
    <div className="bg-white/80 backdrop-blur-md border border-yellow-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-300 scale-100">
      <h2 className="text-2xl font-bold text-yellow-600 mb-2 animate-bounce">⚠️ Something went wrong!</h2>
      <p className="text-gray-700">An error occurred. Please try again later.</p>
      <button
        onClick={() => {
          seterrormsg(false);
          window.history.replaceState({}, document.title, window.location.pathname);
        }}
        className="mt-4 bg-yellow-600 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition duration-200"
      >
        OK
      </button>
    </div>
  </div>
)}


      {/* Service List */}
      <div className="p-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Why Choose Our Laundry Services?</h2>
          <p className="text-gray-600 text-lg">
            We offer professional laundry solutions that combine convenience, affordability, and sustainability.
            Whether you're a busy professional, a student, or a large family, we tailor our services to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-5" data-service={service.name}>
              <img src={service.image} alt={service.name} className="rounded-md mb-4 w-full h-40 object-cover" />
              <h2 className="text-xl font-semibold mb-1">{service.name}</h2>
              <p className="text-sm mb-4 text-gray-600">{service.description}</p>
              <Link to="/Booking_Register_Form">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
                  Place Order
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyService;
