import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {CartProvider} from 'react-use-cart';



const App =()=>{
  return(
    <div>
   <CartProvider>
   <Header />
      <Cart />
   </CartProvider>
    </div>
  );
}


ReactDOM.render(
<App />,
  document.getElementById('root')
);

