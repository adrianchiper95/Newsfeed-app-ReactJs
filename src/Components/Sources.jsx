import React, { Component } from 'react';
import './Header.css';
import './Content.css';
import aerojet from './images/aerojet.png';
import airbus from './images/airbus.png';
import nasa from './images/nasa.png';
import spacex from './images/spacex.png';
import zodiac from './images/zodiac.png';
import planetary from './images/planetary.png';

class Sources extends Component {
    render() {
        return (
        <div id="nav_source">
          <img src={aerojet} onClick={this.props.mySource0} alt="aerojet"/>
          <img src={airbus} onClick={this.props.mySource1} alt="irbus"/>
          <img src={nasa} onClick={this.props.mySource2} alt="nasa"/>
          <img src={spacex} onClick={this.props.mySource3} alt="spacex"/>
          <img src={zodiac} onClick={this.props.mySource4} alt="zodiac"/>
          <img src={planetary} onClick={this.props.mySource5} alt="planetary"/>
        </div>
        );
    };
};

export default Sources;

