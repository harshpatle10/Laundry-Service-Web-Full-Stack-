import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainContent() {
  const [loading, setLoading] = useState(true);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Loader hide after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle modals based on URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("signup") === "success") {
      setSignupModalOpen(true);
    }
    if (params.get("loginstatus") === "loginsuccess") {
      setLoginModalOpen(true);
    }
  }, []);

  const closeSignupModal = () => {
    setSignupModalOpen(false);
    window.history.replaceState({}, document.title, "index.html");
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
    window.history.replaceState({}, document.title, "index.html");
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      {/* Signup Modal */}
      {signupModalOpen && (
        <div
          id="signupModal"
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center"
          onClick={(e) => {
            if (e.target.id === "signupModal") closeSignupModal();
          }}
        >
          <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md animate-fade-in">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              🎉 Thank You for Signing Up!
            </h1>
            <p className="text-gray-700 mb-2">
              Your account has been successfully created.
            </p>
            <p className="text-gray-600 mb-4">Welcome to our platform!</p>
            <button
              onClick={closeSignupModal}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginModalOpen && (
        <div
          id="loginModal"
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex items-center justify-center"
          onClick={(e) => {
            if (e.target.id === "loginModal") closeLoginModal();
          }}
        >
          <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md animate-fade-in">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              🎉 Thank You for Logging In!
            </h1>
            <p className="text-gray-700 mb-2">
              Your account has been logged in successfully.
            </p>
            <p className="text-gray-600 mb-4">Welcome back to our platform!</p>
            <button
              onClick={closeLoginModal}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main>
        <div
          className="relative h-[100vh] w-full bg-cover bg-center flex items-center px-32"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/laundry-service-background-flat-design_98292-23487.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <div className="w-1/2 z-10 relative">
            <h1 className="text-5xl font-bold py-2 text-white">
              Experience Ultimate Cleanliness
            </h1>
            <div className="w-20 border-b-2 border-yellow-500 mb-5"></div>
            <p className="text-lg text-white mb-4">
              Discover our professional cleaning services that make your space
              shine bright and fresh.
            </p>
            <Link to="/Service">
              <button className="bg-yellow-500 cursor-pointer px-10 py-3 rounded-lg font-semibold text-black hover:bg-yellow-600 transition">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Centered Video Button */}
      <div className="flex justify-center bg-gray-200 items-center py-20">
        <button
          id="openModalBtn"
          onClick={() => setVideoModalOpen(true)}
          className="bg-white p-4 rounded-full hover:cursor-pointer shadow-xl hover:scale-105 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-orange-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          id="orderModal"
          className="fixed inset-0 bg-transparant backdrop-blur-md  bg-opacity-60 z-50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "orderModal") closeVideoModal();
          }}
        >
          <div className="relative p-4">
            <div className="flex justify-end">
              <button
                id="cancelBtn"
                onClick={closeVideoModal}
                className="absolute top-0 right-0 hover:cursor-pointer text-3xl text-white hover:text-red-500 z-10"
              >
                ✖
              </button>
            </div>
            <video
              className="w-[80vw] max-w-5xl h-[60vh] rounded-lg shadow-lg"
              src="https://videos.pexels.com/video-files/8756812/8756812-uhd_2732_1440_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
            ></video>
          </div>
        </div>
      )}
    </>
  );
}
