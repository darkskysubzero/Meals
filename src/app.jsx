import React from 'react'
import Home from './pages/Home'
import SingleMeal from './pages/SingleMeal'
import Unknown from "./pages/404Page";
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import "./style.scss";
import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Header />
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path='/meal/:id' element={<SingleMeal />} />
                    <Route path='*' element={<Unknown />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App