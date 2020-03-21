import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Checkout from './Checkout';
import HomePage from './HomePage';

function App() {
  return (

    <div className="App">


      <Switch>

        <Route path="/Checkout">
          <ErrorBoundary>
            <Checkout />
          </ErrorBoundary>
        </Route>
        <Route path="/">
          <ErrorBoundary>
            <HomePage />
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
