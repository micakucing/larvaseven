import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class midltre extends Component {

    componentDidMount() {
    }
    render() {


        return (
          <div>
        <section className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="text-black h1 site-section-heading text-center">Featured Projects</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div id="ola" data-uri="/workproduct" data-op="1" className="media-1">
              <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" className="img-fluid" />
              <div className="media-1-content">
                <h2>Project Name 1</h2>
                <span className="category">Web Application</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div id="ola" data-uri="/workproduct" data-op="2" className="media-1">
              <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" className="img-fluid"/>
              <div className="media-1-content">
                <h2>Project Name 2</h2>
                <span className="category">Branding</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div id="ola" data-uri="/workproduct" className="media-1">
              <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" className="img-fluid"/>
              <div className="media-1-content">
                <h2>Project Name 3</h2>
                <span className="category">Website</span>
              </div>
            </div>
          </div>

          <div className="col-12 text-center mt-5">
            <a href="/portfolio" className="btn btn-primary btn-md">Show All Works</a>
          </div>

          
        </div>
      </div>
    </section>
</div>
     );
    }
}

export default translate(midltre);