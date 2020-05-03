import React, { Component } from 'react';
import '../Menu/Menu.scss';
import constantes from '../Constants/Constants.js';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.seleccionMenu = this.seleccionMenu.bind(this)
    }
    seleccionMenu() {
        constantes.menuItems.forEach(element => {
            element.activo = element.index == this.props.index;
        });
        var itemActual = constantes.menuItems.find(item=> item.activo);
        this.props.handler(itemActual);
    }
    render() {
        return (
            <div onClick={this.seleccionMenu} className="menu">
                <div className="content-menu"></div>
            </div>
        );
    }
}

export default Menu