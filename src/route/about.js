

import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Typed from 'react-typed';
import Team from "./team";
import Testi from "./testi";
import Foot from "./foot";
import Bout from "./boot";
import {Helmet} from "react-helmet";

import Nav from "./nav";
import { default as minifyCssString } from 'minify-css-string'
const cssString = `
 
 @media (min-width: 992px){
.col-lg-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 50px!important;
}
#tem {
    padding: 1em 0;
}
}
  .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover>.container>.row {
      min-height: 280px;
    }
    .text-center h1{
      position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    font-family: Mol;
    font-weight: 800;
    font-size: 2.44444em;
    line-height: 1.3;
    padding: 0;
    }
    strong{
     display: block;
    font-weight: bolder;
    font-family: Mor;
    letter-spacing: 2px;
    }

   .site-blocks-cover.overlay:before{background-color:  #26327c}
@media (max-width: 992px) {
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}
}


`
class about extends Component {

    componentDidMount() {
    }
    render() {
         
        return (
            <div className="tengahx">

  <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

 

  <Nav />
  <Helmet>
      <meta charSet="utf-8" />
                <title>About us</title>
             </Helmet>
  <div className="site-blocks-cover inner-page-cover overlay"  data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 text-center">
               <h1>A Creative Studio Obsessed with <strong>Designing Better Brands.</strong></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    <div className="site-section">
      <div className="container">
          <Bout />
       
      </div>
    </div>
    <Team />
    <Testi />
    <Foot />
  </div>
);
    }
}

export default translate(about);