import React, { useEffect, useState } from 'react';

const LoginAdmin = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const adminData = params.get('admindata');
    if (adminData === 'failed') {
      setShowError(true);
    }
  }, []);

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <form action="http://localhost:2025/Laundryservices/AdminLogin" method="post">
          {showError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center font-medium">
              ⚠️ Login failed. Please try again.
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
