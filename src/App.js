import React, { Component } from 'react';
import { Switch, HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";
import About from "./route/about";
import Port from "./route/portfolio";
import Kontak from "./route/contact";
import $ from "jquery";
import DeviceOrientation from 'react-device-orientation';
import id from './translations/id.json';
import en from './translations/en.json';
import not from "./route/NotFound";
import Pro from "./route/product";


var u = localStorage.getItem('myData');
var y;
if (u === null){
    y = 'en';
}else{
    y = localStorage.getItem('myData');
}
 setDefaultTranslations({id, en})
setDefaultLanguage(y)
class App extends Component {
constructor(props) {
    super(props);
    this.state = {addClassid: false, addClassen: false, land: false}
}


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
            <div id="kum" className="clox_tray"><img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" alt="" className="po"/><span className="rotator">{this.props.t('home.rotator')}</span>
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

let  b='idl' ,x='enl', com;
const isLoggedIn = this.state.land;
    if(this.state.addClassid) {
      b = 'idl';
      x = 'enl';
}
    if(this.state.addClassen) {
      x = 'enl';
      b = 'idl';
}

  if(isLoggedIn){
    com =  <div id="kum" className="clox_tray">
          <img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" className="po" alt=""/>
          <span className="rotator">{this.props.t('home.rotator')}</span>
          </div>
  }else{
    com = ''
  }
  

    return (
    	  <HashRouter>

      <div className="App">
        {this.rots()}
         {com}
        <header className="App-header">  

 <Switch>
			<Route path="/" exact component={Headnav}/>
        <Route path="/about" component={About}/>
                <Route path="/work" component={Port}/>
                <Route path="/contact" component={Kontak}/>
                <Route path="/workproduct" component={Pro}/>

         <Route component={not}/>
		</Switch>
        </header>

      </div>
        </HashRouter>
    );
  }
}

export default  translate(App);
