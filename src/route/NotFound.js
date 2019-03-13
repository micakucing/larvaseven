import React, { Component } from "react";
import { translate } from '../translations/trs'
 import $ from "jquery";

class notfound extends Component {
	
		componentDidMount() {
                                  
  }

	
  render() {
    return (
      <div className="error">
            Error 404 
       </div>
    );
  }
}
 
export default translate(notfound);