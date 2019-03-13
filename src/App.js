import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";

const Page404 = ({ location }) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
);

class App extends Component {
  render() {
    return (
    	  <BrowserRouter>
      <div className="App">
        <header className="App-header">

            
 <Switch>
			<Route exact path="/" component={Headnav}/>
              <Route component={Page404} />

		</Switch>
        </header>

      </div>
        </BrowserRouter>
    );
  }
}

export default  translate(App);
