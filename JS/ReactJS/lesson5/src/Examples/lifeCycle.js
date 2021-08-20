// https://az.reactjs.org/docs/react-component.html

import React from "react";
import ReactDOM from "react-dom";



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.changeBook = this.changeBook.bind(this);
    
    this.state = {
      name: "Baku",
    };
    console.log("constructor runing...");
  }

  componentDidMount(){
    console.log("componentDidMount runing...");

  }

  componentDidUnmount(){
    console.log("componentDidMount runing...");

  }

  componentDidUpdate(){
    console.log("componentDidUpdate runing...");

  }



  changeBook() {
    this.setState({
      name: "Ankara",
    });
  }

 
 
 

  render() {
    return (
      <div>
        <h1>Book Name</h1>
        <p>{this.state.name}</p>
        <p>1984</p>
        <p>1984</p>
        <p>1984</p>
        <p>1984</p>
        <p>1984</p>
        <button onClick={this.changeBook}>Next</button>
      </div>
    );
    
  }
  
}

ReactDOM.render(<App />, document.getElementById("root"));
