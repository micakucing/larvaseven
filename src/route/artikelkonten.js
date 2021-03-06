import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import Testi from "./testi";
import Foot from "./foot";
import Nav from "./nav";
import { createHashHistory } from 'history'
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import TextTruncate from 'react-text-truncate';
import { default as minifyCssString } from 'minify-css-string'
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa'

import { ShareButton } from 'react-custom-share';
import { css } from 'emotion';

const cssString = `

 @font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(fonts/AntDesign.ttf) format('truetype')}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(fonts/Entypo.ttf) format('truetype')}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(fonts/EvilIcons.ttf) format('truetype')}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(fonts/Feather.ttf) format('truetype')}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(fonts/FontAwesome.ttf) format('truetype')}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5.ttf) format('truetype')}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(fonts/FontAwesome5_Brands.ttf) format('truetype')}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(fonts/Foundation.ttf) format('truetype')}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(fonts/Ionicons.ttf) format('truetype')}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialCommunityIcons.ttf) format('truetype')}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(fonts/MaterialIcons.ttf) format('truetype')}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(fonts/Octicons.ttf) format('truetype')}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(fonts/SimpleLineIcons.ttf) format('truetype')}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(fonts/Zocial.ttf) format('truetype')}
.site-section{
    border-bottom: 1px solid #dee2e6 !important;
}
    .site-blocks-cover.inner-page-cover, .site-blocks-cover.inner-page-cover>.container>.row {
      min-height: 280px;
    }
     #kkp{
      max-width: 404px;
    min-width: 145px;
 }
 .col-md-8 > p a{
  color: #6bb1ea !important;
  font-weight: bold;
 }
  .media-1{
    height: 250px;
    border-radius: 3px;
  }
  .media-8 {
    position: relative;
    display: block;
    height: 150px;
    overflow: hidden;
    margin-bottom: 20px;
}
  .ttls{
        font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 10px;
    font-family: Mor;
    border-top: 1px solid #B2A89F;
  }
  .xsa{
        font-size: 15px;
    color: #B2A89F;
    font-weight: normal;
    text-transform: uppercase;
  }
  #pol{
    margin: 70px;
  }
  .col-md-8 img {
    width: 100%;
  }
  .col-md-8 iframe{
    width: 100%;
    height: 350px;
  }
  .site-section {
    padding: 5em 0;
}
    .site-section{
      padding-bottom: 0;
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
.lnk span{
  color: #B2A89F;
}
        #kokoms{
  width: 10%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
}
    #kokom{
  width: 50%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
}
 
#kikim{
  width: 100%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
  color:  #ebebeb;
}
.lost{
      color: #afaeab !important;
    font-family: Mor;
    font-size: 50px;
  text-align: center;
  padding-bottom: 50px;
      border-bottom: 1px solid #dee2e6 !important;
}
#boxed{
  width: 100%;
  height: 150px;
  background-color: #ebebeb;
  margin-bottom: 20px;
}
.col-md-8 {
 margin-bottom: 30px;
}
.col-lg-6 {
    margin-bottom: 30px;
}
#kkio{
     width: 100%;
     padding: 40px;
}
#koriu{
      font-size: 18px;
    font-weight: bold;
    color: #B2A89F;
    font-family: Mor;
    padding-bottom: 20px;
}
.wid{
      text-align: right;
}
.rcs-button{
border: none;
background: none;
}
.rcs-button svg{
  color: #B2A89F;
  width: 20px;
  height: 20px;
}
#kolsa{
  padding: 60px;
  padding-top: 0;
  padding-left: 100px;
      padding-right: 0;
}
   .site-blocks-cover.overlay:before{background-color:  #26327c}
   @media (max-width: 992px) {
    .col-md-8 {
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.xsa {
    font-size: 12px;
    
}
    .col-6{
      flex: 0 0 100%;
    max-width: 100%;
    }
      .media-8 {
         margin-bottom: 30px;

    height: 250px;
     
}
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}
#kolsa{
  padding: 0;
  padding-top: 30px;
  margin-top: 20px;
      border-top: 1px solid #B2A89F;
}
 .ttls{
        font-size: 30px;
    
  }
.col-lg-6 {
    -webkit-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
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



`
const history = createHashHistory()
const propTypes = {

    initialPage: PropTypes.number
}



class artikelkonten extends Component {

    constructor(props) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);
        this.state = {
            exampleItems: [],
            initial: '1',
            pageOfItems: [],
            hits: [],
            hitss: [],
            isFlushed: false

        };
    }
    componentDidMount() {

        //this.setState({ hits: dt })
        fetch('https://larva7studio.herokuapp.com/art/' + this.props.match.params.id)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                this.setState({ hits: data, isLoading: false })


                fetch('https://larva7studio.herokuapp.com/catart/' + data[0].cat + '/' + this.props.match.params.id)
                    .then(response => {


                        return response.json();
                    })
                    .then((datas) => {

                        this.setState({ hitss: datas })
                        console.log(datas)

                    })






            });



    }


    componentWillReceiveProps(){}

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }


    render() {
        const { hits, hitss, isLoading, text, exampleItems, pageOfItems } = this.state;
        const divStyleload = ({
            backgroundColor: '#ebebeb'

        })

        const divStyle = (src) => ({
            backgroundImage: 'url(' + src + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        })


        $(document).on("click", '.lnk', function(e) {
            window.location.reload();

        })
        $(document).on("click", "#ola", function(e) {
            var t = $(this).attr('data-uri')
            //history.push('/workproduct/' + t)

        })

        const u = window.location
        const tshareButtonProps = {
            url: u,
            network: "Twitter",
            text: this.state.hits && this.state.hits.length > 0 ? hits[0].artikel_title : null,
            media: this.state.hitss && this.state.hitss.length > 0 ? hitss[0].image_url : null,
            longtext: this.state.hitss && this.state.hitss.length > 0 ? hitss[0].clean : null
        };
        const fshareButtonProps = {
            url: u,
            network: "Facebook",
            text: this.state.hits && this.state.hits.length > 0 ? hits[0].artikel_title : null,
            media: this.state.hitss && this.state.hitss.length > 0 ? hitss[0].image_url : null,
            longtext: this.state.hitss && this.state.hitss.length > 0 ? hitss[0].clean : null
        };
        const eshareButtonProps = {
            url: u,
            network: "Email",
            text: this.state.hits && this.state.hits.length > 0 ? hits[0].artikel_title : null,
            media: this.state.hitss && this.state.hitss.length > 0 ? hitss[0].image_url : null,
            longtext: this.state.hitss && this.state.hitss.length > 0 ? hitss[0].clean : null
        };

        return (
            <div className="tengahx">
  <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

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
     {
       this.state.hits && this.state.hits.length > 0 ? (
      <div className="container">
       <Helmet>
                <meta charSet="utf-8" />
                <title>{hits[0].artikel_title}</title>
             </Helmet>
     <div className="row no-gutters">
    
  <div className="col-12 col-sm-6 col-md-8">
  <div className="wid">
 <ShareButton {...fshareButtonProps}>
  <FaFacebook />
</ShareButton>
 <ShareButton {...tshareButtonProps}>
  <FaTwitter />
</ShareButton>
 <ShareButton {...eshareButtonProps}>
  <FaEnvelope />
</ShareButton>
</div>
  <div className="ttls">{hits[0].artikel_title}<div className="xsa">{hits[0].tanggal}</div></div>{renderHTML(hits[0].artikel_konten)}</div>
  <div id="kolsa" class="col-6 col-md-4">
  <div id="koriu">RELEATED CONTENT</div>
{this.state.hitss.map(item =>
<div  className="cll mb-4 mb-lg-4">
                <div className="h-entry">
                   <div id="ola"  className="media-8" style={divStyle(item.image_url)}></div>
                  <h2 className="font-size-regular"></h2>
                  <p><a  className="lnk" href={'#/articles-data/' + item.id}  ><TextTruncate
    line={2}
    truncateText="…"
    text={item.clean}
   
/></a></p>
                </div> 
              </div>

   )}

  </div>
</div>
      </div>
    ):(
    
  <div className="container">
        <div className="row">
 
 <div className="col-md-9 col-lg-9 mb-4 mb-lg-4">
                <div className="h-entry">
                  <div   id="boxed" ></div>
                   <div id="kikim" className="meta mb-4">Theresa Winston <span className="mx-2" id="kikim"></span> Jan 18, 2019<span className="mx-2"></span> <a href="#" id="kikim">News</a></div>
                  <p id="kikim">fdfdfdfgdfggdfggfgggfghhjj
                  hghgjhjghjgj</p>
                    <p id="kikim">fdfdfdfgdfggdfggfgggfghhjj
                  hghgjhjghjgj</p>
                    <p id="kikim">fdfdfdfgdfggdfggfgggfghhjj
                  hghgjhjghjgj</p>
                    <p id="kikim">fdfdfdfgdfggdfggfgggfghhjj
                  hghgjhjghjgj</p>
                        <p id="kikim">fdfdfdfgdfggdfggfgggfghhjj
                  hghgjhjghjgj</p>
                </div> 

              </div>
              
<div className="col-md-2 col-lg-2 mb-2 mb-lg-2">
                <div className="h-entry">
                  <div   id="boxed" ></div>
                                      <div   id="boxed" ></div>
          
         
         

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

export default translate(artikelkonten);