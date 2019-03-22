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
 this.state = {
      ddt: [],
      text: [],
      isLoading: false 
    };
  }
      
      componentDidMount() {
this.setState({ isLoading: true })
 fetch('https://larva7studio.herokuapp.com/d/'+this.props.match.params.id)
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({ text: data[0], isLoading: false })
 console.log(data)
      });
 fetch('https://larva7studio.herokuapp.com/i/'+this.props.match.params.id)
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({ ddt: data, isLoading: false })
 
      });

      }

      render() {
 
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

  const { text, isLoading } = this.state;
 
           const items = this.state.ddt
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
#jjl{
     padding-left: 7.1%;
}



#pplx{
    padding-right: 7.1%;
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
   .site-blocks-cover.overlay:before{background-color: #26327c}
   p { 
    margin-bottom: 2rem;
}
 
.nvt{
    padding-left: 6.1%;
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
.lost{
      color: #afaeab !important;
    font-family: Mor;
    font-size: 50px;
  text-align: center;
}
.col-md-7 {
  
    margin-top:30px;
     flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
    padding: 0 7.1%;
    padding-top: 0;

    padding-bottom: 60px;
        border-radius: 5px;
}


 .hog{
    position: relative;
       z-index: 1;
       width: 21%;
 }
  .hog::before{
   position:fixed;
    z-index:-1;
  }

 .hog::before{
    color: #000;
   width: 100%;
   font-weight: bold;
   z-index: -1;
    content: " ";
    background-image: url(https://res.cloudinary.com/dsl4hppsk/image/upload/v1553272298/br.png);
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    height:20px;
    display: block;

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
 
  text-align: right;
}
.hog {
    position: relative;
    z-index: 1;
    width: 50%;
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
    background-color: #fff;
    padding-bottom: 60px;
        border: none;
        border-top: 1px solid #dee2e6 !important

}
}
@media (max-width: 767px){
.nvt{
    padding-left: 5.1%;
 }
#pplx {
    padding-left: 7.1%;
}

.lost {
   
    font-size: 30px;
    
}
#lpsa {
    text-align: left;
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


    {this.state.isLoading && this.state.isLoading ?  (

    <section className="site-section border-bottom">
<div className="container">
        <div id="tx" className="nvt"><span className="cp"></span></div>
        <div className="row">
          <div id="jjl" className="col-md-4">
            <h3 className="mb-3"></h3>
            <p></p>
          </div>
          <div id="pplx" className="col-md-4">
             <p id="lpsa"></p>
              <p id="lpsa"></p>
             <p id="lpsa"></p>
          </div>
      
          <div className="col-md-7">

          </div>
        </div> 

      </div>



   </section>
      ) :(

    <section className="site-section border-bottom">



  {
       this.state.ddt && this.state.ddt.length > 0 ? (
      <div className="container">
        <div className="nvt"><div className="hog"><span className="cp">Work page</span> / <span className="yt">Product</span></div></div>
        <div className="row">
          <div id="jjl" className="col-md-4">
            <h3 className="mb-3">{text.title}</h3>
            <p>{text.deskrip}</p>
          </div>
          <div id="pplx" className="col-md-4">
             <p id="lpsa">Client: {text.client}</p>
              <p id="lpsa">Year: {text.tahun}</p>
             <p id="lpsa">{text.kategori_name}</p>
          </div>
      
          <div className="col-md-7">
                  <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent}/>

          </div>
        </div> 

      </div>

      ): <div className="lost">We are sorry, data not found</div>}


   
    </section>

    ) }
 <Testi />
           <Foot />
  
  </div>);
      }
  }

  export default translate(product);