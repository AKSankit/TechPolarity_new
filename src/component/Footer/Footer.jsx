import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook className="text-blue-600" />, hoverClass: "hover:text-blue-600" },
    { href: "https://youtube.com", icon: <FaYoutube className="text-red-600" />, hoverClass: "hover:text-red-600" },
    { href: "https://instagram.com", icon: <FaInstagram className="text-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />, hoverClass: "hover:text-pink-500" },
    { href: "https://twitter.com", icon: <FaTwitter className="text-blue-400" />, hoverClass: "hover:text-blue-400" },
    { href: "https://linkedin.com", icon: <FaLinkedin className="text-blue-700" />, hoverClass: "hover:text-blue-700" }
];

const footerLinks = [
    { href: "/about", label: "📖 About" },
    { href: "/privacy-policy", label: "🔒 Privacy Policy" },
    { href: "/contact", label: "✉️ Contact" }
];

const Footer = () => {
    return (
        <footer className="bg-white pt-16 flex flex-col items-center border-t-2 border-gray-300 shadow-md w-full p-2">
            {/* Banner Image */}
            <div className="w-full mb-4">
                <img
                    src="/techpolarity-logo.png"
                    alt="Techpolarity Banner"
                    className="w-full h-40 object-contain object-top"
                />
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center space-x-6 mb-4 text-3xl sm:text-4xl">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:scale-110 transition-transform duration-200 ${link.hoverClass}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-gray-600 font-medium mb-4 text-sm sm:text-base ">
                {footerLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="hover:underline hover:text-blue-600"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Copyright */}
            <div className="mt-4 text-gray-500 text-xs sm:text-sm font-semibold text-center">
                &copy; Techpolarity {new Date().getFullYear()} | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
