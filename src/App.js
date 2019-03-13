import React, { Component } from 'react';
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import 'bootstrap/dist/css/bootstrap.css';
import Headnav from "./route/home";
import not from "./route/NotFound";

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
			<Route path="/" exact component={Headnav}/>
         <Route path="/eror" component={not}/>

              <Route path="*" component={Page404} />

		</Switch>
        </header>

      </div>
        </BrowserRouter>
    );
  }
}

export default  translate(App);
