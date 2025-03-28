import React, { useRef } from 'react';

const TabBar = () => {
    const scrollContainerRef = useRef(null);

    const tabItems = [
        "Windows 11", "Tech", "iOS 18", "GTA 6", "Google Gemini", "Roblox"
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md w-full max-w-screen-xl mx-auto">
            <h2 className="text-center text-[clamp(2rem,3vw,5rem)] font-bold p-1">
                Trending
            </h2>
            <div className="relative bg-gray-200 p-1 rounded-2xl overflow-hidden max-w-2xl mx-auto">
                {/* Left Navigation Button */}
                <button
                    aria-label="Scroll left"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black text-3xl p-1 rounded-full hover:bg-gray-300 transition duration-300"
                    onClick={scrollLeft}
                >
                    &lt;
                </button>

                {/* Trending Tabs */}
                <div
                    className="flex items-center space-x-4 w-full px-7 overflow-hidden"
                    ref={scrollContainerRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
                >
                    {tabItems.map((item, index) => (
                        <button
                            key={index}
                            className="bg-white px-11 py-1 rounded-full hover:bg-red-600 transition duration-300 hover:scale-105 text-nowrap flex-nowrap"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right Navigation Button */}
                <button
                    aria-label="Scroll right"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black text-3xl p-1 rounded-full hover:bg-gray-300 transition duration-300"
                    onClick={scrollRight}
                >
                    &gt;
                </button>
            </div>

        </div>
    );
};

export default TabBar;
