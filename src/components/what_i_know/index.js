import React, { Component } from 'react';
import icons from './icons';
import './style.scss';

export default class WhatIKnow extends Component {

    render() {
        let config = this.props.config;
        return (
            <div className='knowContainer'>
                <div className='knowTitle'>
                    <h1>What I know</h1>
                </div>
                <div className='iconGrid'>
                    {config.items.map((i, k) => {
                        if(!icons[i]) console.log('icon', i, 'missing')
                        if(!icons[i]) return null;
                        return <div className="iconGrid-i" key={k}>
                            {icons[i].icon}
                            <div>{icons[i].label}</div>
                        </div>
                    })}
                </div>
            </div>
        )
    }

}