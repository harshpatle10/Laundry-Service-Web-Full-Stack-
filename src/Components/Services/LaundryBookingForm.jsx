import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import for navigation

const LaundryBookingForm = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    pickup_date: '',
    weight: '',
    payment: '',
  });

  const [showModal, setShowModal] = useState(false);

  const rates = {
    'Wash & Fold': 30,
    'Wash & Iron': 40,
    'Dry Cleaning': 60,
    'Steam Ironing': 35,
    'Only Ironing': 20,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (name === 'weight' || name === 'service') {
      const weight = parseFloat(name === 'weight' ? value : formData.weight);
      const service = name === 'service' ? value : formData.service;

      if (weight > 0 && service && rates[service]) {
        updatedData.payment = (rates[service] * weight).toFixed(2);
      } else {
        updatedData.payment = '';
      }
    }

    setFormData(updatedData);
  };

  // On submit, open modal instead of submitting form directly
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  // Confirm button in modal -> close modal and navigate to /Service
  const confirmBooking = () => {
    setShowModal(false);
    navigate('/Service'); // Redirect to Service page
  };

  // Cancel button in modal -> just close modal
  const cancelBooking = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl"
        action="http://localhost:2025/Laundryservices/Registerservlet"  // Handle submit with our function
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Laundry Service Booking
        </h2>

        <div className="flex gap-10 bg-gray-200 p-6 border rounded">
          <div className="w-1/2">
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full p-2 border rounded mb-4"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold">Mobile Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="+919876543210"
              pattern="[+0-9\s\-]{10,15}"
              className="w-full p-2 border rounded mb-4"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="w-full p-2 border rounded mb-4"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold">Address</label>
            <textarea
              name="address"
              rows="3"
              placeholder="Your address"
              className="w-full p-2 border rounded mb-4"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="w-1/2">
            <label className="block mb-2 font-semibold">Select Service</label>
            <select
              name="service"
              className="w-full p-2 border rounded mb-4"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              {Object.keys(rates).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <label className="block mb-2 font-semibold">
              Preferred Pickup Date
            </label>
            <input
              name="pickup_date"
              type="date"
              className="w-full p-2 border rounded mb-4"
              value={formData.pickup_date}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold">Weight (kg)</label>
            <input
              name="weight"
              type="number"
              min="1"
              step="0.1"
              placeholder="Enter weight in kg"
              className="w-full p-2 border rounded mb-6"
              value={formData.weight}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold">
              Estimated Payment (₹)
            </label>
            <input
              name="payment"
              type="number"
              readOnly
              placeholder="Calculated automatically"
              className="w-full p-2 border rounded mb-6"
              value={formData.payment}
            />

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book Service
            </button>
          </div>
        </div>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center">
              Confirm Your Booking
            </h3>
            <div className="mb-6 text-gray-700 space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Mobile:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Service:</strong> {formData.service}</p>
              <p><strong>Pickup Date:</strong> {formData.pickup_date}</p>
              <p><strong>Weight (kg):</strong> {formData.weight}</p>
              <p><strong>Estimated Payment:</strong> ₹{formData.payment}</p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded font-semibold"
                onClick={confirmBooking}
              >
                Confirm
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-semibold"
                onClick={cancelBooking}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaundryBookingForm;
