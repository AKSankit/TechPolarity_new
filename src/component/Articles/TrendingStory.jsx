import React from 'react';

const TrendingStory = () => {
    const stories = [
        { imgSrc: '/keyboard2.png', alt: 'About Keyboard' },
        { imgSrc: '/keyboard2.png', alt: 'About Keyboard' },
        { imgSrc: '/keyboard2.png', alt: 'About Keyboard' },
    ];

    return (
        <div className="bg-red-500 p-2 rounded-lg">
            <h2 className="text-white text-xl font-bold mb-4">Trending Story</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {stories.map((story, index) => (
                    <div key={index} className="bg-red-500 mx-2 rounded-xl shadow-md">
                        <img
                            src={story.imgSrc}
                            alt={story.alt}
                            className="w-full h-35 object-cover mb-2 rounded-xl "
                        />
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-1 bg-white mt-2"></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingStory;
