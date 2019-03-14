  

import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery} from 'react-photoswipe';

class product extends Component {
constructor(props) {
        super(props);
    this.timeout = null;

    }
    componentDidMount() {
    }



    render() {
   

 const items = [
  {
    src: 'https://colorlib.com/preview/theme/chimper/images/img_1.jpg',
    thumbnail: 'https://colorlib.com/preview/theme/chimper/images/img_1.jpg',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'https://colorlib.com/preview/theme/chimper/images/img_2.jpg',
    thumbnail: 'https://colorlib.com/preview/theme/chimper/images/img_2.jpg',
    w: 1200,
    h: 900,
    title: 'Image 2'
  },
  {
    src: 'https://colorlib.com/preview/theme/chimper/images/img_3.jpg',
    thumbnail: 'https://colorlib.com/preview/theme/chimper/images/img_3.jpg',
    w: 1200,
    h: 900,
    title: 'Image 3'
  }
];

const options = {
  //http://photoswipe.com/documentation/options.html
};

const getThumbnailContent = (item) => {
  return (
    <div>
    <img src={item.thumbnail}   className="img-fluid mb-4"/>
  </div>
  );
}
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
    .site-navbar{
      z-index: 0;
    }
     .pswp__button--share{
  display: none;
 }
#lpsa{
  margin-bottom: 3px;
  text-align: right;
}
.mb-4{
  cursor: zoom-in;
}
   .site-blocks-cover.overlay:before{background-color: #FD1C15}
   p { 
    margin-bottom: 2rem;
}
   @media (min-width: 768px){
 
.col-md-7 {
    -webkit-flex: 0 0 58.333333%;
    flex: 0 0 100%;
    max-width: 100%;
}
.col-md-7 img{

  width: 100%;
}
.col-md-4 {
    -webkit-flex: 0 0 33.333333%;
    flex: 0 0 50%;
    max-width: 50%;
}
}
   @media (max-width: 992px) {
    #lpsa{
 
  text-align: left;
}
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

<div className="col-md-4">
            <h3 className="mb-3">Case Study</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis itaque temporibus qui, est possimus porro in, molestiae consectetur dolores soluta, minima quas rem vel saepe. Dolor quibusdam perferendis officia magni.</p>
             
          </div>
          <div className="col-md-4">
             <p id="lpsa">Name</p>
                               <p id="lpsa">Name</p>
             <p id="lpsa">Name</p>
             <p id="lpsa">Name</p>

          </div>

          <div className="col-md-7">
                                 <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent}/>

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