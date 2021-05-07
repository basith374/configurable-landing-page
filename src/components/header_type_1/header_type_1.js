import React, { Component } from 'react';
import './header_type_1.scss';

export default class Header_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    }  

    getButtons = buttons => {
        return buttons.map((button, index) => {
            return (
                <div className='ht1_button' key={index}>
                    {button.name}
                </div>
            )
        })
    }

    render() {
        let config = this.props.config;
        return (
            <div className='Header_Type_1'>
                {this.getButtons(config.headerButtons || config.buttons)}
            </div>
        )
    }

}