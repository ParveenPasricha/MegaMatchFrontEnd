import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }
    setErrors(newErrors);

    if (!valid) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    return valid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (validate()) {
        // API से user authentication और role fetch करो
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("role", data.user.role); // User role store करें
          
          alert("Login successful!");
          
          // Role Check
          if (data.user.role === "superAdmin") {
            navigate("/superadmindashboard");
          } else {
            navigate("/cricket");
          }
        } else {
          alert(data.message || "Login failed!");
        }
      }
    } catch (error) {
      console.log("Error checking user:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
      <motion.div
        animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
        className="bg-white bg-opacity-10 backdrop-blur-2xl shadow-2xl p-8 rounded-2xl w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center mb-6  drop-shadow-md">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="">
            <h2>Enter Your Email </h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 focus:bg-opacity-70 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 peer"
              placeholder="Email"
            />
            
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="relative">
            Enter Your Password
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 focus:bg-opacity-70 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 peer"
              placeholder="Password"
            />
            
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 mt-6 right-3 flex items-center text-gray-300 hover:text-blue-300 transition duration-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg text-white font-bold transition-all duration-500 shadow-lg"
          >
            Login
          </motion.button>
        </form>
        <p className="text-center text-sm mt-6 text-blue-800">
          Don't have an account?{" "}
          <span onClick={()=>navigate('/signup')} className="text-white cursor-pointer p-2 bg-red-700 ">Sign up</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
