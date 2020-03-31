import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MyCart from './Checkout/MyCart';
import HomePage from './HomePage';
import { CartProvider } from './context/cartContext';
import Checkout from './Checkout/Checkout';
import ProductPage from './ProductPage';

function App() {
  return (
    
      <div className="App">
        <CartProvider>
          <Switch>
            <Route path="/MyCart" component={MyCart}></Route>
            <Route path="/Checkout" component={Checkout}></Route>
            <Route path="/" component={ProductPage}></Route>
          </Switch>
        </CartProvider>
      </div>

  );
}

export default App;
