import React, { Component } from 'react';
import './footer_type_1.css';
import sm1 from './assets/sm1.png'
import sm2 from './assets/sm2.png'
import sm3 from './assets/sm3.png'
import SMIcons_Type_1 from '../smicons_type_1/smicons_type_1';

export default class Footer_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    } 
    
    render() {
        let config = this.props.config;
        return (
            <div className='Footer_Type_1' style={this.getStyles(config)}>
                <div className='ft1_head'>
                    <div className='ft1h_title'>{config.title}</div>
                    <div className='ft1h_title_bg'>{config.title}</div>
                </div>
                <div className='ft1_body'>
                    <div className='ft1b_name'>{config.name}</div>
                    <div className='ft1b_details'>
                        <div className='ft1bd_stripe' style={{ background: config.colorTheme }}></div>
                        <div className='ft1bd_content' style={{ color: config.colorText }}>
                            <div className='ft1bdc_item'><img src={sm1}/>{config.contactInfo.phoneno}</div>
                            <div className='ft1bdc_item'><img src={sm2} style={{ marginLeft: '-53px' }}/>{config.contactInfo.email}</div>
                            <div className='ft1bdc_item'><img src={sm3}/>{config.contactInfo.address}</div>
                        </div>
                    </div>
                </div>
                <div className='ft1_footer'>
                    <div className='ft1f_sm'>
                        <SMIcons_Type_1/>
                    </div>
                    <div className='ft1f_button' style={{ 
                        background: config.colorTheme, 
                        color: config.buttonTextColor, 
                        boxShadow: '0 50px 50px ' + config.colorTheme + '66' 
                    }}>Hire me!</div>
                </div>
            </div>
        )
    }

}