import React, { Component } from 'react';
import '../BackGround/BackGround.scss';

class BackGround extends Component {
    render() {
        return (
            <div className="backContainer">
                <div className="imageGround-container">
                    <img src="/src/img/fondo.jpg" height="100%" width="100%" />
                </div>
                <div className="background-container">
                </div>
                <div className="home-container">
                </div>
            </div>
        );
    }
}

export default BackGround