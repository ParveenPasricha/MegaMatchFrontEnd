import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "./Redux/authSlice"
import { Menu, X, Gift, Film, Flame } from "lucide-react"
import React from "react"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token")
  const [currentUser, setCurrentUser] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const user = useSelector((state) => state.auth.user)
  console.log("Redux user:", user)
  
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    setCurrentUser(user)
    console.log(token)
  }, [user, token])

  const handleLogout = () => {
    dispatch(logout())
    sessionStorage.clear()
    navigate("/login")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-gray-900 text-white z-50 sticky top-0 w-full">
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between px-4 py-3 md:py-2 relative">
        {/* Left Side - Logo and Hamburger */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="mr-4 md:hidden focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
          <div onClick={() => handleNavigation("/")} className="text-xl font-bold cursor-pointer flex items-center">
          NO1X<span className="text-blue-500">BET</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-6 h-4 cursor-pointer" />
          <div
            onClick={() => handleNavigation("/reel")}
            className="cursor-pointer hover:text-blue-400 transition-colors"
          >
            <Film className="w-5 h-5" />
          </div>
          <button
            onClick={() => handleNavigation("/hot")}
            className="bg-red-600 px-3 py-1 text-sm rounded cursor-pointer hover:bg-red-700 transition-colors"
          >
            HOT
          </button>
          <div
            onClick={() => handleNavigation("/livematch")}
            className="cursor-pointer hover:text-blue-400 transition-colors"
          >
            <Flame className="w-5 h-5" />
          </div>
        </div>

        {/* Right Side - Buttons and Icons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <button
            onClick={() => handleNavigation("/cricketgame")}
            className="relative bg-gray-700 px-2 py-1 md:px-3 md:py-1 rounded cursor-pointer hover:bg-gray-600 transition-colors"
            aria-label="Gift"
          >
            <Gift className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </button>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700 transition-colors text-sm md:text-base"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center space-x-2 md:space-x-3">
              <button
                onClick={() => handleNavigation("/signup")}
                className="bg-red-600 px-2 py-1 md:px-4 md:py-2 rounded cursor-pointer hover:bg-red-700 transition-colors text-xs md:text-base"
              >
                REGISTRATION
              </button>
              <button
                onClick={() => handleNavigation("/login")}
                className="bg-gray-700 px-2 py-1 md:px-4 md:py-2 rounded cursor-pointer hover:bg-gray-600 transition-colors text-xs md:text-base"
              >
                LOG IN
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden pt-16`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-4 py-6 space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="text-xl font-semibold border-b border-gray-700 pb-2">Navigation</div>

            <div
              className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => handleNavigation("/")}
            >
              <div className="text-blue-500 font-bold">•</div>
              <span>Home</span>
            </div>

            <div
              className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => handleNavigation("/reel")}
            >
              <Film className="w-5 h-5 text-blue-400" />
              <span>Reels</span>
            </div>

            <div
              className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => handleNavigation("/hot")}
            >
              <div className="bg-red-600 w-5 h-5 flex items-center justify-center rounded">
                <span className="text-xs font-bold">HOT</span>
              </div>
              <span>Hot Content</span>
            </div>

            <div
              className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => handleNavigation("/livematch")}
            >
              <Flame className="w-5 h-5 text-orange-400" />
              <span>Live Matches</span>
            </div>

            <div
              className="flex items-center space-x-3 py-3 px-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => handleNavigation("/cricketgame")}
            >
              <Gift className="w-5 h-5 text-yellow-400" />
              <span>Cricket Game</span>
            </div>
          </div>

          <div className="mt-auto border-t border-gray-700 pt-4">
            {token ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 py-3 rounded-lg text-white hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Logout</span>
              </button>
            ) : (
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handleNavigation("/signup")}
                  className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  REGISTRATION
                </button>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="w-full bg-gray-700 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  LOG IN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for closing menu when clicking outside */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMenu} aria-hidden="true" />
      )}
    </div>
  )
}

export default Navbar

