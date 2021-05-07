import React, { Component, useState } from 'react';
import './styles.scss';

export default class AboutMe extends Component {
    render() {
        const { content, experience, picture } = this.props.config;
        return <div className="About">
            <div className="AboutIntro">
                <div>
                    <div className="AboutContent t1">
                        <div className="AboutHead">
                            <div className="dots">
                                <div></div>
                                <div></div>
                            </div>
                            <h1>About me</h1>
                        </div>
                        <div className="AboutText">
                            {content.map((c, i) => <div key={i}>{c}</div>)}
                        </div>
                    </div>
                    <div className="AboutContent">
                        <div className="AboutHead2">
                            <div>Work experience</div>
                        </div>
                        <div className="AboutExp">
                            {experience.map((e, i) => {
                                return <div key={i} className="AboutExpItem">
                                    <div className="t1">{e.title}</div>
                                    <div className="t2">{e.company}</div>
                                    <div className="t3">{e.time}</div>
                                    <div className="t3">{e.place}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="AboutPic">
                <div className="AboutFlt">About Me</div>
                <div className="AboutPicI">
                    <img src={picture} alt="Picture of" />
                </div>
            </div>
        </div>
    }
}
