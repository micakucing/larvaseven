  
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
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

  const { hitss, isLoading } = this.state;

        return (
          <div>
          <section className="site-section">
      <div className="container">
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
      </div>
    </section>
</div>
     );
    }
}

export default translate(midelteo);