import React, { Component } from 'react';
import './header_type_1.css';

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
                <div className={'ht1_button' + (button.downloadButton ? ' -d' : '')} key={index} 
                    style={{ color: this.props.config.color, borderColor: this.props.config.color }}>
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