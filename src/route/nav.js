import React, { Component } from "react";
import { translate } from '../translations/trs';
import { createHashHistory } from 'history'

import $ from "jquery";
const history = createHashHistory()

class navigasi extends Component {
    constructor(props) {
        super(props);
    this.timeout = null;

    }
    componentDidMount() {
 if (this.timeout) {
      clearTimeout(this.timeout);
    }
    }

    hm = () => {


    }
    ab = () => {
 
       

    }
    pr = () => {
        

    }

    sh = () => {
     
    }

    bl = () => {
      

    }
    ct = () => {
        $('body').removeClass('offcanvas-menu')


        history.push('/larvaseven/#/contact')

    }
    render() {
        $(document).on("click", "#hm", function(e) {

            $('body').removeClass('offcanvas-menu')
$('.loadmaimage').show()
$(window).scrollTop(0)
             setTimeout(() => {


$('.loadmaimage').fadeOut()
            history.push('/')
                 

                 }, 0)

        })
        $(document).on("click", "#ab", function(e) {

            $('body').removeClass('offcanvas-menu')
            $('.loadmaimage').show()
$(window).scrollTop(0)
            setTimeout(() => {
                $('.loadmaimage').fadeOut()
 history.push('/about')

    }, 0)
        })
             $(document).on("click", ".cp", function(e) {

            $('body').removeClass('offcanvas-menu')
            $('.loadmaimage').show()
$(window).scrollTop(0)
            setTimeout(() => {
                $('.loadmaimage').fadeOut()
 history.push('/work')

    }, 0)
        })
        $(document).on("click", "#pr", function(e) {

            $('body').removeClass('offcanvas-menu')
                 $('.loadmaimage').show()
$(window).scrollTop(0)
 setTimeout(() => {
                    $('.loadmaimage').fadeOut()

 history.push('/work')
    }, 0)
        })


 $(document).on("click", "#ola", function(e) {
 
 
            $('body').removeClass('offcanvas-menu')
                 $('.loadmaimage').show()
$(window).scrollTop(0)
 setTimeout(() => {
                    $('.loadmaimage').fadeOut()

 
    }, 0)
        })


        $(document).on("click", "#sh", function(e) {

            $('body').removeClass('offcanvas-menu')

            history.push('/shop')

        })
         $(document).on("click", "#bl", function(e) {

            $('body').removeClass('offcanvas-menu')
            history.push('/blog')

        })
$(document).on("click", "#ch", function(e) {
    $('.loadmaimage').show()
$(window).scrollTop(0)
            $('body').removeClass('offcanvas-menu')
             setTimeout(() => {
                                    $('.loadmaimage').fadeOut()

            history.push('/contact')
             }, 0)
})
        let c, homes, abouts, works, shops, kontak;
        c = window.location.hash.substr(2)
   var t = window.location.href
    var o = t.split("/")[4]
 

        if (c == "") {
            homes = <a className="activex"><li>&nbsp;&nbsp;Home &nbsp;&nbsp;:</li> </a>
        } else {
            homes = <a href="/" id="ppl"><li>&nbsp;&nbsp;Home &nbsp;&nbsp;: </li></a>
        }
        if (c == "about") {
            abouts = <a className="activex"><li>&nbsp;&nbsp;About &nbsp;&nbsp;:</li> </a>
        } else {
            abouts = <a href="#/about" id="ppl"><li>&nbsp;&nbsp;About &nbsp;&nbsp;:</li> </a>
        }
        if (c == "work" || o == "workproduct") {
            works = <a id="aloy" className="activex"><li>&nbsp;&nbsp;Works &nbsp;&nbsp;:</li> </a>
        } else {
            works = <a href="#/work" id="ppl"><li>&nbsp;&nbsp;Works &nbsp;&nbsp;:</li> </a>
        }
        
        if (c == "shop") {
            shops = <li><a className="activex">&nbsp;&nbsp;Shop &nbsp;&nbsp;: </a></li>
        } else {
            shops = <li><a href="/larvaseven/#/shop" >&nbsp;&nbsp;Shop &nbsp;&nbsp;: </a></li>
        }
    if(c =="contact"){
                           kontak = <a className="activex"><li>&nbsp;&nbsp;Contact &nbsp;&nbsp;:</li> </a>

    }else{
                        kontak = <a href="#/contact" id="ppl"><li>&nbsp;&nbsp;Contact &nbsp;&nbsp;: </li></a>


    }

        return (
            <div className="tengahx">
  <style dangerouslySetInnerHTML={{__html: `
 a:hover{
       text-decoration: none;
 } 
 

 .activex{
    position: relative;
       z-index: 1;
 }
  .activex::before{
   position:fixed;
    z-index:-1;
  }

 .activex::before{
    color: #000;
   width: 100%;
   font-weight: bold;
   z-index: -1;
    content: " ";
    background-image: url(/images/br.png);
    position: absolute;
    left: 0;
    top: 0;
    height:20px;
    display: block;

 }

 #hm, #ab, #pr, #ch{
    cursor: pointer;
 }
a li{
 list-style: none;
  position: relative;
 }
 #ppl{
    position: relative;
       z-index: 1;
 }
  #ppl::before{
   content:url(/images/br.png);
  position:fixed;
  z-index:-1;
  top:0;
  left:0;
  display:none;
  }
   #ppl:hover{
    color: #000;
}
 #ppl:hover::before{
    color: #000;
   width: 100%;
   z-index: 0;
    content: " ";
    background-image: url(/images/br.png);
    position: absolute;
    left: 0;
    top: 0;
    height:20px;
    display: block;

 }
 #lb li div{
    color: #fff;
 }
 #logox{
         background-image: url(/images/logo.jpg);
    height: 70px;
    width: 70px;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 }
a {
    color: #000;

}

svg .iconatas {
    fill: #2A4CF9;
}

.btn-primary {
    background-color: #2A4CF9;
    border-color: #2A4CF9;
}
.top-bar {
     background-color: #F2EBE0;
}
.btn-primary:hover {
    background-color: #2d44b9;
    border-color: #2d44b9;
}
.bg-white {
    background-color:#fff!important;
}
.bg-light {
    background-color: #fff!important;
}
.bg-primary {
    background-color: #fff !important;
}
.box-with-humber .number-behind {
     color: #DDD6C8;
}
a.bg-primary:hover,
a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
background-color: #2d44b9;
}
.op{
   color: #2A4CF9;
}

#sps{
    position: relative;
    width: 100px;
        color: #fff;
    border-radius: 5px;
    border: 1px solid #6d6161;
}
.site-mobile-menu{
    width: 100%;  background-color: #2C3379;  
}
.xsc{
    font-size: 13px!important;
    position: absolute; top: 8px;
    font-family: Mor;
    right: 10px;
    text-transform: uppercase;
}

.site-mobile-menu-body{
    padding-top: 100px;
}

.site-mobile-menu .site-nav-wrap {

    margin-top: 130px;

}


.py-3{
position: relative; top: 3px;
}
   @media (max-width: 900px){
 
.text-black {
  font-size: 25px;
}
.col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 90%;
    flex: 0 0 90%;
    max-width: 90%;
}
}
   @media (max-width: 480px){

.col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 85%;
    flex: 0 0 85%;
    max-width: 85%;
}

}`}} /> 
<div className="site-mobile-menu"> 
    <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">


            <span id="sps" className="icon-close2 js-menu-toggle"> <span className="xsc">Close</span></span>
        </div>
    </div>
    <div className="site-mobile-menu-body">

<ul id="lb" className="site-nav-wrap">
<li><div id="hm">Home</div>
</li><li><div id="ab">About</div>
</li><li><div id="pr">Work</div></li>{/*<li><div id="sh">Shop</div></li><li><div id="bl">Blog</div></li>*/}
<li><div id="ch">Contact</div></li></ul>

    </div>   
</div>
<div className="site-navbar py-4 bg-white" role="banner">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-11 col-xl-2">
                <h1 className="mb-0 site-logo"><a href="/larvaseven" id="logox" className="text-black h2 mb-0"></a></h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
                <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu mr-auto d-none d-lg-block">
                   

                        {homes}
                        {abouts}
                        {works}
                        {kontak}
                    </ul>
                <ul id="lb" className="site-menu js-clone-nav mr-auto d-none">

                        <li><div id="hm" >Home</div></li>
                        <li><div id="ab"  >About</div></li>
                        <li><div id="pr"  >Work</div></li>
                        <li><div id="ch" >Contact</div></li>

                    </ul>
                </nav>
            </div>
            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" >
            <a href="#" className="site-menu-toggle js-menu-toggle text-black">
            <span className="icon-menu h3"></span>
            </a>
            </div>
        </div>
    </div>
    </div> 
</div>
        );
    }
}

export default translate(navigasi);