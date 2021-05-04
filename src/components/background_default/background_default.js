import React, { Component } from 'react';
import './background_default.css';

export default class Background_Default extends Component {

    getStyles = config => {
        return {
            background: config.color || '#ddd'
        }
    }

    render() {
        return (
            <div className='Background_Default' style={this.getStyles(this.props.config)}></div>
        )
    }

}