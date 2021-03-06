import React, { Component } from 'react';
import '../Card/Card.scss'
class Card extends Component {
    render() {
        return (
            <div className="card-fox">
                <div className="content-card ">
                    <div className="logoIconCard">
                       <img src={this.props.image} id={this.props.title} height="80%" width="80%"></img>
                       <div>{this.props.title}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card