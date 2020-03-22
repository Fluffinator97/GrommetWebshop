import React, { Component } from "react";
import CartColumns from "./CartDisplay";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "./context/cartContext";
import EmptyCart from "./EmptyCart";
interface Props{
    history: any
}
export default class Store extends Component<Props>{
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                 
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value}  history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
