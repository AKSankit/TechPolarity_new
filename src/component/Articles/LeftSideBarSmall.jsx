import React from 'react';

const LeftSideBarSmall = ({ onClick }) => {
    return (
        <div onClick={onClick} className="flex flex-col sm:flex-row w-full p-3 bg-gray-100 rounded-lg ">
            {/* Left Sidebar Section 1 */}
            {['1', '2'].map((_, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 mb-6 sm:mb-0 p-2">
                    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-md">
                        <img
                            src="/Keyboard3.png" // Adjust image path as needed
                            alt="About Keyboard"
                            className="w-full h-auto object-contain rounded-lg shadow-lg" // Use object-contain for responsiveness
                        />
                        <h2 className="text-xl font-semibold text-gray-800">About Keyboard</h2>
                        <div className="space-y-1">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt dolorem ducimus.</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeftSideBarSmall;
