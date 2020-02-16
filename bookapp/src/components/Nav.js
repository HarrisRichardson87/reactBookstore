
import React, { Component } from "react";


class Nav extends Component {

   onChange = (e) => {
    this.props.callbackFromParent(e.target.value)
  };
  
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
        <a className="navbar-brand">
          <img src="../book.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            bookApp
        </a>
 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
     <span className="navbar-toggler-icon"></span>
   </button>
 
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
           </ul>
         <div className="my-2 my-lg-0">
            <input type="text" placeholder="Search" onKeyUp={this.onChange} /> 
         </div>
     </div>
 </nav>
    )
  }
}

export default Nav;
  
