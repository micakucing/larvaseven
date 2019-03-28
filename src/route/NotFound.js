import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";
import { default as minifyCssString } from 'minify-css-string'
import {Helmet} from "react-helmet";


class notfound extends Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            ddt: [],
            text: []
        };
    }

    componentDidMount() {


    }

    render() {
        const cssString = `
.wrapper {
  flex-grow: 2;
  width: 40vw;
  max-width: 500px;
  margin: 0 auto;
}
  .site-section{
    border-bottom: 1px solid #dee2e6 !important;
    padding-bottom: 20px;
}
h1 {
  margin: 0;
  font-size: 6em;
  font-weight: 100;
}

p {
  width: 95%;
  font-size: 1.5em;
  line-height: 1.4;
}

.buttons {
  white-space: nowrap;
  display: inline-block;
}

span {
  display: block;
  text-transform: uppercase;
  color: #B9DDFB;
  letter-spacing: 1.5px;
  text-align: center;
}

.buttons a {
  display: inline-block;
  padding: .8em 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  border: 3px solid #B9DDFB;
  color: #138FF2;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: .2em;
  position: relative;
  overflow: hidden;
  transition: .3s;
}
 

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
        /*const items = [{
                src: 'images/ty.jpg',
                thumbnail: 'images/ty.jpg',
                w: 1200,
                h: 900,
                title: 'Image 1'
            },
            {
                src: 'images/l.jpg',
                thumbnail: 'images/l.jpg',
                w: 1400,
                h: 2338,
                title: 'Image 2'
            },
            {
                src: 'https://colorlib.com/preview/theme/chimper/images/img_3.jpg',
                thumbnail: 'https://colorlib.com/preview/theme/chimper/images/img_3.jpg',
                w: 1200,
                h: 900,
                title: 'Image 3'
            }
        ];*/


        return (


            <div className="tengahx">

  <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

 

  <Nav />
  <Helmet>
      <meta charSet="utf-8" />
                <title>Page not found</title>
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
         <div className="wrapper">
  <h1>Hmm.</h1>
  <p>It seems that you're lost. Let us help guide you out and get you back home.</p>
  <div className="buttons"> <a href="#">home</a><br/><span></span></div>
</div>
       
      </div>
    </div>
  
    <Testi />
    <Foot />
  </div>);
    }
}

export default translate(notfound);