import React, { useRef } from 'react';

const TabBar = () => {
    const scrollContainerRef = useRef(null);

    const tabItems = [
        "Windows 11", "Tech", "iOS 18", "GTA 6", "Google Gemini", "Roblox"
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-screen-xl mx-auto">
            <h2 className="text-center text-[clamp(2rem,5vw,5rem)] font-bold mb-6 p-2">
                Trending
            </h2>
            <div className="relative bg-gray-100 p-4 rounded-xl overflow-hidden">
                {/* Left Navigation Button */}
                <button
                    aria-label="Scroll left"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black text-3xl p-2 rounded-full hover:bg-gray-300 transition duration-300"
                    onClick={scrollLeft}
                >
                    &lt;
                </button>

                {/* Trending Tabs */}
                <div
                    className="flex items-center space-x-6 w-full px-10 overflow-hidden"
                    ref={scrollContainerRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
                >
                    {tabItems.map((item, index) => (
                        <button
                            key={index}
                            className="bg-gray-200 px-11 py-2 rounded-full hover:bg-red-600 transition duration-300 hover:scale-105"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right Navigation Button */}
                <button
                    aria-label="Scroll right"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black text-3xl p-3 rounded-full hover:bg-gray-300 transition duration-300"
                    onClick={scrollRight}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TabBar;
