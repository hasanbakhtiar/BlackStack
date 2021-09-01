import React, { useState }  from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';



// StateLess  Component
// class AppOther extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       name: "Arzu"
//     }
//   }

  
//   render(){
//     return(
//       <h1>{this.state.name}</h1>
//     )
//   }
// }


// const MainApp =()=>{
//   return(
//     <div>
//       <App />
//       <AppOther />
//     </div>
//   )
// }


// StateFull  Component
const App =(props)=>{

   const [count, setCount] = useState(props.count);
  return(
    <div>
      <p>U clicked {count}</p>

      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
    </div>
  );
}

App.defaultProps = {
  count:0
}
// =======================================================






// StateLess  Component
class Counter extends Component{

  constructor(props){
    super(props);
    this.addCount = this.addCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
    this.state={
      count: 0
    }
  }

  addCount(){
    this.setState({
      count: this.state.count+1
    })
  }

  minusCount(){
    this.setState({
      count: this.state.count - 1
    })
  }

  
  render(){
    return(
      <div>
        <button onClick={this.minusCount}>-1</button>
        <p>{this.state.count}</p>
        <button onClick={this.addCount}>+1</button>

      </div>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
