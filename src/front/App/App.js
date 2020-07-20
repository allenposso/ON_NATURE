import React, { Component } from 'react';
import '../App/App.scss';
import MenuCard from '../components/menuCard/MenuCard.js';
import BackGround from '../components/BackGround/BackGround.js';
//images

class App extends Component {
    render() {
        return (
            <div>
                <BackGround />
                <div className="titan">
                    <div className="d-flex justify-content-center">
                        <MenuCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default App