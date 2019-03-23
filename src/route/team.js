   import React, { Component } from "react";
   import { translate } from '../translations/trs';
   import $ from "jquery";
   import { default as minifyCssString } from 'minify-css-string'

   const cssString = `
 .site-section {
    
    padding-bottom: 0;
}
 #tem {
    padding: 3em 0;

    border-top: 1px solid #dee2e6 !important;
}
@media (max-width: 992px) {
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}
#tem {
    padding: 1em 0;

    border-top: 1px solid #dee2e6 !important;
}
}


`
   class team extends Component {

       componentDidMount() {



        
       }
       render() {


           return (

               <div>
                             <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                     <div id="tem" className="site-section border-bottom">
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
              

              
        </div>
      </div>
    </div>
</div>
           );
       }
   }

   export default translate(team);