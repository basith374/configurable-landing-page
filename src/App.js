import React, {Component} from 'react';
import './App.css';
import TemplateRenderer from './templateRenderer/templateRenderer';
// import demoTemplate from './template/default_template/demo';
import sachinTemplate from './template/sachin/sachin';

const afterEverythingLoads =()=> {
  let hoverElms = document.querySelectorAll('[hover-style]')
  hoverElms.forEach(el=> {
    el.addEventListener('mouseenter', e=> {
      el._defaultStyle = el.getAttribute('style');
      el.setAttribute('style', el.getAttribute('style') + el.getAttribute('hover-style'));
    })
    el.addEventListener('mouseleave', e=> {
      el.setAttribute('style', el._defaultStyle );
    })
  })
}

class App extends Component {

  componentDidMount() {
    setTimeout(()=> {
      afterEverythingLoads();
    }, 500)
  }

  render() {
    return (
      <div className="App">
        <TemplateRenderer template={sachinTemplate}/>
      </div>
    );
  }
}

export default App;