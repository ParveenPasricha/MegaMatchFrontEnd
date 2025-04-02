import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { MdOutlineGTranslate } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Fetching...");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHindi, setIsHindi] = useState(true);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchLocation = (language) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=${language}`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              const city =
                data.address.city || data.address.town || (language === "hi,en" ? "अज्ञात स्थान" : "Unknown");
              setLocation(city);
            })
            .catch(() => setLocation(language === "hi,en" ? "स्थान नहीं मिला" : "Location not found"));
        },
        () => {
          setLocation(language === "hi,en" ? "अनुमति अस्वीकृत" : "Permission Denied");
        }
      );
    } else {
      setLocation(language === "hi,en" ? "समर्थित नहीं है" : "Not Supported");
    }
  };

  useEffect(() => {
    fetchLocation("hi,en");
  }, []);

  const toggleLanguage = () => {
    const newLanguage = isHindi ? "en" : "hi,en";
    setIsHindi(!isHindi);
    fetchLocation(newLanguage);
  };

  return (
    <nav className="bg-blue-500 sticky top-14 z-10 text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu />
        </button>

        <div className="flex items-center space-x-2 font-semibold">
          <span className="text-lg">
            <IoLocationSharp />
          </span>
          <span>{location}</span>
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          <MdOutlineGTranslate className="text-xl" />
          <span>{isHindi ? "Switch to English" : "हिंदी में बदलें"}</span>
        </button>
      </div>

      <div className={`md:flex md:items-center md:justify-between px-6 py-2 ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-row md:items-center space-x-6 text-sm font-semibold">
          <span onClick={() => navigate("/casino")} className="cursor-pointer hover:opacity-80">
            CASINO
          </span>
          <span onClick={() => navigate("/cricket")} className="cursor-pointer hover:opacity-80">
            CRICKET
          </span>
          <span onClick={() => navigate("/livescore")} className="cursor-pointer hover:opacity-80">
            Live Score
          </span>
          <span onClick={() => navigate("/ipl")} className="cursor-pointer hover:opacity-80">
            SPORTS
          </span>

          {/* Bonuses Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDropdown("bonuses");
              }}
              className="bg-red-600 px-3 py-1 rounded flex items-center space-x-1"
            >
              <span>🔥</span>
              <span>BONUSES</span>
              <span>▼</span>
            </button>
            {activeDropdown === "bonuses" && (
              <div className="absolute left-0 mt-2 bg-white text-black w-48 shadow-lg rounded-lg p-2 border border-gray-300">
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer">🔥 First Deposit</div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer">💰 Casino Cashback</div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer">🍒 Welcome Pack</div>
              </div>
            )}
          </div>

          {/* Megagames Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDropdown("megagames");
              }}
              className="cursor-pointer hover:opacity-80 flex items-center space-x-1"
            >
              <span>MEGAGAMES</span> <span>▼</span>
            </button>
            {activeDropdown === "megagames" && (
              <div className="absolute left-0 mt-2 bg-white text-black w-48 shadow-lg rounded-lg p-2 border border-gray-300">
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer">Crash</div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer">Crystal</div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer">Western Slot</div>
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDropdown("more");
              }}
              className="cursor-pointer hover:opacity-80 flex items-center space-x-1"
            >
              <span>MORE</span> <span>▼</span>
            </button>
            {activeDropdown === "more" && (
              <div className="absolute left-0 mt-2 bg-white text-black w-48 shadow-lg rounded-lg p-2 border border-gray-300">
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Virtual Sports</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Fast Bet</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Hunting & Fishing</div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer">Bingo</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
