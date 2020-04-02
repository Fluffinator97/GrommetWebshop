import React, { useContext } from 'react';
import { Box, Carousel, Heading, Image, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { CartContext } from '../src/context/cartContext';
import Button from './AddToCartButton'

interface Props {
  name: string,
  id: number,
  price: number,
  img: string,
  description: string,
  category?: string
}

export default function ProductView(props: Props) {
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
    <Box direction='row-responsive'
    justify='center'
    align='center'
    height='large'
    margin='medium'
    style={{flexWrap: 'wrap'}}
    >
        <Box 
        justify='center'
        alignSelf='center'
        border='all'
        key={props.id}
        style={{maxWidth: '50%', marginRight: '20px', flexWrap: 'wrap'}}
        >
            {/* <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '80%'}}/> */}
            <Carousel fill>
            <Image fit="cover"  style={{width: '100%', height: '100%'}} src={props.img} />
            <Image fit="cover" style={{width: '100%', height: '100%'}} src={'./assets/25.jpg'} />
        </Carousel>
        </Box>
        <Box
        align='center'
        style={{width: '50%'}}
        >
        <Heading level='3' color='brand'>{props.name}</Heading>
        <Heading level='4' color='brand'>{props.price}</Heading>
        <Box direction= 'row-responsive'>
            <Box 
            align="center" 
            pad="medium">
                <Button onClick={addToCart} />
            </Box>
            </Box>
            <Box >
                <p>{props.description}</p>
            </Box>
        </Box>
    </Box>
//    <Box
//     elevation="large"
//     key={props.id}
//     background="light-3"
//     flex={false}
//     justify="center"
//     align="center"
//      >
//         <Heading margin="none">{props.name}</Heading>
//         <Image fit='cover' src={props.img} alt="" style={{width: '100%', maxHeight: '100%' }}/>
//         <p>{props.price}</p>
//         {/* <p>{props.description}</p> */}
//         <Button onClick={addToCart} />
//     </Box> 
    
    )
  }