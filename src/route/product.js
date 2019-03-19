  import React, { Component } from "react";
  import { translate } from '../translations/trs';
  import $ from "jquery";
  import Testi from "./testi";
  import Foot from "./foot";
  import Nav from "./nav";
  import 'react-photoswipe/lib/photoswipe.css';
  import { PhotoSwipeGallery } from 'react-photoswipe';

  class product extends Component {
      constructor(props) {
          super(props);
          this.timeout = null;

      }
      componentDidMount() {}

      render() {

          const items = [{
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
          ];
          const options = {
              //http://photoswi
              bgOpacity: 1,
              showHideOpacity: true,
              closeOnScroll: false,
              preloaderEl: true,
              showAnimationDuration: 0,
              hideAnimationDuration: 0
          };

          const getThumbnailContent = (item) => {
              return (
                  <div id="kkt">
       <img src={item.thumbnail} isOpen="true"  itemprop="contentUrl"  className="img-fluid mb-4"/> 
  
  </div>
              );
          }
          return (


              <div>

<style dangerouslySetInnerHTML={{__html: `
   .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover>.container>.row {
      min-height: 280px;
    }
.pswp--animated-in .pswp__bg, .pswp--animated-in .pswp__zoom-wrap {
    -webkit-transition: none;
    transition: none!important;
}
#dior{
      font-size: 50px;
    background-color: #ffffff75;
    border-radius: 50%;
    padding: 5px;
    color: #00000070;
    position: absolute;
    z-index: 1;
    top: 0;
}
#kkt{
  position: relative;
}
.pswp--animate_opacity {
    opacity: 0.001;
    will-change: opacity;
    transition: none!important;
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
.cp{
  cursor: pointer;

}
.cp:hover{
  color: #0d0cb5;
}
.yt{
      color: #afadab;
}
img{
  cursor: zoom-in;
}
   .site-blocks-cover.overlay:before{background-color: #FD1C15}
   p { 
    margin-bottom: 2rem;
}
 
.nvt{

  margin-bottom: 30px;
}
img.mb-4:hover:after{
  content: 'Test';
     position: absolute;
}
.pswp--animate_opacity {
    opacity: 0.001;
    will-change: opacity;
}
.col-md-7 {
  
    margin-top:30px;
     flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
    padding: 0 7.1%;
    padding-top: 60px;
    background-color: #fff;
    padding-bottom: 60px;
        border-radius: 5px;
    border: 1px solid #d8d8d8;
}
   @media (min-width: 768px){

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
 
.col-md-7 {
    -webkit-flex: 0 0 58.333333%;
  
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
    padding: 0 7.1%;
    padding-top: 60px;
    background-color: #F2EBE0;
    padding-bottom: 60px;
        border: none;
        border-top: 1px solid #dee2e6 !important

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
        <div className="nvt"><span className="cp">Work page</span> / <span className="yt">Product</span></div>
        <div className="row">
     
<div className="col-md-4">

            <h3 className="mb-3">Case Study</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis itaque temporibus qui, est possimus porro in, molestiae consectetur dolores soluta, minima quas rem vel saepe. Dolor quibusdam perferendis officia magni.</p>
             
          </div>
          <div className="col-md-4">
             <p id="lpsa">Client: Jayakarta Anyer Hotel</p>
              <p id="lpsa">Year: 2014</p>
             <p id="lpsa">Branding, Grapich Design</p>
 
          </div>

          <div className="col-md-7">
 
                                 <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent}/>

          </div>
       
        </div>
      </div>
    </section>
 <Testi />
           <Foot />
  
  </div>);
      }
  }

  export default translate(product);