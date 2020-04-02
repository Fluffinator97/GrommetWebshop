import React, { useContext } from 'react';
import { CartContext } from '../src/context/cartContext';
import Button from './AddToCartButton'
import { Box, Image, Heading } from 'grommet';

interface Props {
  name: string,
  id: number,
  price: number,
  img: string,
  desc?: string,
  category?: string
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
    <Box
      elevation="large"
      key={props.id}
      background="light-3"
      flex={false}
      justify="center"
      align="center"
    >
      <Heading margin="none">{props.name}</Heading>
      <Image fit='cover' src={props.img} alt="" style={{ width: '100%', maxHeight: '100%' }} />
      <p>{props.price}</p>
      {/* <p>{props.description}</p> */}
      <Button onClick={addToCart} />
    </Box>

  )
}
