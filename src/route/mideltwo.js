  
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import { default as minifyCssString } from 'minify-css-string'


class midelteo extends Component {
constructor(props) {
    super(props);

    this.state = {
      hitss: [],
      isLoading: false,
    };
  }







    componentDidMount() {
               this.setState({ isLoading: true });

      fetch('https://larva7studio.herokuapp.com/tex')
      .then(response => response.json())
      .then(data => this.setState({ hitss: data, isLoading: false }));
    }

    render() {
const cssString = `

    #kokom{
  width: 100%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
}
#kikim{
  width: 50%;
  height: 20px;
  borderRadius: 3px;
  background: #ebebeb;
}
 
`
  const { hitss, isLoading } = this.state;

        return (
          <div>
            <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

          <section className="site-section">
      <div className="container">



      {
       this.state.hitss && this.state.hitss.length > 0 ? (
        <div className="row">
  

 {hitss.map(hit =>

          <div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind">0{hit.id}.</div>
              <h2>{hit.title}</h2>
              <p>{hit.word}</p>
            </div>
          </div>
)}


        </div>

  ):(
          <div className="row">

<div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind"></div>
              <h2 id="kokom"></h2>
              <p id="kikim"></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind"></div>
              <h2 id="kokom"></h2>
              <p id="kikim"></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="p-3 box-with-humber">
              <div className="number-behind"></div>
              <h2 id="kokom"></h2>
              <p id="kikim"></p>
            </div>
          </div>
</div>
  )}

      </div>
    </section>
</div>
     );
    }
}

export default translate(midelteo);