import React, { Component } from 'react';
import './Header.css';
import './Content.css';
import logo from './images/space_logo.png';
import loginLogo from './images/login_logo.png';
import contactLogo from './images/contact_logo.png';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <header>
            <div className="logo" onClick={this.props.myDefaultSource}>
            <div className="logo_image" >
            <img src={logo} alt="Logo" />
            </div>
            <div className="logo_text">
            <h1>Void.<span >News</span></h1>
            </div>
            </div>
            <div className="section">
            <div className="login_text">
            <h3>Login</h3>
            </div>
            <div className="login_logo">
            <img src={loginLogo} alt="Login"/>
            </div>
            <div className="contact_text">
            <h3>Contact</h3>
            </div>
            <div className="contact_logo">
            <img src={contactLogo} alt="Contact"/>
            </div>
            </div>
            </header>
            <div className="logo-bar">
            <div className="logo-mobile" onClick={this.props.myDefaultSource}>
            <img src={logo} alt="Logo"/>
            </div>
            </div>
            </React.Fragment>
        );
    };
};


             

export default Home;