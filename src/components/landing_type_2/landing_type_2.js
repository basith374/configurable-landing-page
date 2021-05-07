import React, { Component } from 'react';
import Header_Type_1 from '../header_type_1/header_type_1';
import './landing_type_2.scss';

export default class Landing_Type_2 extends Component {

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
            <div className='Landing_Type_2' style={this.getStyles(config)}>
                <div className='lt2_header'>
                    <Header_Type_1 config={config}/>
                </div>
                <div className='lt2_content'>
                    <div className='lt2_left'>
                        <div className='lt2l_title_1' style={{ color: config.colorTheme }}>Hello</div>
                        <div className='lt2l_title_2' style={{ color: config.colorTheme3 }}>I'm {config.name}</div>
                        <div className='lt2l_title_3' style={{ color: config.colorTheme3 }}>{config.title}</div>
                        <div className='lt2l_desc' style={{ color: config.colorTextLight }}>{config.desc}</div>
                        <div className='lt2l_button'>
                            <div className='lt2l_button_inner' style={{ background: config.colorTheme2, color: config.buttonTextColor }}>
                                {config.buttonText}
                            </div>
                        </div>
                    </div>
                    <div className='lt2_right'>
                        <div className='lt2r_bg' style={{ background: config.colorBGStripe }}></div>
                        <div className='lt2r_img'>
                            <img src={config.img}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}