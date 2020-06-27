import React, { Component } from 'react';
import './Header.css';
import './Content.css';
import logo from './images/space_logo.png';

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