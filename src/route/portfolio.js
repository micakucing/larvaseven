import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";
import Pagination from 'react-bootstrap/Pagination'
import JwPagination from 'jw-react-pagination';
import dt from "./data.json";
import { createHashHistory } from 'history'
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import PropTypes from 'prop-types';
import ContentLoader, { Facebook } from "react-content-loader";
import {Helmet} from "react-helmet";
import renderHTML from 'react-render-html';


const history = createHashHistory()
const propTypes = {

    initialPage: PropTypes.number
}
const customLabels = {

    previous: <Icon
  name='ios-arrow-round-back'
  font='Ionicons'
   size={50}
  // style={{}}
/>,
    next: <Icon
  name='ios-arrow-round-forward'
  font='Ionicons'
   size={50}
  // style={{}}
/>
}


class portfolio extends Component {

    constructor(props) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);
        this.state = {
            exampleItems: [],
            initial: '1',
            pageOfItems: [],
            hits: []
        };
    }
    componentDidMount() {

        //this.setState({ hits: dt })
        fetch('https://larva7studio.herokuapp.com/portls')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                this.setState({ hits: data, exampleItems: data, isLoading: false })
                console.log(data)

            });

    }
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }


    render() {
        const { hits, isLoading, text, exampleItems, pageOfItems } = this.state;
        const divStyleload = ({
             backgroundColor: '#ebebeb'

        })

        const divStyle = (src) => ({
            backgroundImage: 'url(' + src + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        })

        $(document).on("click", "#ola", function(e) {
            var t = $(this).attr('data-uri')
            history.push('/workproduct/' + t)

        })
        return (
            <div className="tengahx">

  <style dangerouslySetInnerHTML={{__html: `
   @font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(fonts/AntDesign.ttf) format('truetype')}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(fonts/Entypo.ttf) format('truetype')}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(fonts/EvilIcons.ttf) format('truetype')}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(fonts/Feather.ttf) format('truetype')}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(fonts/FontAwesome.ttf) format('truetype')}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5.ttf) format('truetype')}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5_Brands.ttf) format('truetype')}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(fonts/Foundation.ttf) format('truetype')}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(fonts/Ionicons.ttf) format('truetype')}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialCommunityIcons.ttf) format('truetype')}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialIcons.ttf) format('truetype')}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(fonts/Octicons.ttf) format('truetype')}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(fonts/SimpleLineIcons.ttf) format('truetype')}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(fonts/Zocial.ttf) format('truetype')}

    .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover>.container>.row {
      min-height: 280px;
    }
    .category{
      text-transform: none !important;
    }
    .site-section{
    border-bottom: 1px solid #dee2e6 !important;
    padding-bottom: 20px;
}
     #kkp{
      max-width: 404px;
    min-width: 145px;
 }
  .media-1{
    height: 250px;
    border-radius: 3px;
  }
  #pol{
    margin: 70px;
  }
  .site-section {
    padding: 5em 0;
}
 
    li.page-number{
      display: none!important;
    }
    li.previous  {
      
      font-size: 30px;
    }
       li.next a {
     
        font-size: 30px;
    }
    .gor {
      display: none;
    }
    #curved_bg{
      width: 50px;
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
    li.disabled i{
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
    .lik{
          max-width: 1140px;
    }
.lost{
      color: #afaeab !important;
    font-family: Mor;
    font-size: 50px;
  text-align: center;
  padding-bottom: 50px;
      border-bottom: 1px solid #dee2e6 !important;
}
   .site-blocks-cover.overlay:before{background-color:  #26327c}
   @media (max-width: 992px) {
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}

#kkp {
    max-width: 100%;
    min-width: 250px;
}
.lost {
   
    font-size: 30px;
    
}
  #pol{
    margin: 30px;
  }
 .gor {
      display: block;
    }
}
`}} /> 
  <Nav />
     <Helmet>
                <meta charSet="utf-8" />
                <title> Our portofolio</title>
             </Helmet>
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
     {
       this.state.hits && this.state.hits.length > 0 ? (
      <div className="container">
        <div className="row">
          {this.state.pageOfItems.map(item =>
            <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola" data-uri={item.id} className="media-1" style={divStyle(item.thumnail)}>
               <div className="media-1-content">
                <h2>{renderHTML(item.title)}</h2>
                <span className="category">{item.kategori_name}</span>
              </div>
            </div>
          </div>
                )}
        </div> <JwPagination  pageSize={6} items={this.state.exampleItems} onChangePage={this.onChangePage}  labels={customLabels}  />
      </div>
    ):(
    
  <div className="container">
        <div className="row">
            <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola"  className="media-1" style={divStyleload} >
               
            </div>
          </div>    
            <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola"  className="media-1" style={divStyleload} >
                
            </div>
          </div> 
 <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola"  className="media-1" style={divStyleload} >
                
            </div>
          </div>
           <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola"  className="media-1" style={divStyleload} >
                
            </div>
          </div>
           <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola"  className="media-1" style={divStyleload} >
                
            </div>
          </div>
           <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola"  className="media-1" style={divStyleload} >
                
            </div>
          </div>
        </div>  
      </div>
   
     
    )}
    </section>

         <Testi />
           <Foot />
 </div>
        );
    }
}

export default translate(portfolio);