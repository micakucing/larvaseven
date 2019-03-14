  

import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";

class product extends Component {

    componentDidMount() {
    }
    render() {
    
        return (


          <div>

<style dangerouslySetInnerHTML={{__html: `
   .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover>.container>.row {
      min-height: 280px;
    }
    .text-center h1{
      position: absolute;
    top: 12px;
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
    letter-spacing: .5px;
  
    }
    strong{
      display: block;
    font-weight: bolder;
    font-family: Mor;
    margin-top: 9px;
    letter-spacing: .5px;
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
  <div className="site-blocks-cover inner-page-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">

          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 text-center">
               <h1>
      We Create Good Designs <strong>for Visionary Clients.</strong>
    </h1>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>  


    
    <section className="site-section border-bottom">
      
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src="https://colorlib.com/preview/theme/chimper/images/img_1.jpg" alt="Image" className="img-fluid mb-4" />
            <img src="https://colorlib.com/preview/theme/chimper/images/img_2.jpg" alt="Image" className="img-fluid mb-4" />
            <img src="https://colorlib.com/preview/theme/chimper/images/img_3.jpg" alt="Image" className="img-fluid mb-4" />
          </div>
          <div className="col-md-4 ml-auto">
            <h3 className="mb-3">Case Study</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis itaque temporibus qui, est possimus porro in, molestiae consectetur dolores soluta, minima quas rem vel saepe. Dolor quibusdam perferendis officia magni.</p>
            <p>Quae libero veritatis facilis consectetur, nostrum ab ipsa, asperiores dolorum sed omnis minus debitis, eaque quis provident nihil. Assumenda officia, dolorum commodi, accusamus beatae pariatur neque sapiente! Consequuntur, saepe, perspiciatis?</p>
            <p>Nihil sit commodi natus perferendis, dolorem libero necessitatibus assumenda facilis aperiam atque. Illum accusantium, non saepe quo harum dicta, molestias amet maxime sequi, minus magni neque quos perspiciatis praesentium, atque!</p>
          </div>
        </div>
      </div>
    </section>
 <Testi />
           <Foot />
  
  </div> );
    }
}

export default translate(product);