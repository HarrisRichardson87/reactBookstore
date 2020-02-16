import React, { Component } from 'react';
import './App.css';
import Nav from'./components/Nav';
import Book from'./components/Book';
import Footer from'./components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listDataFromChild: ''
    };    
}
  myCallback (dataFromChild){
      this.setState({listDataFromChild:dataFromChild})
  
}


render(){

return (
    <div className="App">
      <Nav callbackFromParent={this.myCallback.bind(this)}></Nav>
        <Book searchProp={this.state.listDataFromChild}></Book>
      <Footer></Footer>
    </div>
  );
}}

export default App;
