import React, { useContext } from 'react';
import { CartContext } from '../src/context/cartContext';
import Button from './AddToCartButton'
import { Box, Image, Heading } from 'grommet';
import { Link } from 'react-router-dom';

interface Props {
  name: string,
  id: number,
  price: number,
  img: string[],
  desc?: string,
  category?: string
}

export default function ProductCard(props: Props) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation();

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
    <Link to={"/product/" + props.id} style={{ textDecoration: 'none', color: 'white' }}>
      <Box
        round='small'
        pad='small'
        fill
        elevation="large"
        key={props.id}
        background="light-3"
        flex={false}
        justify="center"
        align="center"
      >
        <Heading margin="none" level='3'>{props.name}</Heading>
        <Image fit='cover' src={props.img[0]} alt="" style={{ width: '100%', maxHeight: '100%' }} />
        <p>{props.price} SEK</p>
        <Button onClick={addToCart} />
      </Box>
    </Link>
  )
}

