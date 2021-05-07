import React, { Component } from 'react';
import './smicons_type_1.css';
import icon1 from './assets/Behance.png'
import icon2 from './assets/Insta.png'
import icon3 from './assets/dribble.png'
import icon4 from './assets/fb.png'

export default class SMIcons_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    }  

    render() {
        let config = this.props.config;
        return (
            <div className='SMIcons_Type_1'>
                <div className='smit1_item'><img src={icon1}/></div>
                <div className='smit1_item'><img src={icon2}/></div>
                <div className='smit1_item'><img src={icon3}/></div>
                <div className='smit1_item'><img src={icon4}/></div>
            </div>
        )
    }

}