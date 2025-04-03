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
                data.address.city ||
                data.address.town ||
                (language === "hi,en" ? "अज्ञात स्थान" : "Unknown");
              setLocation(city);
            })
            .catch(() =>
              setLocation(
                language === "hi,en" ? "स्थान नहीं मिला" : "Location not found"
              )
            );
        },
        () => {
          setLocation(
            language === "hi,en" ? "अनुमति अस्वीकृत" : "Permission Denied"
          );
        }
      );
    } else {
      setLocation(language === "hi,en" ? "समर्थित नहीं है" : "Not Supported");
    }
  };

  useEffect(() => {
    fetchLocation("hi,en"); // Default Hindi location fetch
  }, []);

  const toggleLanguage = () => {
    const newLanguage = isHindi ? "en" : "hi,en";
    setIsHindi(!isHindi);
    fetchLocation(newLanguage);
  };

  return (
    <nav className="bg-blue-500 sticky top-14 z-50 text-white">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>

        {/* Location */}
        <div className="flex items-center mx-15 space-x-2 font-semibold">
          <span className="text-lg">
            <IoLocationSharp />
          </span>
          <span>{location}</span>
        </div>

        {/* Toggle Language Button */}
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-700 transition duration-200"
        >
          <MdOutlineGTranslate className="text-xl" />
          <span>{isHindi ? "Switch to English" : "हिंदी में बदलें"}</span>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex relative md:items-center md:justify-between px-6 py-2 ${
          menuOpen ? "block" : "hidden"
        } md:flex-row md:flex-wrap overflow-x-auto whitespace-nowrap`}
      >
        <div className="flex lg:ml-28 flex-row md:items-center space-x-6 text-sm font-semibold">
          <span
            onClick={() => navigate("/cricket")}
            className="cursor-pointer hover:opacity-80"
          >
            CRICKET
          </span>
          <span
            onClick={() => navigate("/livescore")}
            className="cursor-pointer hover:opacity-80"
          >
            Live Score
          </span>
          <span
            onClick={() => navigate("/ipl")}
            className="cursor-pointer hover:opacity-80"
          >
            SPORTS
          </span>
          <span
            onClick={() => navigate("/todaymatches")}
            className="cursor-pointer hover:opacity-80"
          >
            Today Matches
          </span>

          {/* Bonuses Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDropdown("bonuses");
              }}
              className="bg-red-600 relative px-3 py-1 rounded flex items-center space-x-1"
            >
              <span>🔥</span>
              <span>BONUSES</span>
              <span>▼</span>
            </button>
            {activeDropdown === "bonuses" && (
              <div className="fixed top-36 mx-32 transform -translate-x-1/2 bg-white text-black w-48 shadow-lg rounded-lg p-2 border border-gray-300 z-[9999]">
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={()=> navigate('/firstdeposit')}>
                  🔥 First Deposit
                </div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={()=> navigate('/casinocashback')}>
                  💰 Casino Cashback
                </div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={()=> navigate('/pack')}>
                  🍒 Welcome Pack
                </div>
              </div>
            )}
          </div>
          {/* MegaGames DropDown */}
          <div className="relative dropdown-container">
            <button
              onClick={(e) =>{ 
                e.stopPropagation()
                handleDropdown("megagames")
              }}
              className="bg-red-600 relative px-3 py-1 rounded flex items-center space-x-1"
            >
              <span>MEGAGAMES</span> <span>▼</span>
            </button>
            {activeDropdown === "megagames" && (
              <div className="fixed top-36 mx-32 transform -translate-x-1/2 bg-white text-black w-48 shadow-lg rounded-lg p-2 border border-gray-300 z-[9999]">
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={()=> navigate('/crash')}>
                  Crash
                </div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={()=> navigate('/crystal')}>
                  Crystal
                </div>
                <div className="hover:bg-gray-200 p-2 rounded cursor-pointer" onClick={()=> navigate('/westernslot')}>
                  Western Slot
                </div>
              </div>
            )}
          </div>
          {/* More Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={(e) => {
                e.stopPropagation() 
                handleDropdown("more")}}
              className="bg-red-600 relative px-3 py-1 rounded flex items-center space-x-1"
            >
              <span>MORE</span> <span>▼</span>
            </button>
            {activeDropdown === "more" && (
              <div className="fixed top-36 mx-32 transform -translate-x-1/2 bg-white text-black w-48 shadow-lg rounded-lg p-2 border border-gray-300 z-[9999]">
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer" onClick={()=> navigate('/ipl')}>
                  Virtual Sports
                </div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer" onClick={()=> navigate('/fastbet')}>
                  Fast Bet
                </div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer" onClick={()=> navigate('/fishing')}>
                  Hunting & Fishing
                </div>
                <div className="hover:bg-gray-100 p-2 rounded cursor-pointer" onClick={()=> navigate('/bingo')}>
                  Bingo
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
