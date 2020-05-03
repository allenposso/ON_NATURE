import React, { Component } from 'react';
import '../MenuCard/MenuCard.scss';

class MenuCard extends Component {
    render() {
        return (
            <div className="card-menu">
                <div className="coverImage">
                    <div className="logo"></div>
                </div>
                <div className="card-in-menu"></div>
            </div>
        );
    }
}

export default MenuCard