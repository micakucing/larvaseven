 
import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
class midelone extends Component {
constructor(props) {
    super(props);

    this.state = {
      xts: [],
      satu:[],
      dua:[],
      tiga:[],
      empat:[],
      isLoading: false,
    };
  }
    componentDidMount() {
         this.setState({ isLoading: true });
fetch('https://larva7studio.herokuapp.com/mddt')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({ xts: data[0], isLoading: false })
           

      });
      fetch('https://larva7studio.herokuapp.com/icm')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({
       satu: data[0], 
        dua: data[1],
        tiga: data[2],
        empat: data[3], isLoading: false })
 
      });

    }
    render() {
  const { xts, isLoading, satu, dua,tiga,empat } = this.state;


        return (
<div>
  <style dangerouslySetInnerHTML={{__html: `
#fs{
  font-size: 30px;
  margin-right: 0.5rem !important;
}
.hh2{
  padding: 13px;
}

`}} /> 
    <section className="section ft-feature-1">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-12 bg-black w-100 ft-feature-1-content">
            <div className="row align-items-center">
                <h2 className="hh2">{this.state.xts.text}</h2>
              <div className="col-lg-5">
                <div className="h-100">
                  <div className="mb-5 d-flex align-items-center">
                  </div>
                  <img src="https://colorlib.com/preview/theme/chimper/images/about_1.jpg" alt="Image" className="img-feature img-fluid" />
                </div>
              </div>
              <div className="col-lg-3 ml-auto">
                <div className="mb-5">
                  <h3 className="d-flex align-items-center"><i id="fs" className={this.state.satu.icon}></i><span>{this.state.satu.title}</span></h3>
                  <p>{this.state.satu.isi}</p>
                 </div>
                <div>
                 <h3 className="d-flex align-items-center"><i id="fs" className={this.state.dua.icon}></i><span>{this.state.dua.title}</span></h3>
                  <p>{this.state.dua.isi}</p>
                 </div>
              </div>
              <div className="col-lg-3">
                <div className="mb-5">
                  <h3 className="d-flex align-items-center"><i id="fs" className={this.state.tiga.icon}></i><span>{this.state.tiga.title}</span></h3>
                  <p>{this.state.tiga.isi}</p>
                 </div>
                <div>
                  <h3 className="d-flex align-items-center"><i id="fs" className={this.state.empat.icon}></i><span>{this.state.empat.title}</span></h3>
                  <p>{this.state.empat.isi}</p>
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