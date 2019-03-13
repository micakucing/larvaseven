import React, { Component } from 'react';
import { Switch, HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from "react-router-dom";
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";


class App extends Component {
  render() {
    return (
    	  <HashRouter>
      <div className="App">
        <header className="App-header">

            
 <Switch>
			<Route exact path="/" component={Headnav}/>
		</Switch>
        </header>

      </div>
        </HashRouter>
    );
  }
}

export default  translate(App);
