import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [SubMenuOpen, setSubMenuOpen] = useState(false);
    const [counsellingSubMenuOpen, setCounsellingSubMenuOpen] = useState(false)
    const [devSubMenuOpen, setDevSubMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const handleSubMenuToggle = () => {
        setSubMenuOpen(!SubMenuOpen);
    }

    const handleCounsellingSubMenuToggle = () => {
        setCounsellingSubMenuOpen(!counsellingSubMenuOpen);
    }
    
    const handleDevSubMenuToggle = () => {
        setDevSubMenuOpen(!devSubMenuOpen);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="flex items-center justify-between bg-gradient-to-br from-green-700 to-blue-400 border-gray-200 px-4 sm:px-6 lg:px-8 py-2.5">
                <div className="flex items-center">
                    <Link to="/" className="mr-4">
                        <img
                            src="\src\images\Icon.jpg"
                            className="h-20 object-cover rounded-full w-20 mr-2 filter drop-shadow-lg"
                            alt="Logo"
                        />
                    </Link>
                    <div className="pl-28 hidden lg:flex">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="./"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    About Us
                                </NavLink>
                                {SubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li className="bg-gray-200 rounded-lg">
                                                <NavLink
                                                    to="./about/vision"
                                                    className="block px-4 py-2 text-gray-700 hover:text-orange-700"
                                                >
                                                    Vision
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg">
                                                <NavLink
                                                    to="./about/mission"
                                                    className="block px-4 py-2 text-gray-700 hover:text-orange-700"
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Counselling
                                </NavLink>
                                {counsellingSubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2 text-center ">
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/educational_counselling"
                                                    className=" block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Educational Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Career_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Career Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Psychological_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Psychological Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Behavioral_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Behavioral Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Marital_Counselling"
                                                    className="w-52 block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  "
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Psychometric Testing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="./drug_abuse"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Drug Abuse
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="./contact"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden lg:flex">
                        <Link
                            to="#"
                            className="text-gray-200 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
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
                    <div className="flex lg:hidden">
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
                {/* Mobile menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="./"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    About Us
                                </NavLink>
                                {SubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li className="bg-gray-200 rounded-lg">
                                                <NavLink
                                                    to="./about/vision"
                                                    className="block px-4 py-2 text-gray-700 hover:text-orange-700"
                                                >
                                                    Vision
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg">
                                                <NavLink
                                                    to="./about/mission"
                                                    className="block px-4 py-2 text-gray-700 hover:text-orange-700"
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Counselling
                                </NavLink>
                                {counsellingSubMenuOpen && (
                                    <div className="absolute bg-blue-300 rounded-2xl border-2 border-transparent py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2 text-center ">
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/educational_counselling"
                                                    className=" block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Educational Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Career_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Career Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Psychological_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Psychological Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Behavioral_Counselling"
                                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                                >
                                                    Behavioral Counselling
                                                </NavLink>
                                            </li>
                                            <li className="bg-gray-200 rounded-lg px-4 py-2">
                                                <NavLink
                                                    to="./counselling/Marital_Counselling"
                                                    className="w-52 block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  "
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
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
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Psychometric Testing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="./drug_abuse"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Drug Abuse
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="./contact"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;