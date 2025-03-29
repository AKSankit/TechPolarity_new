import React from "react";
import Header from "../component/Header/Header.jsx";
import TabBar from "../component/TabBar/TabBar.jsx";
import MainArticle from "../component/Articles/MainArticle.jsx";
import LeftSideBarSmall from "../component/Articles/LeftSideBarSmall.jsx";
import LeftSideBarLarge from "../component/Articles/LeftSideBarLarge.jsx";
import TrendingAppStory from "../component/Articles/TrendingAppStory.jsx";
import SideBarArticle from "../component/Articles/SideBarArticle.jsx";
import TrendingStory from "../component/Articles/TrendingStory.jsx";
import Footer from "../component/Footer/Footer.jsx";

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen px-4 md:px-8 lg:px-48">
            {/* Header Component */}
            <Header />

            {/* TabBar Component */}
            <TabBar />


                {/* Main Content Area */}
                <div className="flex flex-col sm:flex-row flex-grow ">
                    {/* Main Article and LeftSideBarSmall */}
                    <div className="w-full sm:w-1/2 flex flex-col p-2">
                        <MainArticle />
                        <LeftSideBarSmall />

                    </div>

                    {/* Sidebar Article Component */}
                    <div className="w-full sm:w-2/4 p-2">
                        <SideBarArticle />
                        <SideBarArticle />
                        <SideBarArticle />
                        <SideBarArticle />


                    </div>
                </div>

                {/* Container for LeftSideBarLarge and TrendingAppStory with respective widths */}
                <div className="flex sm:flex-row flex-col gap-1">
                    {/* LeftSideBarLarge taking 75% of the width */}
                    <div className="w-full sm:w-3/4 p-1">
                        <LeftSideBarLarge />
                    </div>

                    {/* TrendingAppStory taking 25% of the width */}
                    <div className="w-full sm:w-1/4 p-1">
                        <TrendingAppStory />
                    </div>
                </div>

                {/* Trending Story */}
                <div className="p-3">
                    <TrendingStory />
                </div>


            <div className="p-2"><Footer/></div>
        </div>
    );
}

export default HomePage;
