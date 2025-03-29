import React from 'react';

const socialLinks = [
    { href: "https://facebook.com", icon: "/facebook-icon.png", alt: "Facebook" },
    { href: "https://youtube.com", icon: "/youtube-icon.png", alt: "YouTube" },
    { href: "https://instagram.com", icon: "/instagram-icon.png", alt: "Instagram" },
    { href: "https://twitter.com", icon: "/twitter-icon.png", alt: "Twitter" },
    { href: "mailto:your-email@gmail.com", icon: "/gmail-icon.png", alt: "Gmail" }
];

const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/contact", label: "Contact" }
];

const Footer = () => {
    return (
        <footer className="bg-white pt-6  w-full">
            {/* Banner Image */}
            <div className="w-full max-w-screen-lg mx-auto px-4 mb-4">
                <img
                    src="/techpolarity-logo.png"
                    alt="Techpolarity Banner"
                    className="w-full h-32 object-contain"
                />
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img
                            src={link.icon}
                            alt={link.alt}
                            className="w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] min-h-[32px]"
                        />
                    </a>
                ))}
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-gray-600 font-medium mb-4 text-sm sm:text-base p-4">
                {footerLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="relative group px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-red-500 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></span>
                        <span className="relative z-10">{link.label}</span>
                    </a>
                ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-xs sm:text-sm font-semibold text-center pb-4">
                &copy; Techpolarity {new Date().getFullYear()} | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
