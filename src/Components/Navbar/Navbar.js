import React, { useState } from "react"
import './Navbar.css';
import MenuItems from "../MenuItems/MenuItems";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";


function Navbar() {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="stox-nav-break" />
            <div className="stox-nav-container">
                <img className="stox-nav-logo" alt="" src="/assets/images/stox.svg" />
                <div className="stox-hamburger-container" onClick={() => { setIsActive(!isActive); }}>
                    <img className="stox-hamburger-icon" alt="" src={isActive ? '/assets/images/close.svg' : '/assets/images/hamburger.svg'} />
                </div>
                <div className="stox-nav-cart-container">
                    <img className="stox-nav-cart" alt="" src="/assets/images/cart.svg" />
                    <div className="div">0</div>
                </div>
            </div>

            <div>{isActive}</div>
            <div className="stox-hamburger-icon" style={{ display: isActive ? 'block' : 'none' }}>
                <Slider />
                <MenuItems />
                <Footer />
            </div>

            <div className='centered'>
                <p className="alert-text">
                    For a pixel perfect view set resolution to 375 x 882
                </p>
            </div>
        </>
    )
}

export default Navbar