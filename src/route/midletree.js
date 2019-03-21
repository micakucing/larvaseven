import React, { Component } from "react";
import { translate } from '../translations/trs';
import $ from "jquery";
import { default as minifyCssString } from 'minify-css-string'
import { createHashHistory } from 'history'
 
 const history = createHashHistory()
const cssString = `
 #kkp{
      max-width: 404px;
    min-width: 145px;
 }
  .media-1{
    height: 250px;
    border-radius: 3px;
  }
  #pol{
    margin: 70px;
  }
@media (max-width: 992px) {
 .text-center h1{
    font-size: 22px;
    line-height: 1.3;
}
.site-section{
      padding: 3em 0;
}
#kkp {
    max-width: 100%;
    min-width: 250px;
}
  #pol{
    margin: 30px;
  }
}


`
class midltre extends Component {
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

       fetch('https://larva7studio.herokuapp.com/product')
      .then(response => response.json())
      .then(data => this.setState({ hits: data, isLoading: false }));

 fetch('https://larva7studio.herokuapp.com/mdtext')
    .then(response => {
      return response.json();
    })
    .then((data) => {
      this.setState({ text: data[0], isLoading: false })
          console.log(data[0])   

      });
    
 
 
    }
    render() {
  const { hits, isLoading, text } = this.state;

     const divStyle = (src) => ({
      backgroundImage: 'url(' + src + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    })



$(document).on("click", "#ola", function(e) {
           var t = $(this).attr('data-uri')
             history.push('/workproduct/'+t)

            

        })
        return (
 

          <div>

  <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

 {
       this.state.hits && this.state.hits.length > 0 ? (

        <section className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
             <div><h2 className="text-black h1 site-section-heading text-center">{this.state.text.title}</h2>
            <p className="lead">{this.state.text.textmini}</p></div> 
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="pol" className="row">
      {hits.map(hit =>
 
          <div id="kkp" className="col-md-6 col-lg-4"  >
            <div id="ola" data-uri={hit.id} className="media-1" style={divStyle(hit.thumnail)}>
               
              <div className="media-1-content">
                <h2>{hit.title}</h2>
                <span className="category">{hit.kategori_name}</span>
              </div>
            </div>
          </div>
   )}
          <div className="col-12 text-center mt-5">
            <a href="/portfolio" className="btn btn-primary btn-md">Show All Works</a>
          </div>

          
        </div>
      </div>
    </section>
    ):(<div></div>)}
</div>
     );
    }
}

export default translate(midltre);