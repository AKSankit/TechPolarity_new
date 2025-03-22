import React from 'react';

const MainArticle = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer p-4 shadow-lg rounded-lg mb-6 border-4 border-gray-300"
        >
            {/* Image Section */}
            <div className="relative mb-6">
                <img
                    src="/Keyboard3.png"
                    alt="Keyboard"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            {/* Description Text */}
            <p className="text-gray-700 mt-6 text-base">
                Among the wide variety of fonts available today, monospaced typefaces, also known as fixed-pitch or fixed-width fonts, are those in which each character occupies the same amount of horizontal space. In most fonts, characters vary in width, but in monospaced fonts, each character is given the same amount of space.
            </p>
        </div>
    );
};

export default MainArticle;
