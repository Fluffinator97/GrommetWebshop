import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MyCart from './Checkout/MyCart';
import HomePage from './HomePage';
import { CartProvider } from './context/cartContext';
import Checkout from './Checkout/Checkout';
import ProductPage from './ProductPage';
import { deepMerge } from "grommet/utils";
import { Grommet, grommet } from 'grommet';


// rename custombreackpoint to customTheme
const customBreakpoints = deepMerge(grommet, {
  global: {
      breakpoints: {
          small: {
              value: 600
          },
          medium: {
              value: 900
          },
          large: 3000
      }
  }
});




function App() {
  
  return (
    <Grommet theme={customBreakpoints}>
      <div className="App">
        <CartProvider>
          <Switch>
            <Route path="/MyCart" component={MyCart}/>
            <Route path="/Checkout" component={Checkout}/>
            <Route path="/product/:id" component={ProductPage}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </CartProvider>
      </div>
    </Grommet>
  );
}

export default App;
