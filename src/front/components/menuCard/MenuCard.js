import React, { Component } from 'react';
import '../MenuCard/MenuCard.scss';
import constantes from '../Constants/Constants.js';
import Menu from '../Menu/Menu.js';
import callServices from '../Services/CallServices.js';
import Card from '../Card/Card.js';

class MenuCard extends Component {

    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this);
        this.state = { actualTab: "", categorias: [] };
        callServices.consultarCategorias().then(response => {
            this.state.categorias = response.data;
            this.state.actualTab = this.getMenuActual(0);
        });
    }

    getMenuActual(index) {
        var cont = 0;
        var list = this.state.categorias.map(item => {
            cont++;
            return <Card key={cont} title={item.title} image={item.image} type="menu" />;
        });
        switch (index) {
            case 0: return list
            case 1: return "item menu"
            case 2: return "item menu 2"
            case 3: return "item menu 3"
        }
    }

    handler(item) {
        var selected = this.getMenuActual(item.index);
        this.setState({ actualTab: selected });
    }

    render() {
        return (
            <div className="card-menu">
                <div className="homeContainer">
                    <div className="logoContainer">
                        <img src="/src/img/logo.png" height="100%" width="50%" />
                    </div>
                    <div className="textContainer">
                        ¿Piensas quedarte ahí?
                        Mejor comprale unas flores a esa persona
                        que todavia está esperando algo de ti
                    </div>
                    <div className="buttonContainer">
                        <button>
                            <span>ILUSTRAME</span>
                        </button>
                    </div>
                </div>
                
                <div className="cardContainer">
                    <div className="cards">
                        {this.state.actualTab}
                    </div>
                </div>
            </div>

        );
    }
}

export default MenuCard