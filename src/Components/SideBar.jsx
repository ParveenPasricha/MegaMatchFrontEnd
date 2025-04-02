import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaChartBar, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Home", icon: <FaHome />, route: "/" },
  { id: 2, name: "Profile", icon: <FaUser />, route: "/login" },
  { id: 3, name: "Settings", icon: <FaCog />, route: "/login" },
  { id: 4, name: "Reports", icon: <FaChartBar />, route: "/login" },
  { id: 5, name: "Messages", icon: <FaEnvelope />, route: "/login" },
];

const SideBar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`bg-gray-900 text-white mt-25 fixed h-screen p-2 transition-all duration-300 left-0 top-0 z-50 hidden sm:flex flex-col ${
          isHovered ? "w-64" : "w-20"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className={`text-xl font-bold mb-5 text-center transition-all ${isHovered ? "opacity-100" : "opacity-0"}`}>
          Menu
        </h2>

        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(item.route)}
              className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer transition-all"
            >
              <button className="flex items-center w-full text-left">
                {item.icon}
                <span className={`ml-3 transition-all ${isHovered ? "opacity-100" : "opacity-0 w-0"}`}>
                  {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-gray-900 p-2 flex justify-around text-white z-50">
        {menuItems.map((item) => (
          <button key={item.id} onClick={() => navigate(item.route)} className="flex flex-col items-center text-sm">
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 bg-gray-900 text-white p-2 rounded-full z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-4 z-50 flex flex-col">
          <button className="self-end mb-4" onClick={() => setIsMobileOpen(false)}>
            <FaTimes size={24} />
          </button>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  navigate(item.route);
                  setIsMobileOpen(false);
                }}
                className="flex items-center p-3 hover:bg-gray-700 rounded-md cursor-pointer"
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
