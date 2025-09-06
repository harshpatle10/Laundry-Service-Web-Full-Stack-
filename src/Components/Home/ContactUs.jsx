import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [sendcon, setsendcon] = useState(false);
  const [notsendcon, setnotsendcon] = useState(false);
  const [errorsendcon, seterrorsendcon] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const statuscon = urlParams.get('constatus');

    if (statuscon === 'sendcon') {
      setsendcon(true);
    } else if (statuscon === 'notsendcon') {
      setnotsendcon(true);
    } else if (statuscon === 'errorsendcon') {
      seterrorsendcon(true);
    }
  }, []);

  const closeModal = (setter) => {
    setter(false);
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <>
      {/* ✅ Contact Sent */}
      {sendcon && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-md border border-green-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold text-green-600 mb-2 animate-bounce">
              ✅ Message Sent!
            </h2>
            <p className="text-gray-700">Thank you for contacting us.</p>
            <button
              onClick={() => closeModal(setsendcon)}
              className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ❌ Message Failed */}
      {notsendcon && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-md border border-red-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-2 animate-bounce">
              ❌ Failed to Send!
            </h2>
            <p className="text-gray-700">Unable to send your message. Please try again.</p>
            <button
              onClick={() => closeModal(setnotsendcon)}
              className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ⚠️ Error */}
      {errorsendcon && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-md border border-yellow-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold text-yellow-600 mb-2 animate-bounce">
              ⚠️ Something went wrong!
            </h2>
            <p className="text-gray-700">An unexpected error occurred. Please try again later.</p>
            <button
              onClick={() => closeModal(seterrorsendcon)}
              className="mt-4 bg-yellow-600 text-white px-5 py-2 rounded-full hover:bg-yellow-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ... your header, form, and map remain unchanged */}



    <header id="contact" className="bg-gray-100 px-32 text-black py-6 shadow-md">
  <h1 className="text-3xl font-bold">Contact Us</h1>
</header>

{/* Main Section */}
<section className="flex flex-col md:flex-row gap-6 px-6 md:px-20 py-10">

  {/* Left: Contact Form */}
  <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/2">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">Request a Service</h2>
    <form action="http://localhost:2025/Laundryservices/Contactservlet" className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        required
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="number"
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

      <button
        type="submit"
        className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>

  {/* Right: Embedded Google Map */}
  <div className="w-full md:w-1/2 rounded-md overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.24805914007!2d77.4469210597192!3d23.235017015071214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4306c84d1c3f%3A0xd53bb676c196c6b5!2sIndrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715923803453!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ minHeight: "500px", border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>

</section>

</>
);
};

export default ContactUs;
 