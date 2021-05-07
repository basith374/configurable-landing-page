import React, { Component } from 'react';
import './style.scss';
import medium from './medium.svg';

export default class BlogSection extends Component {

    render() {
        const { items } = this.props.config;
        return (
            <div className='BlogSection'>
                <div className="BlogsHead">
                    <h1>Blogs</h1>
                    <div className="BlogsHeadDrop">Blogs</div>
                </div>
                <div className="BlogsContainer">
                    {items.map((b, i) => {
                        return <div key={i} className="BlogItem">
                            <div className="BlogImage">
                                <img src={b.image} alt="Article image" />
                            </div>
                            <div className="BlogInfo">
                                <div className="BlogText">
                                    <div className="BlogTextTitle">{b.title}</div>
                                    <div className="BlogTextExtra">{b.content}</div>
                                </div>
                                <div className="BlogFoot">
                                    <div>
                                        <img src={medium} alt="Medium post" />
                                    </div>
                                    <div>
                                        <span>Read more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }

}