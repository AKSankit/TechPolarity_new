import React from 'react';

// Sidebar Article Item Component
const SidebarArticleItem = ({ imgSrc, title }) => (
    <div className="mb-9 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 p-4 sm:p-4 bg-white rounded-lg shadow-md">
        <img
            src={imgSrc}
            alt={title}
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mr-4 mb-6 md:mb-0"
        />
        <div className="flex flex-col justify-between h-full space-y-2 sm:space-y-4 sm:flex-grow">
            <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
            <div className="h-1 bg-black mb-1 w-[80%] sm:w-[90%]"></div>
            <div className="h-1 bg-black mb-1 w-[80%] sm:w-[90%]"></div>
            <div className="h-1 bg-black mb-1 w-[80%] sm:w-[90%]"></div>
            <div className="h-1 bg-black mb-1 w-[80%] sm:w-[90%]"></div>
        </div>
    </div>
);

const SideBarArticle = () => {
    const articles = [
        { imgSrc: "/public/Keyboard3.png", title: "About Keyboard" },
        { imgSrc: "/public/Keyboard3.png", title: "About Keyboard" },
        { imgSrc: "/public/Keyboard3.png", title: "About Keyboard" },
        { imgSrc: "/public/Keyboard3.png", title: "About Keyboard" },
    ];

    return (
        <div className="w-full p-4 sm:p-5 bg-gray-100 rounded-lg">
            {articles.map((article, index) => (
                <SidebarArticleItem
                    key={index}
                    imgSrc={article.imgSrc}
                    title={article.title}
                />
            ))}
        </div>
    );
};

export default SideBarArticle;
