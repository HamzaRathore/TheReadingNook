import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaStream, FaAudible, FaTimes, FaBars } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //navItems
  const navItem = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Shop",
      path: "/shop",
    },
    {
      link: "Sell-Book",
      path: "/admin/dashboard",
    },
    
  ];

  const {user} = useContext(AuthContext);


  return (
    <header className="h-8 w-full fixed top-0 left-0 z-10 bg-white/10 backdrop-blur-md transition-all duration-300 ease-in">
      <nav
        className={`py-4 md:px-20 lg:py-6 lg:text-xl ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex items-center justify-between text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2 px-4"
          >
            <FaAudible className="inline-block" />
            TheReadingNook
          </Link>

          {/* //navItems for large devices */}
          <ul className="hidden md:flex space-x-4">
            {navItem.map((item, index) => {
              return (
                <li
                  key={index}
                  className="inline-block mx-4 md:text-lg lg:text-lg"
                >
                  <Link
                    to={item.path}
                    className="text-gray-700 cursor-pointer hover:text-blue-600"
                  >
                    {item.link}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBars className="hover:text-blue-700 cursor-pointer text-xl" />
            </button>
            {/* <span className="mx-1"></span> */}
            <div className="font-bold text-lg pl-0.5">
            {user?.displayName ?? ""}
            </div>
          </div>

          {/* menu button for the mobile devices */}
          <div className="md:hidden flex items-center px-4">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <FaTimes className="text-2xl h-5 w-5 text-black" />
              ) : (
                <FaStream className="text-2xl h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={` md:hidden bg-gradient-to-b from-blue-700 via-gray-500 to-black w-full fixed top-16 z-10 shadow-lg ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : hidden
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4 text-lg">
              {navItem.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-white block py-2 hover:text-blue-600"
                      onClick={closeMenu}
                    >
                      {item.link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
