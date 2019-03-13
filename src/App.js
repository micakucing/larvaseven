import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";
import not from "./route/NotFound";



class App extends Component {
  render() {
    return (
    	  <BrowserRouter>
      <div className="App">
        <header className="App-header">  
 <Switch>
			<Route path="/" exact component={Headnav}/>
         <Route component={not}/>


		</Switch>
        </header>

      </div>
        </BrowserRouter>
    );
  }
}

export default  translate(App);
