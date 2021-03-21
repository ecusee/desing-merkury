import React from 'react';
import './style.css';

const Features = () => {
    return (
        <div className="features-container">
            <div className="see-more">
                <div className="see-more-item">
                    <i class="fas fa-equals"></i>
                    <div className="see-more-content">
                        <h2>Manage Your Workflow</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="see-more-btn">See More</button>
                    </div>
                </div>
                <div className="see-more-item">
                    <i class="fas fa-chart-line"></i>
                    <div className="see-more-content">
                        <h2>Analytics & Insights</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="see-more-btn">See More</button>
                    </div>
                </div>
                <div className="see-more-item">
                    <i class="far fa-calendar-alt"></i>
                    <div className="see-more-content">
                        <h2>Organize Your Deadlines</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="see-more-btn">See More</button>
                    </div>
                </div>
            </div>

            <div className="empty-container">

            </div>
        </div>
    )
}

export default Features
