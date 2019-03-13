  
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class midelteo extends Component {

    componentDidMount() {
    }
    render() {


        return (
          <div>
          <section className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind">01.</div>
              <h2>Our Values</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind">02.</div>
              <h2>Our Mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind">03.</div>
              <h2>Our Philosophy</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
     );
    }
}

export default translate(midelteo);