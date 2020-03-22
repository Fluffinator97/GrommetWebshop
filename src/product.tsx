import React, { useContext } from 'react'
import { CartContext } from '../src/context/cartContext'
import Button from './AddToCartButton'

interface Props{
name: string,
price:number
}

export default function Product(props:Props){
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price };
    setCart((currentState: any) => [...currentState, tshirt]);
  }
  
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <Button onClick={addToCart}/>
      <hr />
    </div>
  )
}