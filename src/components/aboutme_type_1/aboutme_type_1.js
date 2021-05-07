import React, { Component } from 'react';
import './aboutme_type_1.css';

export default class AboutMe_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    }  

    render() {
        let config = this.props.config;
        return (
            <div className='AboutMe_Type_1' style={this.getStyles(config)}>
            </div>
        )
    }

}