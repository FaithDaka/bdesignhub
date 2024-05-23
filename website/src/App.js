import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/About';

const App = () => {
    return (
        <Router>
            <Suspense>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
