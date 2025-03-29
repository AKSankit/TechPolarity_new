import React from 'react';

// Sidebar Article Item Component
const SidebarArticleItem = ({ imgSrc, title }) => (
    <div className="mb-6 flex flex-col sm:flex-row items-center p-3 sm:p-4 bg-white border-b-4 border-gray-300">
        <img
            src={imgSrc}
            alt={title}
            className="w-full sm:w-1/2 lg:w-1/2 object-cover"
        />
        <div className="flex flex-col justify-between h-full space-y-3 sm:space-y-4 flex-grow p-2 sm:p-4">
            <h2 className="text-l sm:text-2xl font-semibold text-gray-900">{title}</h2>
            <div className="h-1 bg-black mb-1 w-[70%]"></div>
            <div className="h-1 bg-black mb-1 w-[100%]"></div>
            <div className="h-1 bg-black mb-1 w-[100%]"></div>
        </div>
    </div>
);

const SideBarArticle = () => {
    // Only one article to display
    const article = { imgSrc: "/Keyboard3.png", title: "About Keyboard" };

    return (
        <div className="w-full max-w-2xl mx-auto p-2 sm:p-3 bg-gray-100 rounded-lg">
            <SidebarArticleItem imgSrc={article.imgSrc} title={article.title} />
        </div>
    );
};

export default SideBarArticle;
