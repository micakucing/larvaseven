import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class navigasi extends Component {

    componentDidMount() {

    }


    render() {
    let c, homes, abouts, works, shops;
c = window.location.hash.substr(2)

      if (c == "") {
                     homes = <li><a className="active">&nbsp;&nbsp;Home &nbsp;&nbsp;: </a></li>
                        }else{
                        homes = <li><a href="/larvaseven" >&nbsp;&nbsp;Home &nbsp;&nbsp;: </a></li>
                        }
     if (c == "about") {
                     abouts = <li><a className="active">&nbsp;&nbsp;About &nbsp;&nbsp;: </a></li>
                        }else{
                        abouts = <li><a href="/#/about" >&nbsp;&nbsp;About &nbsp;&nbsp;: </a></li>
                        }
    if (c == "portfolio") {
                     works = <li><a className="active">&nbsp;&nbsp;Works &nbsp;&nbsp;: </a></li>
                        }else{
                        works = <li><a href="/#/portfolio" >&nbsp;&nbsp;Works &nbsp;&nbsp;: </a></li>
                        }
                  if (c == "shop") {
                     shops = <li><a className="active">&nbsp;&nbsp;Shop &nbsp;&nbsp;: </a></li>
                        }else{
                        shops = <li><a href="/#/shop" >&nbsp;&nbsp;Shop &nbsp;&nbsp;: </a></li>
                        }                               

        return (
<div classNameName="tengahx">
  <style dangerouslySetInnerHTML={{__html: `
 a:hover{
       text-decoration: none;
 } 
 .active{
    font-weight: bold;
 }  
  .active:hover{
       color: #2A4CF9;

 } 
a {
    color: #2A4CF9;
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
    background-color:#F2ECE0!important;
}
.bg-light {
    background-color: #F2ECE0!important;
}
.bg-primary {
    background-color: #2A4CF9 !important;
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
	width: 100%;  background-color: #2A4CF9;  
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
    <div className="site-mobile-menu-body"></div>   
</div>
<div className="site-navbar py-4 bg-white" role="banner">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-11 col-xl-2">
                <h1 className="mb-0 site-logo"><a href="/" className="text-black h2 mb-0">LARVA7<span className="op">STUDIO</span></a></h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
                <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu mr-auto d-none d-lg-block">
                   

                        {homes}

                        {abouts}
                        {works}
                         {shops}
                         <li><a href="/blog">&nbsp;&nbsp;Blog &nbsp;&nbsp;: </a></li>
                        <li><a href="/contact">&nbsp;&nbsp;Contact &nbsp;&nbsp;: </a></li>

                    </ul>
 				<ul id="lb" className="site-menu js-clone-nav mr-auto d-none">

                        <li><a href="/larvaseven">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/portfolio">Work</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>

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