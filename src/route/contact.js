import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Typed from 'react-typed';
import Foot from "./foot";
import Nav from "./nav";
import {Helmet} from "react-helmet";

class kontak extends Component {
constructor(props) {
    super(props);

    this.state = {
      hits: [],
       text: [],
      isLoading: false,
    };
  }
    componentDidMount() {
                  $(window).scrollTop(0)

    fetch('https://larva7studio.herokuapp.com/infor')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({ text: data[0], isLoading: false })
      }); 
    }

    render() {
     const { hits, isLoading, text } = this.state;
     $('#kontakfr').submit(function () {
     $('.fai').hide() 
     $('.lds-spinner').html('<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
      $.ajax({
            url: 'https://larva7studio.herokuapp.com/emailpost',
            data: $('#kontakfr').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                 if(response == 'email'){
                 $('.lds-spinner').html('')
                 $('.fai').show()         
                 $('.fai').html('<i class="fas fa-exclamation-triangle" style="position: absolute;left: 10px;font-size: 20px;margin-bottom: 20px;display:  block;top: 8px;"></i> Sorry, the email you submitted is invalid or the input is still empty')
                 return
                 }else if(response == 'eror'){
                 $('.lds-spinner').html('')
                 $('.fai').show()         
                 $('.fai').html('<i class="fas fa-exclamation-triangle" style="position: absolute;left: 10px;font-size: 2px;margin-bottom: 20px;display:  block;top: 8px;"></i>Format email salah')
                 return
                 }else if(response == 'ok'){
                 $('.lds-spinner').html('')
                 $('.fai').show() 
                 $('.fai').html('<i class="fas fa-check-circle" style="position: absolute;left: 10px;font-size:20px;margin-bottom: 20px;display:  block;top: 8px;"></i>Thank you for sending us a message')
                 return
                 }else if(response == 'dns eror'){
                 $('.lds-spinner').html('')
                 $('.fai').show() 
                 $('.fai').html('<i class="fas fa-exclamation-triangle" style="position: absolute;left: 10px;font-size: 20px;margin-bottom: 20px;display:  block;top: 8px;"></i>Maaf email yang anda submit tidak valid')
                 return
                 }else if(response == 'subjek'){
                 $('.lds-spinner').html('')
                 $('.fai').show() 
                 $('.fai').html('<i class="fas fa-exclamation-triangle" style="position: absolute;left: 10px;font-size: 20px;margin-bottom: 20px;display:  block;top: 8px;"></i>No, email subject')
                 return
                 }else if(response == 'nama'){
                 $('.lds-spinner').html('')
                 $('.fai').show() 
                 $('.fai').html('<i class="fas fa-exclamation-triangle" style="position: absolute;left: 10px;font-size: 20px;margin-bottom: 20px;display:  block;top: 8px;"></i>Sorry, enter your name is still empty')
                 return
                 }else if(response == 'noisi'){
                 $('.lds-spinner').html('')
                 $('.fai').show() 
                 $('.fai').html('<i class="fas fa-exclamation-triangle" style="position: absolute;left: 10px;font-size: 20px;margin-bottom: 20px;display:  block;top: 8px;"></i>Sorry, your message input fields are still empty')                 
                 return
                 }
            },
            error: function(error) {
                console.log(error);
            }
        });
 return false;
});
       


        return ( 
            <div className="tengahx">
  <Helmet>
      <meta charSet="utf-8" />
                <title>Contact us</title>
             </Helmet>
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
.fai{
        padding: 10px;
    border-radius: 5px;
    background-image: url(https://res.cloudinary.com/dsl4hppsk/image/upload/v1553272298/br.png);
    display: none;
    position: relative;
    padding-left: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
.a{
  font-family: Mol;
 }
   .site-blocks-cover.overlay:before{background-color:  #26327c}
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

            

            <form className="p-5 bg-white" id="kontakfr">
              
              <h2 className="h4 text-black mb-5">Contact Form</h2> 

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="a" for="fname">First Name</label>
                  <input type="text" id="fname" name="fname" className="form-control"/>
                </div>
                <div className="col-md-6">
                  <label className="a" for="lname">Last Name</label>
                  <input type="text" id="lname" name="lname" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="a"  for="email">Email</label> 
                  <input type="email" name="email" id="email" className="form-control"/>
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="a" for="subject">Subject</label> 
                  <input type="subject" name="subjek" id="subject" className="form-control" />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="a" for="message">Message</label> 
                  <textarea name="message" name="pesan" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input  type="submit" value="Send Message" className="btn btn-primary btn-md text-white" />
                </div>
              </div>
   <div className="fai"></div>
  
            </form>


          </div>
          <div className="col-md-5">
             
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold">Address</p>
              <p className="mb-4">{text.alamat}</p>

              <p className="mb-0 font-weight-bold">Phone</p>
              <p className="mb-4"><a href="#">{text.tlp}</a></p>

              <p className="mb-0 font-weight-bold">Email Address</p>
              <p className="mb-0"><a href="#">{text.email}</a></p>

            </div>
            
            <div className="p-4 mb-3 bg-white">
              <h3 className="h5 text-black mb-3">More Info</h3>
              <p>{text.info}</p>
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