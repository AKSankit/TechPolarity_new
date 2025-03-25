import React, { useState, useEffect } from "react";
import axios from "axios";

const MainArticle = ({ onClick }) => {
    const [article, setArticle] = useState({
        title: "Loading...",
        image: "/placeholder.png",
        description: "Fetching article content...",
    });

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.gadgets360.com/mobiles/news/realme-14t-design-render-leak-features-expected-colour-options-report-8004720")}`
                );

                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data.contents, "text/html");

                // Extract title, image, and description
                const title = doc.querySelector("h1")?.innerText || "Title Not Found";
                const image = doc.querySelector("meta[property='og:image']")?.content || "/placeholder.png";
                const description = doc.querySelector("meta[name='description']")?.content || "Description not available.";

                setArticle({ title, image, description });
            } catch (error) {
                console.error("Error fetching article:", error);
                setArticle({
                    title: "Error loading content",
                    image: "/error.png",
                    description: "Unable to fetch the article.",
                });
            }
        };

        fetchArticle();
    }, []);

    return (
        <div
            onClick={onClick}
            className="cursor-pointer p-4 shadow-lg rounded-lg mb-6 border-4 border-gray-300"
        >
            {/* Image Section */}
            <div className="relative mb-6">
                <img
                    src={article.image}
                    alt="Article"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-900">{article.title}</h2>

            {/* Description Text */}
            <p className="text-gray-700 mt-2 text-base">{article.description}</p>

            {/* Read More Link */}
            <a
                href="https://www.gadgets360.com/mobiles/news/realme-14t-design-render-leak-features-expected-colour-options-report-8004720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
            >
                Read Full Article
            </a>
        </div>
    );
};

export default MainArticle;
