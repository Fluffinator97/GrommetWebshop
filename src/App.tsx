import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navBar";
import ProductList from "./productList";
import Details from "./Details";
import Cart from "./ShoppingCart";
import Modal from "./Modal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
