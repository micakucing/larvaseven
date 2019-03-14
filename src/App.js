import React, { Component } from 'react';
import { Switch, HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";
import About from "./route/about";
import Port from "./route/portfolio";
import Kontak from "./route/contact";
import DeviceOrientation from 'react-device-orientation';
import $ from "jquery";

import not from "./route/NotFound";



class App extends Component {

  rotate = () =>{
    return(<DeviceOrientation>
    {
    ({ absolute, alpha, beta, gamma }) => {
      if(Math.abs(gamma) === '-90' && Math.abs(beta) === '90' && alpha ==='0') {
        return (
          <div id="kum" className="clox_tray">
          <img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" className="po" alt=""/>
          <span className="rotator">{this.props.t('home.rotator')}</span>
          </div>
        )
      }else if(Math.abs(gamma) === '90' && Math.abs(beta) === '90' && alpha === '0') {
          return (
            <div d="kum" className="clox_tray"><img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" alt="" className="po"/><span className="rotator">{this.props.t('home.rotator')}</span>
</div>
        )
      } else {
        return (
       <span></span>
      )
    }
  }
}
  </DeviceOrientation>
)
  }
 readDeviceOrientation = () =>{
    if (Math.abs(window.orientation) === 90) {
        // Landscape
     this.setState({
         land: true
     })   
    $('body').css({'position': 'fixed'})
    } else {
      // Portrait
         this.setState({
         land: false
     })
        $('body').css({'position': 'relative'})

    }
}
rots = () => {
window.onorientationchange = this.readDeviceOrientation;
}
  render() {
    return (
    	  <HashRouter>

      <div className="App">
        {this.rots()}
        <header className="App-header">  

 <Switch>
			<Route path="/" exact component={Headnav}/>
        <Route path="/about" component={About}/>
                <Route path="/work" component={Port}/>
                <Route path="/contact" component={Kontak}/>

         <Route component={not}/>
		</Switch>
        </header>

      </div>
        </HashRouter>
    );
  }
}

export default  translate(App);
