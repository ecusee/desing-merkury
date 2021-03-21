import React from 'react'
import './style.css';
import TempExample from '../../img/template-example.png';

const Pricing = () => {
    return (
        <div className="body-comp4-container">
            <div className="body-comp4-title">
                <h2>Powerfull PSD Template</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className="body-comp4-top">
                <div className="definition1">
                    <h2>Clean & modern layout</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                <img className="temp-example-img" src={TempExample} alt=""/>

                <div className="definition2">
                    <h2>Easy to customize</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
            </div>

            <div className="body-comp4-bottom">
                <h2>Check our pricing!</h2>
                <div className="pricing-top-cont">
                    <div className="pricing-container">
                        <p className="pricing-title">BRONZE PLAN</p>
                        <div className="pricing-amount">
                            <p className="dollar">$</p>
                            <p className="amount">19</p>
                            <p className="schedule">/mon</p>
                        </div>
                        <ul>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-times-circle x-mark"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-times-circle x-mark"></i>Lorem ipsum dolor sit am</li>
                        </ul>
                    </div>
                    <div className="pricing-container">
                        <p className="pricing-title">SILVER PLAN</p>
                        <div className="pricing-amount">
                            <p className="dollar">$</p>
                            <p className="amount">49</p>
                            <p className="schedule">/mon</p>
                        </div>
                        <ul>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-times-circle x-mark"></i>Lorem ipsum dolor sit am</li>
                        </ul>
                    </div>
                    <div className="pricing-container">
                        <p className="pricing-title">GOLD PLAN</p>
                        <div className="pricing-amount">
                            <p className="dollar">$</p>
                            <p className="amount">99</p>
                            <p className="schedule">/mon</p>
                        </div>
                        <ul>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                            <li><i class="far fa-check-circle check"></i>Lorem ipsum dolor sit am</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="join-cont">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                <div className="btn-cont">
                    <div className="join-btn">
                        Join now!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;