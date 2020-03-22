import React, { Component } from "react";
import Product from "./product";
import { storeProducts } from "./data";
import { ProductConsumer } from "./context/cartContext";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {

    return (
      <React.Fragment>
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

