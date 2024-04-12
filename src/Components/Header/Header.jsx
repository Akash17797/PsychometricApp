import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [SubMenuOpen, setSubMenuOpen] = useState(false);
    const [counsellingSubMenuOpen, setCounsellingSubMenuOpen] = useState(false)
    const [devSubMenuOpen, setDevSubMenuOpen] = useState(false)

    const handleSubMenuToggle = () => {
        setSubMenuOpen(!SubMenuOpen);
    }

    const handleCounsellingSubMenuToggle = () => {
        setCounsellingSubMenuOpen(!counsellingSubMenuOpen);
    }
    
    const handleDevSubMenuToggle = () => {
        setDevSubMenuOpen(!devSubMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link to="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Log in
                        </Link>
                        <Link to="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Get started
                        </Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to='./' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                    Home
                                </NavLink>
                            </li>
                            <li className="relative" onMouseEnter={handleSubMenuToggle} onMouseLeave={handleSubMenuToggle}>
                                <NavLink to='./about' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                    About Us
                                </NavLink>
                                {SubMenuOpen && (
                                    <div className="absolute bg-white border-2 border-gray-200 py-2 z-10">
                                        <ul className="flex flex-col space-y-2">
                                            <li>
                                                <NavLink to='./about/vision' className="block px-4 py-2 text-gray-700 hover:text-orange-700">Vision</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='./about/mission' className="block px-4 py-2 text-gray-700 hover:text-orange-700">Mission</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="relative" onMouseEnter={handleCounsellingSubMenuToggle} onMouseLeave={handleCounsellingSubMenuToggle}>
                                <NavLink to='./Counselling' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                    Counselling
                                </NavLink>
                                {counsellingSubMenuOpen && (
                                    <div className="absolute bg-white border-2 border-gray-200 py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li>
                                                <NavLink to='./Counselling/Educational_Counselling' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Educational Counselling
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='./Counselling/Career_Counselling' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Career Counselling
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='./Counselling/Psychological_Counselling' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Psychological Counselling
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='./Counselling/Personal_Counselling' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Personal Counselling
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='./Counselling/Family_Counselling' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Family Counselling
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            <li className="relative" onMouseEnter={handleDevSubMenuToggle} onMouseLeave={handleDevSubMenuToggle}>
                                <NavLink to='./Personality_Development' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                Personality Development
                                </NavLink>
                                {devSubMenuOpen && (
                                    <div className="absolute bg-white border-2 border-gray-200 py-2 z-10">
                                        <ul className="flex flex-col p-2 space-y-2">
                                            <li>
                                                <NavLink to='./Development/Psychometric_Testing' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Psychometric Testing
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='./Development/Coaching_&_Mentoring' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                                    Coaching & Mentoring
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>



                            <li>
                                <NavLink to='./contact' className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;