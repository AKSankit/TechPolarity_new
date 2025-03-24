    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import './App.css';
    import HomePage from "./pages/HomePage.jsx";
    import NewsPage from './component/Header/NewsPage.jsx';
    import GamingPage from "./component/Header/GamingPage.jsx";
    import TechPage from "./component/Header/TechPage.jsx";

    function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/Gaming" element={<GamingPage />} />
                    <Route path="/Tech" element={<TechPage />} />


                </Routes>
            </Router>
        );
    }

    export default App;
