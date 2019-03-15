
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";
import Pagination from 'react-bootstrap/Pagination'
import JwPagination from 'jw-react-pagination';
import dt from "./data.json";

const customLabels = {
        
        previous: <span className="icon-chevron-left"></span>,
        next: <span className="icon-chevron-right"></span>
    }   


class portfolio extends Component {

constructor(props){
    super(props);

        // an example array of items to be paged
       // var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

        // bind the onChangePage method to this React component
        this.onChangePage = this.onChangePage.bind(this);
             var exampleItems = dt;

        this.state = {
              exampleItems,
            pageOfItems: []
        };
    }
   componentDidMount() {
          
     this.setState({ hits: dt })
       

    }
    onChangePage(pageOfItems) {
        // update local state with new page of items
        this.setState({ pageOfItems });
    }


 




    render() {
 


        return (
            <div className="tengahx">

  <style dangerouslySetInnerHTML={{__html: `
    .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover>.container>.row {
      min-height: 280px;
    }
    li.page-number{
      display: none!important;
    }
    li.previous a {
      position: absolute;
      top: 50%;
      font-size: 30px;
    }
       li.next a {
      position: absolute;
      top: 50%;
        right: 0;
        font-size: 30px;
    }
    .site-section{
      position: relative;
    }
    li.first{
       display: none!important;
    }
      li.last{
       display: none!important;
    }
    li.disabled a{
      color: red!important;
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

   .site-blocks-cover.overlay:before{background-color: #FD1C15}
   @media (max-width: 992px) {
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


    
    <section className="site-section">
      
      <div className="container">
        <div className="row">



          {this.state.pageOfItems.map(item =>
          <div className="col-md-6 col-lg-4 mb-4">
            <div id="ola" data-uri="/workproduct" data-op={item.id} className="media-1">
              <img src={item.image} alt="Image" className="img-fluid"/>
              <div className="media-1-content">
                <h2>Project Name 1</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
                )}
         
         
        </div>
      </div>
    
               <JwPagination  pageSize={6} items={this.state.exampleItems} onChangePage={this.onChangePage}  labels={customLabels}  />
    </section>

         <Testi />
           <Foot />
 </div>
        );
    }
}

export default translate(portfolio);