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
        <div className="bg-white w-full max-w-screen-xl mx-auto">
            <h2 className="text-center text-[clamp(2rem,3vw,5rem)] font-bold p-0">
                Trending
            </h2>
            <div className="border-b-2 border-black p-4">
                <div className="relative bg-gray-200 py-1 px-3.5 rounded-full overflow-hidden max-w-4xl mx-auto flex items-center">


                {/* Left Navigation Button */}
                    <button
                        aria-label="Scroll left"
                        className="text-black text-xl px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
                        onClick={scrollLeft}
                    >
                        &lt;
                    </button>

                    {/* Trending Tabs */}
                    <div
                        className="flex items-center space-x-3 overflow-hidden flex-grow px-3"
                        ref={scrollContainerRef}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
                    >
                        {tabItems.map((item, index) => (
                            <button
                                key={index}
                                className="bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 hover:scale-105 text-nowrap"
                            >
                                {item}
                            </button>

                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        aria-label="Scroll right"
                        className="text-black text-xl px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
                        onClick={scrollRight}
                    >
                        &gt;
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TabBar;
