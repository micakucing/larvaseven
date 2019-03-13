

import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Typed from 'react-typed';
import Midone from "./midelone";
import Midtwo from "./mideltwo";
import Midtree from "./midletree";
import Testi from "./testi";
import Nav from "./nav";

class home extends Component {

    componentDidMount() {
    }
    render() {
         
        return (
            <div classNameName="tengahx">

  <style dangerouslySetInnerHTML={{__html: `

 .cm-script:before {
    content: url('static/image/imageasset/cm.svg')
}
.cm-script.is-medium {
    width: 98px;
    height: 38px;
}
.cm-script.is-medium .icons8 { /* Customizes Christmas Tree icon */
  width: 102px;
  height: 512px;
}
#kols{
 opacity: .5;
}
#kols:hover{
 opacity: 1;
}

`}} /> 



  <Nav />




    <div className="site-blocks-cover overlay" style={{'background-image': 'url(https://colorlib.com/preview/theme/chimper/images/hero_1.jpg)'}} data-aos="fade" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 text-center">


                <h1>We Are Expert in <div>
 
                 <Typed 
                strings={[
                    ' Web app',
                    ' Design branding',
                    ' Mobile application']}
                    typeSpeed={40}
                    backSpeed={50} 
                     
                    loop >
                 </Typed>
                 </div>
</h1>
                <p className="lead mb-5">We Make Beautiful Things</p>
                <div><a href="/about" className="btn btn-primary btn-md">About Us</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  

    <Midone />
     <Midtwo />
        <Midtree />
         <Testi />
 </div>
        );
    }
}

export default translate(home);