import React from 'react';
import LandingPage from '../../pages/LandingPage.jsx'; // Corrected import path

const NewsPage = () => {
    return (
        <div>

            <LandingPage /> {/* Now correctly imports LandingPage content */}
        </div>
    );
};

export default NewsPage;
