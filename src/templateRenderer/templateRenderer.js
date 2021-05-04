import React, { Component } from 'react';
import './templateRenderer.css';

import Background_Default from '../components/background_default/background_default';
import Landing_Type_1 from '../components/landing_type_1/landing_type_1';
import Gallery_Type_1 from '../components/gallery_type_1/gallery_type_1';

export default class TemplateRenderer extends Component {

    componentFactory = {
        background_default: Background_Default,
        landing_type_1: Landing_Type_1,
        gallery_type_1: Gallery_Type_1
    }

    /**
     *  Find Component
     */

    findComponent = componentKey => {
        let component = null;

        if(componentKey in this.componentFactory) {
            component = this.componentFactory[componentKey]
        }

        return component;
    }

    /**
     *  Build DOM Tree
     */

    buildDOM =template=> {
        let dom = [];

        /**
         *  Loading
         */

        /**
         *  Background
         */

        if(template.background) {
            let component = this.findComponent(template.background.component);
            if(component) {
                dom.push([component, template.background]);
            }
        }

        /**
         *  Template
         */

        for(let idx in template.page) {
            let component = this.findComponent(template.page[idx].component);
            if(component) {
                dom.push([component, template.page[idx]]);
            }
        }

        /**
         *  Render
         */

        return dom.filter( data=> data && data[1] ).map(( data, key )=> {
            let Comp = data[0];
            let config = data[1];
            return <Comp key={key} config={config} template={template}/>
        });
    }

    render() {
        console.log(this.buildDOM(this.props.template));
        
        return (
            <div className='TemplateRenderer'>
                <div className='tr-container'>
                    {this.buildDOM(this.props.template)}
                </div>
            </div>
        )
    }
}
