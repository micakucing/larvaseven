   import React, { Component } from "react";
   import { translate } from '../translations/trs';
   import $ from "jquery";
   class team extends Component {

       componentDidMount() {}
       render() {


           return (
               <div>
                     <div className="site-section border-bottom">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary" data-aos="fade">Our Team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div className="person">
              <img src="https://colorlib.com/preview/theme/chimper/images/person_1.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
              <h3>Christine Rooster</h3>
              <p className="position text-muted">Co-Founder, President</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              
            </div>
          </div>
               <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div className="person">
              <img src="https://colorlib.com/preview/theme/chimper/images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
              <h3>Brandon Sharp</h3>
              <p className="position text-muted">Co-Founder, COO</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
             
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <div className="person">
              <img src="https://colorlib.com/preview/theme/chimper/images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
              <h3>Brandon Sharp</h3>
              <p className="position text-muted">Co-Founder, COO</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
              
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <div className="person">
              <img src="https://colorlib.com/preview/theme/chimper/images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
              <h3>Connor Hodson</h3>
              <p className="position text-muted">Marketing</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
               
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
           );
       }
   }

   export default translate(team);