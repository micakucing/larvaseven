import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Typed from 'react-typed';
import Midone from "./midelone";
import Midtwo from "./mideltwo";
import Midtree from "./midletree";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";
import { Helmet } from "react-helmet";

import { default as minifyCssString } from 'minify-css-string'
const cssString = `
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
@media (max-width: 992px) {
 
}
`

class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pc: [],
            isLoading: false,
        };
    }
    componentDidMount() {


        fetch('https://larva7studio.herokuapp.com/randpic')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                this.setState({ pc: data[0], isLoading: false })


            });


    }
    render() {



        const { pc, isLoading } = this.state;
        const divStyle = (src) => ({
            backgroundImage: 'url(' + src + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        })

        return (
            <div className="tengahx">
  <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 



  <Nav />
  <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome To Larva7 Studio</title>
                
             </Helmet>
    <div className="site-blocks-cover overlay" style={divStyle(pc.image_uri)} data-aos="fade" data-stellar-background-ratio="0.5">
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
                <div><a href="#/about" className="btn btn-primary btn-md">About Us</a></div>
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
           <Foot />
      
 </div>
        );
    }
}

export default translate(home);