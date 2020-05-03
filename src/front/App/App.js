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
            <div>
                <BackGround />
                <div className="titan">
                    <div className="menus2">
                        {this.listaMenu}
                    </div>
                    <div className="cardMenu d-flex justify-content-center">
                        <MenuCard />
                        <div className="cards">
                            {this.state.actualTab}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App