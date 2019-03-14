import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Typed from 'react-typed';
import Foot from "./foot";
import Nav from "./nav";

class kontak extends Component {

    componentDidMount() {
    }
    render() {
         
        return ( 
            <div className="tengahx">

 <style dangerouslySetInnerHTML={{__html: `
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
.h4{
  font-family: Mor!important;

}
.a{
  font-family: Mol;
 }
   .site-blocks-cover.overlay:before{background-color: #FD1C15}
   @media (max-width: 992px) {
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}
.a{
   font-size: 15px;
}
.p-5 {
    padding: 2px!important;
}
.p-4{
    padding: 2px!important;
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
                      <h1>Hello, <strong>Nice to Meet You.</strong></h1>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>  


    
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mb-5">

            

            <form action="#" className="p-5 bg-white">
              
              <h2 className="h4 text-black mb-5">Contact Form</h2> 

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="a" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control"/>
                </div>
                <div className="col-md-6">
                  <label className="a" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="a" for="email">Email</label> 
                  <input type="email" id="email" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="a" for="subject">Subject</label> 
                  <input type="subject" id="subject" className="form-control" />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="a" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white" />
                </div>
              </div>

  
            </form>
          </div>
          <div className="col-md-5">
            
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4"><a href="#">+1 232 3235 324</a></p>

              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0"><a href="#">youremail@domain.com</a></p>

            </div>
            
            <div className="p-4 mb-3 bg-white">
              <h3 className="h5 text-black mb-3">More Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
              <p><a href="#" className="btn btn-primary btn-md text-white">Learn More</a></p>
            </div>

          </div>
        </div>
      </div>
    </div> 
 <Foot />
     </div>
);
    }
}

export default translate(kontak);