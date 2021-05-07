import React, { Component } from 'react';
import './gallery_type_1.scss';

export default class Gallery_Type_1 extends Component {

    getStyles = config => {
        return {
            background: config.colorBG,
            margin: config.margin
        }
    } 

    getGrid =()=> {
        let gridConfig = this.props.config.gridConfig || [];
        return (
            <div className='gt1_grid'>
                {this.buildGrid(gridConfig)}
            </div>
        )
    }

    buildGrid = node => {
        if(node.src) {
            return (
                <div className='gt1g_img'>
                    <img src={node.src}/>
                </div>
            )
        }
        
        return 
    }

    render() {
        let config = this.props.config;
        return (
            <div className='Gallery_Type_1' style={this.getStyles(config)}>
                {this.getGrid()}
            </div>
        )
    }

}