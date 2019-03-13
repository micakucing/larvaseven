import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";


class App extends Component {
  render() {
    return (
    	  <BrowserRouter basename="/">
      <div className="App">
        <header className="App-header">

            
 <Switch>
			<Route exact path="/" component={Headnav}/>
		</Switch>
        </header>

      </div>
        </BrowserRouter>
    );
  }
}

export default  translate(App);
