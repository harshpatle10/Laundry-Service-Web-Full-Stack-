import React, { useState, useEffect } from 'react';

const LoginSignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  // To track login failed modal visibility separately
  const [showLoginFailedModal, setShowLoginFailedModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    const login = params.get('loginstatus');

    if (error === 'duplicate') {
      setShowEmailModal(true);
    }

    if (login === 'failed' || login === 'error') {
      setLoginStatus(login);
      setShowLoginFailedModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowEmailModal(false);
    window.history.replaceState({}, document.title, 'login'); // remove query params
  };

  const closeLoginFailedModal = () => {
    setShowLoginFailedModal(false);
    setLoginStatus('');
    window.history.replaceState({}, document.title, 'login'); // remove query params
  };

  return (
    <div className="bg-gray-300 font-sans bg-center bg-cover min-h-screen flex items-center justify-center">

      {/* Duplicate Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm">
            <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Email Already Registered!</h2>
            <p className="text-gray-700 mb-2">Please log in with your registered email.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Login Failed Modal */}
      {showLoginFailedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm relative">
            <button
              onClick={closeLoginFailedModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Registration Failed! Invalid Email / Password</h2>
            <p className="text-gray-700 mb-2">Please enter a valid email and password.</p>
            <button
              onClick={closeLoginFailedModal}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Main Box */}
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        {/* Tabs */}
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 text-center py-2 font-semibold border-b-2 ${
              isLogin ? 'border-blue-600 text-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-center py-2 font-semibold ${
              !isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {isLogin && (
          <form method="post" action="http://localhost:2025/Laundryservices/Loginservlet" className="space-y-4">
            <h2 className="text-xl font-bold text-gray-700">Welcome Back</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input type="text" name="nameemail" required className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input type="password" name="password" required className="w-full p-2 border rounded" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
        )}

        {/* Sign Up Form */}
        {!isLogin && (
          <form method="post" action="http://localhost:2025/Laundryservices/Signupservlet" className="space-y-4">
            <h2 className="text-xl font-bold text-gray-700">Create Account</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input type="text" name="name" required className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input type="email" name="email" required className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input type="password" name="password" required className="w-full p-2 border rounded" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 cursor-pointer rounded hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignUpForm;
