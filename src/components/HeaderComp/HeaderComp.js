import React, { useState } from 'react';
import './style.css'
import RowsImg from '../../img/rows.png'
import RythmImg from '../../img/rythm.png'
import HeaderExampleImg from '../../img/header-example-img.png';

const HeaderComp = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="header-comp-container">
            <nav>
                <h2 className="hearder-logo">Merkury</h2>
                <button onClick={() => setOpen(!isOpen)}><i class="fas fa-bars"></i></button>
                <ul className={isOpen ? 'show' : ''}>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Content</a></li>
                    <li className="login-btn"><a href="#">Login</a></li>
                </ul>
            </nav>
            <img className="img1" src={RowsImg} alt=""/>
            <img className="img2" src={RythmImg} alt=""/>

            <div className="header-comp-body">
                <p className="header-text1">Grow Your business with Merkury</p>
                <p className="header-text2">Your partner in crime!</p>
                <button className="get-started-btn">Get Started</button>
            </div>

            <img className="img3" src={HeaderExampleImg} alt=""/>
        </div>
    )
}

export default HeaderComp
