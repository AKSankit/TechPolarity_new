import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage.jsx";
import NewsPage from './component/Header/NewsPage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
