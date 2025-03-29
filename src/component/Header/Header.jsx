import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = ["News", "Review", "Opinion", "Gaming", "Tech"];

    return (
        <header className=" w-full px-2 md:px-0 py-2 relative z-20">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="w-28 h-8 md:w-60 md:h-10 cursor-pointer" />
                </a>


                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-4 lg:space-x-2">  {/* Reduced space-x values */}
                    {navItems.map((item, index) => (
                        <Link to={`/${item.toLowerCase()}`} key={index}>
                            <button className="px-3 py-1 rounded-full bg-gray-200 transition hover:bg-red-600 hover:text-white">
                                {item}
                            </button>
                        </Link>
                    ))}
                </nav>


                {/* Desktop Search Bar */}
                <div className="hidden md:flex items-center border rounded-full px-3 py-[2px] w-auto md:w-44">
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none bg-transparent px-2 py-1 text-sm w-full"
                    />
                    {/* Search Icon Button */}
                    <button className="bg-gray-200 p-1.5 rounded-full hover:bg-red-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 18a8 8 0 110-16 8 8 0 010 16zm0 0l6 6"
                            />
                        </svg>
                    </button>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu (Side Panel) */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 
    ${menuOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto max-h-screen z-50`}
            >

                <div className="flex justify-between items-center p-4 border-b">
                    <a href="/" className="flex items-center">
                        <img src="/logo.png" alt="Logo" className="w-32 h-10" />
                    </a>
                    <button
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="p-4 flex flex-col space-y-3">
                    {navItems.map((item, index) => (
                        <Link to={`/${item.toLowerCase()}`} key={index}>
                            <button
                                className="min-w-44 py-2 rounded-full bg-gray-200 transition hover:bg-red-600 hover:text-white"
                            >
                                {item}
                            </button>
                        </Link>
                    ))}

                    {/* Mobile Search Bar */}
                    <div className="flex items-center border rounded-full px-4 py-2 mt-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none bg-transparent px-2 py-1 text-sm w-full pl-10"
                        />
                        {/* Mobile Search Icon Button */}
                        <button className="bg-gray-200 p-2 rounded-full hover:bg-red-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 18a8 8 0 110-16 8 8 0 010 16zm0 0l6 6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
