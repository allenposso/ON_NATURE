import React,{ Component } from 'react';
import '../BackGround/BackGround.scss';

class BackGround extends Component {
    render() {
        return (
            <div className="svg-container">
                <div className="coverImage-back">
                    <div className="logo-back_one"></div>
                </div>
                <div className="coverImage-back_one">
                    <div className="logo-back_two"></div>
                </div>
                <div className="coverImage-back_two">
                    <div className="logo-back_three"></div>
                </div>
            </div>
        );
    }
}

export default BackGround