import React from 'react'
import Home from './pages/Home'
import SingleMeal from './pages/SingleMeal'
import Unknown from "./pages/404Page";
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import "./style.scss";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/meal/:id' element={<SingleMeal />} />
                <Route path='*' element={<Unknown />} />
            </Routes>
        </div>
    )
}

export default App