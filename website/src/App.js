import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';

const App = () => {
    return (
        <Router>
            <Suspense>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
