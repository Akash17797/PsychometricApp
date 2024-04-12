import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutUsMenu = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  const toggleCounsellingMenu = () => {
    setIsCounsellingOpen(!isCounsellingOpen);
  };

  return (
    <nav className="w-100% bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10" src="/src/Home/paras.jpg" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <div className="relative" onClick={toggleAboutUsMenu}>
                  <NavLink to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About Us
                  </NavLink>
                  {isAboutUsOpen && (
                    <div className="absolute bg-gray-800 shadow-lg px-4 py-2 rounded-md text-gray-300">
                      <a href="/about/vision" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Vision
                      </a>
                      <NavLink to="/about/mission" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Mission
                      </NavLink>
                    </div>
                  )}
                </div>
                <div className="relative" onMouseEnter={toggleCounsellingMenu} onMouseLeave={toggleCounsellingMenu}>
                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Counselling
                  </a>
                  {isCounsellingOpen && (
                    <div className="absolute bg-gray-800 shadow-lg px-4 py-2 rounded-md text-gray-300">
                      <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Educational Counselling
                      </a>
                      <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Career Counselling
                      </a>
                      <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Psychological Counselling
                      </a>
                      <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Personal Counselling
                      </a>
                      <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Family Counselling
                      </a>
                    </div>
                  )}
                </div>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Personality Development
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Psychometric Tests
                </a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Coaching & Mentoring
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign Up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <div className="relative" onMouseEnter={toggleAboutUsMenu} onMouseLeave={toggleAboutUsMenu}>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </a>
              {isAboutUsOpen && (
                <div className="absolute bg-gray-800 shadow-lg px-4 py-2 rounded-md text-gray-300">
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Vision
                  </a>
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Mission
                  </a>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={toggleCounsellingMenu} onMouseLeave={toggleCounsellingMenu}>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Counselling
              </a>
              {isCounsellingOpen && (
                <div className="absolute bg-gray-800 shadow-lg px-4 py-2 rounded-md text-gray-300">
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Educational Counselling
                  </a>
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Career Counselling
                  </a>
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Psychological Counselling
                  </a>
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Personal Counselling
                  </a>
                  <a href="#" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Family Counselling
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Personality Development
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Psychometric Tests
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Coaching & Mentoring
            </a>
            <div className="mt-4 flex items-center justify-between">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Sign In
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;