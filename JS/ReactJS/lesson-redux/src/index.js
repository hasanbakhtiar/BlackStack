import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

const initialState = {
  count: 0
}


const counterReducer = (state = initialState, action) => {
  switch (action.type) {

    case "INCREMENT":
      return {
        count: state.count + 1
      }

    case "DECREMENT":
      return {
        count: state.count - 1
      }

    case "RESET":
      return {
        count: 0
      }

    default:
      return state
  }
}

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "RESET"
})



store.dispatch({
  type: "INCREMENT"
})


store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "DECREMENT"
})






const App = () => {
  return (
    <h1>Hello</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

