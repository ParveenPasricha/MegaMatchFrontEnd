import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SuperAdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "superadmin@test.in" && password === "superadmin@test.in") {
      localStorage.setItem("authToken", "superadmin"); 
      console.log("Stored Token:", localStorage.getItem("authToken"));
  
      navigate("/SuperAdminDashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex w-3/4 max-w-4xl shadow-lg rounded-xl overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-gray-800 flex flex-col items-center justify-center p-10">
          <h1 className="text-white text-4xl font-bold">MegaMatches Co.</h1>
        </div>
        {/* Right Side */}
        <div className="w-1/2 bg-gray-700 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Welcome SuperAdmin
          </h2>
          <p className="text-gray-300 mb-6">Please login to Admin Dashboard.</p>
          {error && <p className="text-red-400 mb-3">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Username"
              className="w-full px-4 py-3 mb-3 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 mb-4 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>
          <p className="text-gray-300 text-sm mt-4 cursor-pointer hover:text-blue-400 transition">
            Forgotten Your Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
