import React, { Component } from 'react';
import './image_fx_1.scss';

let winH = window.innerHeight;
let winW = window.innerWidth;

export default class Image_Fx_1 extends Component {

    imgRef = React.createRef();
    imgContainerRef = React.createRef();

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove)
        this.imgRef.current.style.transform = 'scale(' + this.props.scale + ')'; 

    }

    onMouseMove = e => {
        if(this.imgContainerRef.current) {
            if(!this.imgHMax) {
                this.imgHMax = ((this.imgRef.current.height * this.props.scale) - this.imgRef.current.height)/2;
                this.imgVMax = ((this.imgRef.current.width * this.props.scale) - this.imgRef.current.width)/2;
            }
            let x = (e.x - (winW/2)) / (winW/2) * this.imgVMax;
            let y = (e.y - (winH/2)) / (winH/2) * this.imgHMax;
            this.imgContainerRef.current.style.transform = `translate(${x}px,${y}px)`; 
            // console.log(this.imgRef.current.height)
        }
    }

    render() {
        return (
            <div className='Image_Fx_1'>
                <div className='ifx1_container' ref={this.imgContainerRef}>
                    <img src={this.props.src} ref={this.imgRef}/>
                </div>
            </div>
        )
    }

}