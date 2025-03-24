import React from 'react';

const LeftSideBarLarge = () => {
    return (
        <div className="w-full p-2 bg-gray-100 rounded-lg">
            {/* Sidebar Articles */}
            {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="mb-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <img
                        src="/Keyboard3.png"
                        alt="About Keyboard"
                        className="w-full sm:w-1/3 rounded-lg shadow-lg"
                    />
                    <div className="flex flex-col justify-between h-full space-y-2 flex-grow">
                        <h2 className="text-xl font-semibold">About Keyboard</h2>
                        {[...Array(7)].map((_, i) => (
                            <div key={i} className="h-1 bg-black mb-2 w-[90%]"></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeftSideBarLarge;
