import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Navigation ke liye

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
    role: "user", // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 **Step 1: Check Email & Send OTP**
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response =await fetch("http://localhost:5000/api/auth/sendotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("OTP sent to your email!");
        setStep(2); // Move to OTP input step
      } else {
        alert(data.message);
        if (data.message === "User already registered!") {
          navigate("/login"); // Agar user exist karta hai toh login page pe le jao
        }
      }
    } catch (error) {
      setLoading(false);
      alert("Failed to send OTP");
      console.log(error)
    }
  };

  // 🔹 **Step 2: Verify OTP**
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/verifyotp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, otp: formData.otp }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("OTP Verified Successfully! Continue Registration.");
        setStep(3);
      } else {
        alert(data.message);
      }
    } catch (error) {
      setLoading(false);
      alert("Failed to verify OTP");
    }
  };

  // 🔹 **Step 3: Complete Registration**
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("Account Created Successfully! You can now login.");
        navigate("/login"); // Redirect to login page after successful signup
      } else {
        alert(data.message);
      }
    } catch (error) {
      setLoading(false);
      alert("Failed to complete signup");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {step === 3 ? "Complete Your Signup" : "Sign Up"}
        </h2>

        <form
          onSubmit={
            step === 1
              ? handleEmailSubmit
              : step === 2
              ? handleVerifyOTP
              : handleSignup
          }
          className="space-y-4"
        >
          {/* 🔹 Step 1: Enter Email */}
          {step === 1 && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </>
          )}

          {/* 🔹 Step 2: Enter OTP */}
          {step === 2 && (
            <>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </>
          )}

          {/* 🔹 Step 3: Complete Signup */}
          {step === 3 && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full p-3 border rounded bg-gray-100"
              />
              <input
                type="text"
                name="otp"
                value={formData.otp}
                disabled
                className="w-full p-3 border rounded bg-gray-100"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />

              {/* Role Selection */}
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              >
                <option value="user">User</option>
                {/* <option value="agent">Agent</option> */}
                {/* <option value="admin">Admin</option> */}
              </select>
            </>
          )}

          {/* 🔹 Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white ${
              loading
                ? "bg-gray-400"
                : step === 1
                ? "bg-blue-500 hover:bg-blue-600"
                : step === 2
                ? "bg-green-500 hover:bg-green-600"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : step === 1
              ? "Send OTP"
              : step === 2
              ? "Verify OTP"
              : "Sign Up"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
