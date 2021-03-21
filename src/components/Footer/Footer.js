import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer-cont">
            <p>© 2016 Merkury All Right Reserved </p>
            <ul>
                <li>Pricing</li>
                <li>Blog</li> 
                <li>Contact</li> 
                <li>
                    <ul>
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-google-plus-g"></i></li>
                    </ul>
                </li> 
            </ul>
        </div>
    )
}

export default Footer
