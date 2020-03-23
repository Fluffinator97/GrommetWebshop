import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Checkout from './Checkout';
import HomePage from './HomePage';
import { CartProvider } from './context/cartContext';
import EmptyCart from './EmptyCart';

function App() {
  return (

    <div className="App">

      <CartProvider>
        <Switch>

          <Route path="/Checkout">
            <ErrorBoundary>
              <Checkout />
            </ErrorBoundary>
          </Route>
          <Route path="/EmptyCart">
            <ErrorBoundary>
              <EmptyCart />
            </ErrorBoundary>
          </Route>
          <Route path="/">
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          </Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
