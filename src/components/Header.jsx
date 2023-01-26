import React from 'react'
import logo from "../burger.png";

const Header = () => {
    return (
        <div className='header'>
            <div className="nav">
                <h1>Meals</h1>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Header