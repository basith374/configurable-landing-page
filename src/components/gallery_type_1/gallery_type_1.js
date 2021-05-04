import React, { Component } from 'react';
import './gallery_type_1.css';

export default class Gallery_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    } 

    render() {
        let config = this.props.config;
        return (
            <div className='Gallery_Type_1' style={this.getStyles(config)}>
                
            </div>
        )
    }

}