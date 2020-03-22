import React, { useContext } from 'react';
import { CartContext } from '../src/context/cartContext';
import Button from './AddToCartButton'

interface Props {
  name: string,
  id: number,
  price: number
}

export default function Product(props: Props) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    let itemInCart = cart.find((element: { id: number }) => element.id === props.id)
    if (itemInCart === undefined) {
      itemInCart = { id: props.id, price: props.price, quantity: 1 };
      setCart((currentState: any) => [...currentState, itemInCart]);
    }
    else {
      itemInCart.quantity += 1
      setCart((currentState: any) => [...currentState]);
    }

    


  }

  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <Button onClick={addToCart} />
      <hr />
    </div>
  )
}