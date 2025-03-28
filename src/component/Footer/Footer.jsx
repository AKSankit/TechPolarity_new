import React from 'react';


const socialLinks = [
    {
        href: "https://facebook.com",
        icon: <img src="/facebook-icon.png" alt="Tech Polarity Facebook Icon" className="w-8 h-8" />,
        hoverClass: "hover:text-blue-600"
    },


        {
            href: "https://youtube.com",
            icon: <img src="/youtube-icon.png" alt="YouTube" className="w-8 h-8" />,
            hoverClass: "hover:opacity-80"
        },
        {
            href: "https://instagram.com",
            icon: <img src="/instagram-icon.png" alt="Instagram" className="w-8 h-8" />,
            hoverClass: "hover:opacity-80"
        },
        {
            href: "https://twitter.com",
            icon: <img src="/twitter-icon.png" alt="Twitter" className="w-8 h-8" />,
            hoverClass: "hover:opacity-80"
        },
    {
        href: "mailto:your-email@gmail.com",
        icon: <img src="/gmail-icon.png" alt="Gmail" className="w-8 h-8" />,
        hoverClass: "hover:opacity-80"
    }



];

const footerLinks = [
    { href: "/about", label: "📖 About" },
    { href: "/privacy-policy", label: "🔒 Privacy Policy" },
    { href: "/contact", label: "✉️ Contact" }
];

const Footer = () => {
    return (
        <footer className="bg-white pt-6 flex flex-col items-center border-t-2 border-gray-300 shadow-md w-full p-2">
            {/* Banner Image */}
            <div className="w-full mb-1">
                <img
                    src="/techpolarity-logo.png"
                    alt="Techpolarity Banner"
                    className="w-full h-32 object-contain object-top"
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
