import React, { Component } from 'react';
import '../App/App.scss';
import Card from '../components/Card/Card.js';
import Menu from '../components/Menu/Menu.js';
import MenuCard from '../components/menuCard/MenuCard.js';
import BackGround from '../components/BackGround/BackGround.js';
import constantes from '../components/Constants/Constants.js';
import callServices from '../components/Services/CallServices.js';
//images

class App extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this);
        this.listaMenu = constantes.menuItems.map(item => <Menu key={item.index} handler={(item) => this.handler(item)} index={item.index} />);
        this.state = {
            actualTab: this.getMenuActual(0),
            tarjetas:[]
        };
        callServices.consultarTarjetas(this.state);
    }

    getMenuActual(index) {
        var list = [];
        var lista= [];
        lista.forEach(item => {
           list.push(<Card key="1"  nombre={item.nombre} imgen={item.imagen}/>);
        });
        switch (index) {
            case 0: return <Card />
            case 1: return list
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
            <div>
                <BackGround />
                <div className="titan">
                    <MenuCard />
                    <div className="menus2">
                        {this.listaMenu}
                    </div>
                    <div className="cards">
                        {this.state.actualTab}
                    </div>
                </div>
            </div>
        );
    }
}

export default App