import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:2025/Laundryservices/UserListServlet");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Error loading users:", err);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete user ID ${id}?`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:2025/Laundryservices/DeleteUserServlet?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("User deleted successfully.");
        setUsers((prev) => prev.filter((u) => u.id !== id));
      } else {
        alert("Failed to delete user.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred while deleting.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen font-sans">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading users...</p>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
        <Link to="/AdminDashboard" className="text-blue-600 font-semibold">
          &larr; Dashboard
        </Link>
        
        <h1 className="text-xl font-bold text-gray-800">User Details</h1>
        <div></div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">All Sign Up Users</h2>

        {users.length === 0 && !loading ? (
          <div className="p-4 text-red-500 bg-white shadow rounded-md text-center">
            No users found or failed to load users.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Password</th>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Created</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, index) => (
                  <motion.tr
                    key={u.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-blue-50 border-b transition-all duration-200"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{u.name}</td>
                    <td className="px-4 py-2">{u.email}</td>
                    <td className="px-4 py-2">••••••••</td> {/* Masked password */}
                    <td className="px-4 py-2">{u.id}</td>
                    <td className="px-4 py-2">{u.date}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(u.id)}
                        className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded shadow-md transition"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default UsersPage;
