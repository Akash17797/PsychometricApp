import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../images/icon.png';

function Header() {
    const [SubMenuOpen, setSubMenuOpen] = useState(false);
    const [counsellingSubMenuOpen, setCounsellingSubMenuOpen] = useState(false);
    const [devSubMenuOpen, setDevSubMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubMenuToggle = () => {
        setSubMenuOpen(!SubMenuOpen);
    };

    const handleCounsellingSubMenuToggle = () => {
        setCounsellingSubMenuOpen(!counsellingSubMenuOpen);
    };

    const handleDevSubMenuToggle = () => {
        setDevSubMenuOpen(!devSubMenuOpen);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setSubMenuOpen(false);
        setCounsellingSubMenuOpen(false);
        setDevSubMenuOpen(false);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="flex items-center justify-between bg-gradient-to-r from-teal-600 to-emerald-800 px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex items-center">
                    <Link to="/" className="mr-4">
                        <img
                            src= {Icon}
                            className="h-20 object-cover rounded-full w-20 mr-2 filter drop-shadow-lg"
                            alt="Logo"
                        />
                    </Link>
                    <div className="pl-28 hidden lg:flex">
                        <ul className="flex flex-col mt-4 font-bold text-md lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="./"
                                    className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 px-4 duration-500 hover:text-red-500"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={handleSubMenuToggle}
                                onMouseLeave={handleSubMenuToggle}
                            >
                                <NavLink
                                    to="./about"
                                    className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 lg:border-0 lg:p-0 hover:text-red-500"
                                >
                                    About Us
                                </NavLink>
                                {SubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li className="bg-gray-200 rounded-lg duration-500">
                                                <NavLink
                                                    to="./about/vision"
                                                    className="block px-4 py-2 text-gray-700 duration-500"
                                                >
                                                    Vision
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg duration-500">
                                                <NavLink
                                                    to="./about/mission"
                                                    className="block px-4 py-2 text-gray-700 duration-500"
                                                >
                                                    Mission
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={handleCounsellingSubMenuToggle}
                                onMouseLeave={handleCounsellingSubMenuToggle}
                            >
                                <NavLink
                                    to="./counselling"
                                    className="block py-2 pr-4 pl-3 duration-500 text-white border-b border-gray-100 hover:shadow-2xl hover:shadow-white hover:text-red-600 lg:border-0 lg:p-0"
                                >
                                    G&C
                                </NavLink>
                                {counsellingSubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2 text-center ">
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/educational_counselling"
                                                    className=" block py-2 pr-4 pl-3 duration-500 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Educational Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Career_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-500 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Career Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Psychological_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-500 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Psychological Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Behavioral_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-500 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Behavioral Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Marital_Counselling"
                                                    className="w-52 block py-2 pr-4 pl-3 duration-500 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  "
                                                >
                                                    Marital Counselling
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li
                                className="relative"
                                onMouseEnter={handleDevSubMenuToggle}
                                onMouseLeave={handleDevSubMenuToggle}
                            >
                                <NavLink
                                    to="./Personality_Development"
                                    className="block py-2 pr-4 pl-3 duration-500 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0 "
                                >
                                    Personality Development
                                </NavLink>
                                {devSubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li className="bg-gray-200 rounded-lg p-1">
                                                <NavLink
                                                    to="./Personality_Development/Coaching_&_Mentoring"
                                                    className="w-52 block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-center"
                                                >
                                                    Coaching & Mentoring
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <NavLink
                                    to="./psychometric_testing"
                                    className="block py-2 pr-4 pl-3 duration-500 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0 "
                                >
                                    Psychometric Testing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="./drug_abuse"
                                    className="block py-2 pr-4 pl-3 duration-500 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0 "
                                >
                                    Drug Abuse
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="./contact"
                                    className="block py-2 pr-4 pl-3 duration-500 text-white border-b border-gray-100 lg:border-0 hover:text-red-600 lg:p-0 "
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center ">
                    <div className="hidden lg:flex ">
                        <Link
                            to="./login"
                            className="bg-red-600 duration-500 hover:bg-green-500 text-white focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="./signup"
                            className="bg-red-600 duration-500 hover:bg-green-500 text-white focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                    </div>
                    </div>

                <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-gray-500 focus:outline-none focus:text-gray-700 duration-200 p-2 rounded-md border-2 border-transparent focus:ring-2 focus:ring-orange-700"
                >
                    <svg
                        className={`h-8 w-8 transition-transform ${isOpen ? 'transform rotate-90' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
                </div>
            </nav>

            {isOpen && (
                <div className="lg:hidden">
                    <ul className="bg-blue-400 flex flex-col font-bold text-md lg:flex-row lg:space-x-8 lg:mt-0">
                        <li onClick={closeMenu}>
                            <NavLink
                                to="./"
                                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 px-4 duration-500 hover:text-red-500"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="flex justify-between items-center border-b">
                            <NavLink
                                to="./about"
                                className="block py-2 pr-4 pl-3 text-white border-gray-100 lg:border-0 lg:p-0 px-4 duration-500 hover:text-red-500"
                                onClick={closeMenu}
                            >
                                About Us
                            </NavLink>
                            <button
                                className="text-white "
                                onClick={handleSubMenuToggle}
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </li>
                        {SubMenuOpen && (
                            <ul className="pl-4">
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./about/vision"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Vision
                                    </NavLink>
                                </li>
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./about/mission"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Mission
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        <li className="flex justify-between items-center border-b">
                            <NavLink
                                to="./counselling"
                                className="block py-2 pr-4 pl-3 text-white border-gray-100 lg:border-0 lg:p-0 px-4 duration-500 hover:text-red-500"
                                onClick={closeMenu}
                            >
                                G&C
                            </NavLink>
                            <button
                                className="text-white"
                                onClick={handleCounsellingSubMenuToggle}
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </li>
                        {counsellingSubMenuOpen && (
                            <ul className="pl-4">
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./counselling/educational_counselling"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Educational Counselling
                                    </NavLink>
                                </li>
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./counselling/Career_Counselling"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Career Counselling
                                    </NavLink>
                                </li>
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./counselling/Psychological_Counselling"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Psychological Counselling
                                    </NavLink>
                                </li>
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./counselling/Behavioral_Counselling"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Behavioral Counselling
                                    </NavLink>
                                </li>
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./counselling/Marital_Counselling"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Marital Counselling
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        <li className="flex justify-between items-center border-b">
                            <NavLink
                                to="./Personality_Development"
                                className="block py-2 pr-4 pl-3 text-white border-gray-100 lg:border-0 lg:p-0 px-4 duration-500 hover:text-red-500"
                                onClick={closeMenu}
                            >
                                Personality Development
                            </NavLink>
                            <button
                                className="text-white"
                                onClick={handleDevSubMenuToggle}
                            >
                                <svg
                                    className="w-5 h-5 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </li>
                        {devSubMenuOpen && (
                            <ul className="pl-4 ">
                                <li onClick={closeMenu}>
                                    <NavLink
                                        to="./Personality_Development/Coaching_&_Mentoring"
                                        className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                                    >
                                        Coaching & Mentoring
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        <li onClick={closeMenu}>
                            <NavLink
                                to="./psychometric_testing"
                                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                            >
                                Psychometric Testing
                            </NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink
                                to="./drug_abuse"
                                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                            >
                                Drug Abuse
                            </NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink
                                to="./contact"
                                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:border-0 lg:p-0 duration-500 hover:text-red-500"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <Link
                            to="./login"
                            onClick={closeMenu}
                            className="text-white hover:bg-red-600 hover:text-white focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-b hover:font-bold"
                        >
                            Log in
                        </Link>
                        <Link
                            to="./signup"
                            onClick={closeMenu}
                            className="text-white hover:bg-red-600 hover:text-white focus:ring-1 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-b hover:font-bold"
                        >
                            Sign Up
                        </Link>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
