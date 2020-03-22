import React, { Component } from "react";
import CartItem from "./Cartitems";

interface Props{
value: { cart: any; }
}
export default class CartList extends Component<Props> {
  render() {
    const { cart } = this.props.value;

    return (
      <div className="container-fluid">
        {cart.map((value: { id: number}) => (
          <CartItem key={value.id} item={cart} value={cart} />
        ))}
      </div>
    );
  }
}
