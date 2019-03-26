   import React, { Component } from "react";
   import { translate } from '../translations/trs';
   import $ from "jquery";
   import { default as minifyCssString } from 'minify-css-string'


   class team extends Component {
       constructor(props) {
           super(props);

           this.state = {
               hitss: [],
               isLoading: false,
           };
       }
       componentDidMount() {


           fetch('https://larva7studio.herokuapp.com/api/family')
               .then(response => response.json())
               .then(data => this.setState({ hitss: data, isLoading: false }));

       }
       render() {
          const { hitss, isLoading } = this.state;

   const cssString = `
 .site-section {
    
    padding-bottom: 0;
}
 #tem {
    padding: 3em 0;

    border-top: 1px solid #dee2e6 !important;
}
#kompeol{
  margin-bottom: 50px;
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
 const divStyle = (src) => ({
            backgroundImage: 'url(' + src + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '250px',
            width: '250px',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50%'
        })
           return (

               <div>
                             <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                     <div id="tem" className="site-section border-bottom">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center"><h2 className="text-black h1 site-section-heading text-center">Meet Our Team</h2></div>
        </div>
        <div className="row">

 {hitss.map(hit =>


          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <div className="person">
                        <div id="kompeol" style={divStyle(hit.image)}></div> 
              <h3>{hit.name}</h3>
              <p className="position text-muted">{hit.title}</p>
              <p className="mb-4">{hit.quot}</p>
            </div>
          </div>   

)}

        </div>
      </div>
    </div>
</div>
           );
       }
   }

   export default translate(team);