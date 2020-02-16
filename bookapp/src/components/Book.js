import React from 'react';
class Book extends React.Component {
    
    state = {
        search:'',
        data:[]
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1h3vb3')
          .then(response => response.json())
          .then(data => this.setState({ data:data.books }));
      }

    render() {
        let books = [];
        let copy = this.state.data
    
        copy = copy.filter((books)=>{
            
            return books.titulo.toLowerCase().match(this.props.searchProp.toLowerCase())
        })
        console.log(copy)
        
        copy.forEach((item, index) =>{
     
            books.push(
              <div id="flip-card" key={index}>
              <a  infobar="true" className="thumbnail fancybox"  alt={item.titulo} href={item.detalle} data-fancybox="images" data-width="2048"
                  clickOutside='true' closeClick="true"
                  data-height="1365">
                  <div id="flip-card-inner">

                      <div id="flip-card-front">
                          <img src={item.detalle} alt={item.titulo} height="100%" width="100%"></img>
                      </div>

                      <div id="flip-card-back">
                          <h6>{item.titulo}</h6>
                          <p>{item.descripion}</p>
                          <p>{item.idioma }</p>
                      </div>

                 </div>
              </a>

          </div>
          )
            
        })
       
      return <div className="container" id='bookContainter'>{books}</div>;
    }
  }
  export default Book;
  