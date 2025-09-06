import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState({ name: "Admin", url: "https://i.pravatar.cc/40" });
  const [orders, setOrders] = useState([]);
  const [overview, setOverview] = useState({
    totalusers: "Loading...",
    totalorders: "Loading...",
    totalrevenue: "Loading...",
    totalweight: "Loading...",
  });
  const [showFullOrders, setShowFullOrders] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch admin details on mount
  useEffect(() => {
    fetch("http://localhost:2025/Laundryservices/AdminAllDetailsServlet")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setAdmin({ name: data[0].name, url: data[0].url });
        }
      })
      .catch(console.error);
  }, []);

  // Fetch overview and recent orders on mount or dashboard switch
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch overview data
        const overviewRes = await fetch("http://localhost:2025/Laundryservices/Deshboardrecordservlet");
        if (!overviewRes.ok) throw new Error("Failed to fetch overview data");
        const overviewData = await overviewRes.json();
        setOverview({
          totalusers: overviewData.users || 0,
          totalorders: overviewData.orders || 0,
          totalrevenue: overviewData.revenue || 0,
          totalweight: overviewData.weight || 0,
        });

        // Fetch orders data
        const ordersRes = await fetch("http://localhost:2025/Laundryservices/Ordersdetailsservlet");
        if (!ordersRes.ok) throw new Error("Failed to fetch orders data");
        const ordersData = await ordersRes.json();
        setOrders(ordersData.Allorders || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Fetch full orders details on "Orders" link click
  const handleShowFullOrders = async () => {
    setShowFullOrders(true);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:2025/Laundryservices/Ordersdetailsservlet");
      if (!res.ok) throw new Error("Failed to fetch full orders");
      const data = await res.json();
      setOrders(data.Allorders || []);
    } catch (error) {
      console.error(error);
      setOrders([]);
    }
    setLoading(false);
  };

  // Handle delete order
  const handleDeleteOrder = async (id) => {
    if (!window.confirm(`Are you sure you want to delete order #${id}?`)) return;
    try {
      const res = await fetch(`http://localhost:2025/Laundryservices/DeleteOrderServlet?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete order");
      setOrders((prev) => prev.filter((order) => order.id !== id));
      alert("Order deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete order.");
    }
  };

  // Handle dashboard view (reset)
  const handleShowDashboard = () => {
    setShowFullOrders(false);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 shadow-md bg-cyan-900">
        <div className="p-6 text-white text-xl font-bold">Admin Panel</div>
        <nav className="mt-6">
          <Link to="/AdminDashboard">
          <button
            onClick={handleShowDashboard}
            className={`block w-full text-left py-2 px-6 ${
              !showFullOrders
              ? "text-black bg-blue-100"
              : "text-white hover:text-black hover:bg-blue-100"
            }`}
            >
            Dashboard
          </button>
            </Link>

          <button
            onClick={handleShowFullOrders}
            className={`block w-full text-left py-2 px-6 ${
              showFullOrders
                ? "text-black bg-blue-100"
                : "text-white hover:text-black hover:bg-blue-100"
            }`}
          >
            Orders
          </button>
          <Link to="/UserPage"  className="block py-2 px-6 text-white hover:text-black hover:bg-blue-100" >
          <button
            >
            Users
          </button>
            </Link>

            <Link to="/AdminSetting" className="block py-2 px-6 text-white hover:text-black hover:bg-blue-100" >
          <button
            >
            Settings
          </button>
            </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-gray-200 shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span id="admin_name" className="text-gray-600">
              {admin.name}
            </span>
            <button className="cursor-pointer" onClick={() => setModalOpen(true)}>
              <img
                id="admin_img"
                src={admin.url}
                alt="avatar"
                className="rounded-full w-8 h-8"
              />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 overflow-auto">
          {!showFullOrders && (
            <div
              id="overviewCards"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-gray-600 text-sm">Users</h2>
                <p id="totalusers" className="text-2xl font-bold">
                  {overview.totalusers}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-gray-600 text-sm">Orders</h2>
                <p id="totalorders" className="text-2xl font-bold">
                  {overview.totalorders}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-gray-600 text-sm">Revenue</h2>
                <p id="totalrevenue" className="text-2xl font-bold">
                  ₹{overview.totalrevenue}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-gray-600 text-sm">Wash Clothes (KG)</h2>
                <p id="totalweight" className="text-2xl font-bold">
                  {overview.totalweight}
                </p>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3
              id="ordersTitle"
              className="text-lg font-semibold text-gray-700 mb-4"
            >
              {showFullOrders ? "All Orders Full Details" : "Recent Orders"}
            </h3>
            <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-blue-100 text-gray-600 text-left">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                  {showFullOrders && (
                    <>
                      <th className="p-4">Date</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Address</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Action</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody id="orderTableBody">
                {orders.length === 0 && (
                  <tr>
                    <td
                      colSpan={showFullOrders ? 9 : 4}
                      className="p-4 text-center text-gray-500"
                    >
                      No orders found.
                    </td>
                  </tr>
                )}
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="p-4">#{order.id}</td>
                    <td className="p-4">{order.customer}</td>
                    <td className="p-4">₹{order.amount}</td>
                    <td className="p-4">{order.status}</td>
                    {showFullOrders && (
                      <>
                        <td className="p-4">{order.date}</td>
                        <td className="p-4">{order.email}</td>
                        <td className="p-4">{order.address}</td>
                        <td className="p-4">{order.service}</td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDeleteOrder(order.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Modal */}
      {modalOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-transparent z-50"
    onClick={() => setModalOpen(false)}
  >
    <div
      className="relative bg-white rounded-lg p-6 w-96 shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Cross (X) Button in top-right */}
      <button
        onClick={() => setModalOpen(false)}
        className="absolute cursor-pointer top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
      >
        &times;
      </button>

      <h2 className="text-xl font-semibold mb-4 text-center">Admin Profile</h2>
      <img
        src={admin.url}
        alt="Admin avatar"
        className="rounded-full w-32 h-32 mx-auto mb-4"
      />
      <p className="text-center text-lg font-medium">{admin.name}</p>
    </div>
  </div>
)}

    </div>
  );
}
