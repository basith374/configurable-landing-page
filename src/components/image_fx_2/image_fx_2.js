import React, { Component } from 'react';
import './image_fx_2.css';

let winH = window.innerHeight;
let winW = window.innerWidth;

export default class Image_Fx_2 extends Component {

    imgRefArray = [];
    imgContainerRef = React.createRef();
    initiated = false;
    animationSpeed = 10;
    state = {
        isImgRefCreated: false
    }

    componentDidMount() {
        this.scale = this.props.config.scale;
        this.inverseScale = 1 / this.scale;
        document.addEventListener('mousemove', this.onMouseMove)
        this.imgRefArray = this.props.config.img.map(()=>React.createRef());
        this.imgContainerRef.current.style.transform = 'scale(' + this.scale + ')'; 
        this.setState({isImgRefCreated: true}, ()=> {
            let cstyle = window.getComputedStyle(this.imgContainerRef.current);
            let height = parseInt(cstyle.height);
            let width = parseInt(cstyle.width);
            this.imgHMax = ((height * this.scale) - height) / 2 * this.inverseScale;
            this.imgVMax = ((width * this.scale) - width) / 2 * this.inverseScale;
            this.initiated = true;
            this.run();
        })
    }

    velocityX = 0;
    velocityY = 0;
    mouseX = 0;
    mouseY = 0;
    transformX = 0;
    transformY = 0;

    run =()=> {
        if(this.initiated) {
            this.velocityX = (this.mouseX - this.transformX ) / this.animationSpeed;
            this.velocityY = (this.mouseY - this.transformY ) / this.animationSpeed;
        }
        if(Math.abs(this.mouseX - this.transformX) > 1 || Math.abs(this.mouseY - this.transformY) > 1) {
            this.transformX += this.velocityX;
            this.transformY += this.velocityY;

            this.imgRefArray.forEach((ref, index)=> {
                if(ref.current) {
                    let ratio = index / (this.imgRefArray.length - 1)
                    let x = this.transformX * ratio;
                    let y = this.transformY * ratio;
                    ref.current.style.transform = `translate(${x}px,${y}px)`; 
                }
            })
        }
        window.requestAnimationFrame(this.run)
    }

    onMouseMove = e => {
        this.mouseX = (e.x - (winW/2)) / (winW/2) * this.imgVMax;
        this.mouseY = (e.y - (winH/2)) / (winH/2) * this.imgHMax;
    }

    render() {
        return (
            <div className='Image_Fx_2'>
                <div className='ifx2_container' ref={this.imgContainerRef}>
                    {this.state.isImgRefCreated && this.props.config.img.map((src, index)=> (
                        <div className='ifx2c_img_container' key={index} ref={this.imgRefArray[index]}>
                            <img src={src}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}