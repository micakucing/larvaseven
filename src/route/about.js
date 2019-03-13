

import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Typed from 'react-typed';
import Team from "./team";
import Testi from "./testi";
import Foot from "./foot";

import Nav from "./nav";

class about extends Component {

    componentDidMount() {
    }
    render() {
         
        return (
            <div className="tengahx">

  <style dangerouslySetInnerHTML={{__html: `

 @media (min-width: 992px){
.col-lg-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 50px!important;
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

   .site-blocks-cover.overlay:before{background-color: #FD1C15}
@media (max-width: 992px) {
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}
}

`}} /> 

 

  <Nav />
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
        <div className="row mb-5">
          <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
            <img src="https://colorlib.com/preview/theme/chimper/images/hero_1.jpg" alt="Image" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="text-left pb-1 border-primary mb-4">
                  <h2 className="text-primary">Our Specialties</h2>
                </div>
              </div>
              <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                <div className="unit-4">
                  <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-phonelink"></span></div>
                  <div>
                    <h3>Web &amp; Mobile Specialties</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                <div className="unit-4">
                  <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-extension"></span></div>
                  <div>
                    <h3>Intuitive Thinkers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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