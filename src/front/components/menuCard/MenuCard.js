import React, { Component } from 'react';
import '../MenuCard/MenuCard.scss';

class MenuCard extends Component {
    render() {
        return (
            <div className="card-menu">
                <img src="/src/img/fondo2.png" height="100%" className="float-right"></img>
                <div className="card-in-menu"></div>
            </div>
        );
    }
}

export default MenuCard