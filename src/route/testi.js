
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class testi extends Component {

    componentDidMount() {
    }
    render() {


        return (
            <div>
              <style dangerouslySetInnerHTML={{__html: `

#sec{
  padding: 3em 0 !important;
}
#cors{
display: block;
}
`}} /> 
            <section id="sec" className="site-section testimonial-wrap" >
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <h2 className="text-black h1 site-section-heading text-center">Testimonials</h2>
            </div>
        </div>
    </div>
    <div id="cors" className="slide-one-item home-slider owl-carousel" >
        <div>
            <div className="testimonial">
                <blockquote className="mb-5">
                    <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                </blockquote>
                <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div></div>
                </figure>
            </div>
        </div>
 
    </div>
</section></div>
     );
    }
}

export default translate(testi);