import React from 'react';
import './style.css'
import YouNeedBrowserImg from '../../img/all-you-need.png'

const YouNeedBrowser = () => {
    return (
        <div className="you-need-browser-container">

            <div className="you-need-browser-text">
                <div className="web-left">

                    <h2>All You need is a browser!</h2>

                    <p className="you-need-browser-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="you-need-browser-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className="checks">
                        <i class="far fa-check-circle"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="checks">
                        <i class="far fa-check-circle"></i>
                        <p>Ut enim ad minim veniam quis nostrud</p>
                    </div>

                </div>
                <img className="all-you-need-img" src={YouNeedBrowserImg} alt="" />
            </div>


        </div>
    )
}

export default YouNeedBrowser

