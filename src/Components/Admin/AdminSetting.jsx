import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSetting = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  // Show loader initially
  useEffect(() => {
    const timer = setTimeout(() => setLoaderVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const opStatus = urlParams.get('status'); // e.g., status=email-updated

    if (opStatus) {
      setStatus(opStatus);
    }
  }, []);

  const statusMessages = {
    "email-updated": {
      title: "✅ Email Updated",
      message: "Your email has been successfully updated.",
      color: "green",
    },
    "email-failed": {
      title: "❌ Email Update Failed",
      message: "Unable to update your email. Please try again.",
      color: "red",
    },
    "name-updated": {
      title: "✅ Name Updated",
      message: "Your name has been successfully updated.",
      color: "green",
    },
    "password-updated": {
      title: "✅ Password Changed",
      message: "Your password has been successfully changed.",
      color: "green",
    },
    "url-updated": {
      title: "✅ URL Updated",
      message: "Your profile URL has been successfully updated.",
      color: "green",
    },
    "unexpected-error": {
      title: "⚠️ Something went wrong!",
      message: "An unexpected error occurred. Please try again later.",
      color: "yellow",
    },
  };

  // Logout handler example
  const handleLogout = () => {
    // Clear any auth tokens or session storage if applicable
    // localStorage.removeItem('authToken');
    // Then navigate to login page or landing page
    navigate('/login');
  };

  return (
    <>
      {status && statusMessages[status] && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 animate-fadeIn">
          <div
            className={`bg-white/90 backdrop-blur-md border border-${statusMessages[status].color}-300 p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full`}
          >
            <h2
              className={`text-2xl font-bold text-${statusMessages[status].color}-600 mb-3 animate-bounce`}
            >
              {statusMessages[status].title}
            </h2>
            <p className="text-gray-700">{statusMessages[status].message}</p>
            <button
              onClick={() => {
                setStatus(null);
                window.history.replaceState({}, document.title, window.location.pathname);
              }}
              className={`mt-5 bg-${statusMessages[status].color}-600 text-white px-6 py-2 rounded-full hover:bg-${statusMessages[status].color}-700 transition`}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen font-sans">
        {/* Loader */}
        {loaderVisible && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        )}

        {/* Header */}
        <header className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
          <h1 className="text-xl font-bold tracking-wide">Admin Settings</h1>
          <div className="flex gap-3 items-center">
            <Link to="/AdminDashboard">
              <button className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md transition">
                ← Back to Dashboard
              </button>
            </Link>
            <Link to="/">
            <button
              onClick={handleLogout}
              className="bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-2 rounded-md transition text-white font-semibold"
              title="Logout"
              >
              Logout
            </button>
              </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto mt-12 max-w-4xl bg-white px-12 py-12 rounded-lg shadow-xl space-y-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Welcome to the Admin Settings
          </h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            Manage your account settings below. Choose an option to get started.
          </p>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {['profile', 'password', 'nameChange', 'profileUrl'].map((section) => {
              const labels = {
                profile: 'Change Email',
                password: 'Change Password',
                nameChange: 'Change Name',
                profileUrl: 'Update Profile URL',
              };
              const colors = {
                profile: 'blue',
                password: 'green',
                nameChange: 'purple',
                profileUrl: 'indigo',
              };
              return (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`bg-${colors[section]}-600 hover:bg-${colors[section]}-700 text-white px-6 py-3 rounded-lg shadow-md transition font-medium`}
                >
                  {labels[section]}
                </button>
              );
            })}
          </div>

          {/* Forms Section */}
          <div className="flex justify-center items-center gap-8">
            {/* Change Email */}
            {activeSection === 'profile' && (
              <form
                action="http://localhost:2025/Laundryservices/EmailChangeServlet"
                method="post"
                className="flex flex-col gap-6 max-w-lg w-full"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    New Email
                  </label>
                  <input
                    name="newemail"
                    type="email"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    placeholder="yournewemail@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Current Password
                  </label>
                  <input
                    name="currpass"
                    type="password"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                    placeholder="Enter current password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
                >
                  Update Email
                </button>
              </form>
            )}

            {/* Change Password */}
            {activeSection === 'password' && (
              <form
                action="http://localhost:2025/Laundryservices/PasswordChangeServlet"
                method="post"
                className="flex flex-col gap-6 max-w-lg w-full"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Current Password
                  </label>
                  <input
                    name="currpass"
                    type="password"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    New Password
                  </label>
                  <input
                    name="newpass"
                    type="password"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                    placeholder="Enter new password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
                >
                  Change Password
                </button>
              </form>
            )}

            {/* Change Name */}
            {activeSection === 'nameChange' && (
              <form
                action="http://localhost:2025/Laundryservices/NameChangeServlet"
                method="post"
                className="flex flex-col gap-6 max-w-lg w-full"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    New Name
                  </label>
                  <input
                    name="newname"
                    type="text"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    placeholder="Enter new name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Current Password
                  </label>
                  <input
                    name="currpass"
                    type="password"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                    placeholder="Enter current password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold shadow-md"
                >
                  Update Name
                </button>
              </form>
            )}

            {/* Update URL */}
            {activeSection === 'profileUrl' && (
              <form
                action="http://localhost:2025/Laundryservices/UrlChangeServlet"
                method="post"
                className="flex flex-col gap-6 max-w-lg w-full"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    New Profile URL
                  </label>
                  <input
                    name="newurl"
                    type="url"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="https://example.com/profile"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Current Password
                  </label>
                  <input
                    name="currpass"
                    type="password"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    placeholder="Enter current password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md"
                >
                  Update URL
                </button>
              </form>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminSetting;
