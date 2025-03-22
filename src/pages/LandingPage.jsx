import React from "react";
import Header from "/src/component/Header/Header.jsx";
import TabBar from "/src/component/TabBar/TabBar.jsx";
import TrendingAppStory from "/src/component/Articles/TrendingAppStory.jsx";
import TrendingStory from "/src/component/Articles/TrendingStory.jsx";
import keyboardImg from "../../public/Keyboard3.png"; // Ensure the image is placed correctly

const LandingPage = () => {
    return (
        <div>
            <Header />
            <TabBar />

            {/* Main Container (75% width) shifted to left */}
            <div className="w-full md:w-3/4 p-0">

                {/* First Section - Main Content */}
                <div>
                    <h1 className="text-3xl font-extrabold m-2 my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.
                    </h1>
                    <img className="w-full m-2 mb-4 rounded-md" src={keyboardImg} alt="Keyboard" />

                    <h3 className="font-bold m-2 text-left">Quick Overview</h3>
                    <div className="rounded-xl p-3 border mb-4 border-black">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        </ul>
                    </div>

                    <div className="mb-12 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at consequuntur, debitis dolore doloremque eos, et in maiores modi optio provident quas quo, reprehenderit similique sint ut vel voluptatum.
                    </div>
                    <div className="mb-12 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at consequuntur, debitis dolore doloremque eos, et in maiores modi optio provident quas quo, reprehenderit similique sint ut vel voluptatum.
                    </div>

                    {/* Keyboard Image */}
                    <img className="w-full m-2 mb-4 rounded-md" src={keyboardImg} alt="Keyboard" />
                </div>

                {/* Second Section - Related Articles */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-left">Related Articles</h2>
                    <div className="w-full max-w-lg">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="flex items-center mb-7">
                                <div className="w-8 h-8 bg-red-500 aspect-square rounded-lg mr-2 flex items-center justify-center text-white font-bold">
                                    {num}
                                </div>
                                <div className="h-1 bg-black w-full"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mb-12 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at consequuntur, debitis dolore doloremque eos, et in maiores modi optio provident quas quo, reprehenderit similique sint ut vel voluptatum.
                    </div>
                    <div className="mb-12 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at consequuntur, debitis dolore doloremque eos, et in maiores modi optio provident quas quo, reprehenderit similique sint ut vel voluptatum.
                    </div>
                </div>


            </div>
            {/* Third Section - Trending Stories */}
            <div className="w-full flex flex-row gap-8 text-left">
                {/* Trending Story (75% Width) */}
                <div className="w-3/4">
                    <TrendingStory />

                    <div className="p-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugit magni repellendus. Aperiam architecto at beatae consectetur consequatur dolore dolores eveniet ex in incidunt itaque laboriosam mollitia necessitatibus nihil nobis non, nostrum, obcaecati placeat provident quam quas quis quisquam repellat reprehenderit sapiente soluta ullam ut? Deleniti dolorum eum iste vitae.</div>
                    <div className="p-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugit magni repellendus. Aperiam architecto at beatae consectetur consequatur dolore dolores eveniet ex in incidunt itaque laboriosam mollitia necessitatibus nihil nobis non, nostrum, obcaecati placeat provident quam quas quis quisquam repellat reprehenderit sapiente soluta ullam ut? Deleniti dolorum eum iste vitae.</div>
                    <div className="p-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fugit magni repellendus. Aperiam architecto at beatae consectetur consequatur dolore dolores eveniet ex in incidunt itaque laboriosam mollitia necessitatibus nihil nobis non, nostrum, obcaecati placeat provident quam quas quis quisquam repellat reprehenderit sapiente soluta ullam ut? Deleniti dolorum eum iste vitae.</div>
                </div>


                {/* Trending App Story (25% Width) */}
                <div className="w-1/4">
                    <TrendingAppStory />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
