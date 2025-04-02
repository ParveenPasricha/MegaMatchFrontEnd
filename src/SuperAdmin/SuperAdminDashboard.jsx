import { useState, useEffect } from "react";
import React from "react";

export default function SuperAdminDashboard() {
  const [users, setUsers] = useState([]);
  const [coins, setCoins] = useState(0);
  const [balance, setBalance] = useState(0); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchBalance();
  }, []);

  // ✅ Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch Admin Balance
  const fetchBalance = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/balance", {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      if (response.ok) {
        setBalance(data.balance);
      } else {
        console.error("Error fetching balance:", data.message);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div className="min-h-screen ml-28 bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Super Admin Dashboard</h2>

      {loading && <p className="text-center text-blue-500">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile & Balance Section */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Admin Profile</h3>
          <p>Name: Super Admin</p>
          <p>Email: admin@example.com</p>
          <p className="text-green-600 font-semibold">Balance: {balance} Coins</p>
        </div>

        {/* User Balance Table */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">All Users Balance</h3>
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">User Name</th>
                <th className="border px-4 py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.coins} Coins</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
