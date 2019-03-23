
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class testi extends Component {
constructor(props) {
    super(props);

    this.state = {
      hits: [],
       text: [],
      isLoading: false,
    };
  }
    componentDidMount() {
          this.setState({ isLoading: true });

     fetch('https://larva7studio.herokuapp.com/mdtext')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({ text: data, isLoading: false })
          console.log(data)   

      });
    
    }
    render() {

        return (
            <div>
<style dangerouslySetInnerHTML={{__html: `
#sec{
  padding: 2em 0 !important;
}
#cors{
display: block;
}
#jir{
  width: 100%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
}
#jirs{
  width: 50%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
      margin: 0 auto;
}
#jir:after{
   background: none;
}
`}} /> 


{
      this.state.text && this.state.text.length > 0 ? (

            <section id="sec" className="site-section testimonial-wrap" >




    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <h2 className="text-black h1 site-section-heading text-center">{this.state.text[0].title}</h2>
            </div>
        </div>
    </div>
    <div id="cors" className="slide-one-item home-slider owl-carousel" >
        <div>
            <div className="testimonial">
                <blockquote className="mb-5">
                    <p>&ldquo; {this.state.text[0].textmini} &rdquo;</p>
                </blockquote>
                <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div></div>
                </figure>
            </div>
        </div>
    </div>




</section>
):( 




      <section id="sec" className="site-section testimonial-wrap" >




    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 text-center">
                <h2 id="jir" className="text-black h1 site-section-heading text-center"></h2>
            </div>
        </div>
    </div>
    <div id="cors" className="slide-one-item home-slider owl-carousel" >
        <div>
            <div className="testimonial">
                <blockquote className="mb-5">
                    <p id="jirs"></p>
                </blockquote>
                <figure className="mb-4 d-flex align-items-center justify-content-center">
                    <div></div>
                </figure>
            </div>
        </div>
    </div>




</section>





)}

</div>
     );
    }
}

export default translate(testi);