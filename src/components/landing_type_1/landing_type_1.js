import React, { Component } from 'react';
import Image_Fx_2 from '../image_fx_2/image_fx_2';
import './landing_type_1.css';

export default class Landing_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    }

    getLogoStyle = config => {
        return {
            borderColor: config.colorText,
            color: config.colorText
        }
    }

    render() {
        let config = this.props.config;
        return (
            <div className='Landing_Type_1' style={this.getStyles(config)}>
                <div className='lt1_button_container'>
                    <span style={this.getLogoStyle(config)} 
                        hover-style={`background:${config.colorText}; color:${config.colorBG}`}
                        >{config.buttonText}</span>
                </div>
                <div className='lt1_left' style={{ background: config.colorBG }}>
                    <div className='lt1_logo' style={this.getLogoStyle(config)}>{config.logo}</div>
                    <div className='lt1_des'>
                        <div className='lt1d_title' style={{ color: config.colorText }}>{config.title}</div>
                        <div className='lt1d_desc' style={{ color: config.colorTextLight }}>{config.desc}</div>
                    </div>
                    <div className='lt1_name'>
                        <div className='lt1n_1' style={{ color: config.colorTextLight }}>HI, I AM</div>
                        <div className='lt1n_2' style={{ color: config.colorText }}>{config.name}</div>
                    </div>
                </div>
                <div className='lt1_right'>
                    <Image_Fx_2 config={config}/>
                </div>
            </div>
        )
    }

}