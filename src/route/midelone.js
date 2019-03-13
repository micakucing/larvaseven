 
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class midelone extends Component {

    componentDidMount() {
    }
    render() {


        return (
<div>
  <style dangerouslySetInnerHTML={{__html: `

.hh2{
  padding: 13px;
}

`}} /> 
    <section className="section ft-feature-1">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 bg-black w-100 ft-feature-1-content">
            <div className="row align-items-center">
                <h2 className="hh2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
              <div className="col-lg-5">
                <div className="h-100">
                  <div className="mb-5 d-flex align-items-center">
                  </div>
                  <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" className="img-feature img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 ml-auto">
                <div className="mb-5">
                  <h3 className="d-flex align-items-center"><span className="icon icon-phonelink mr-2"></span><span>Web Design</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                  <p><a href="#">Read More</a></p>
                </div>
                <div>
                  <h3 className="d-flex align-items-center"><span className="icon icon-extension mr-2"></span><span>Branding &amp; Identity</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-5">
                  <h3 className="d-flex align-items-center"><span className="icon icon-format_paint mr-2"></span><span>Art Direction</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                  <p><a href="#">Read More</a></p>
                </div>
                <div>
                  <h3 className="d-flex align-items-center"><span className="icon icon-question_answer mr-2"></span><span>Copywriting</span></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>      
    </div>
     );
    }
}

export default translate(midelone);