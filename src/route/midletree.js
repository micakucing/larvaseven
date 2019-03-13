import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class midltre extends Component {

    componentDidMount() {
    }
    render() {


        return (
          <div>
        <section class="site-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-8 text-center">
            <h2 class="text-black h1 site-section-heading text-center">Featured Projects</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <a href="/product" class="media-1">
              <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" class="img-fluid">
              <div class="media-1-content">
                <h2>Project Name 1</h2>
                <span class="category">Web Application</span>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a href="/product" class="media-1">
              <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" class="img-fluid">
              <div class="media-1-content">
                <h2>Project Name 2</h2>
                <span class="category">Branding</span>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a href="/product" class="media-1">
              <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" class="img-fluid">
              <div class="media-1-content">
                <h2>Project Name 3</h2>
                <span class="category">Website</span>
              </div>
            </a>
          </div>

          <div class="col-12 text-center mt-5">
            <a href="/portfolio" class="btn btn-primary btn-md">Show All Works</a>
          </div>

          
        </div>
      </div>
    </section>
</div>
     );
    }
}

export default translate(midltre);