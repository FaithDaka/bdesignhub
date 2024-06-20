import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('pages/HomePage'));
const AboutPage = React.lazy(() => import('pages/About'));
const ServicesPage = React.lazy(()=>import('pages/ServicesPage'))
const PortfolioPage = React.lazy(() => import('pages/Portfolio'))
const ConsultationPage = React.lazy(() => import('pages/Consultation'))

const App = () => {
    return (
        <Router>
            <Suspense>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/contact" element={<ConsultationPage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
