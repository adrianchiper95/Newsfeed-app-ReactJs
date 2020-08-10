import React from 'react'; 
import './Footer.css';

const Footer = () => {
        return (
            <footer>
                <div className="text-box">
                    <h2>Void.News</h2>
                    <em><h4>created by Adrian</h4></em>
                </div>
                <i className="fas fa-meteor"></i>     
                <div className="social-list">
                    <ul>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-square"></span><span className="text">Facebook</span></a></li>
                    <li><a href="https://www.linkedin.com/in/adrian-chiper/" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin"></span><span className="text">LinkedIn</span></a></li>
                    <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter-square"></span><span className="text">Twitter</span></a></li>
                    </ul>
                </div>
            </footer>
        );
    };

export default Footer;