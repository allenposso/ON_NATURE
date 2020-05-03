import React, { Component } from 'react';
import '../Card/Card.scss'
class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="content-card">
                     {this.props.title}
                </div>
            </div>
        );
    }
}

export default Card