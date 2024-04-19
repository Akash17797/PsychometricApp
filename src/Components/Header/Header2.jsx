import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="shadow sticky z-50 top-0 bg-gradient-to-br from-green-100 to-blue-200">
            <nav className="px-4 py-2.5 flex justify-between items-center max-w-screen-xl mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src="\src\images\Icon.jpg"
                        className="h-14 object-cover rounded-full w-14 mr-2 filter drop-shadow-lg"
                        alt="Logo"
                    />
                </Link>
                <button
                    className="lg:hidden flex items-center justify-center h-10 w-10 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-800"
                    onClick={toggleMenu}
                >
                    <svg
                        className={`h-6 w-6 text-gray-800 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-90' : ''}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex justify-between items-center w-full lg:w-auto lg:order-1 bg-gradient-to-br from-green-100 to-blue-200 z-50`}
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to="./"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="./about"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="./counselling"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                Counselling
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="./Personality_Development"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                Personality Development
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="./psychometric_testing"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                Psychometric Testing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="./drug_abuse"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                Drug Abuse
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="./contact"
                                className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center lg:order-2 mb-4 lg:mb-0">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;