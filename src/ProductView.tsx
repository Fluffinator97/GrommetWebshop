import React, { useContext } from 'react';
import { Box, Carousel, Heading, Image, Grommet } from "grommet";

import { CartContext } from '../src/context/cartContext';
import Button from './AddToCartButton'

import { Product } from './allProducts';

interface Props {
    product?: Product
}

export default function ProductView(props: Props) {

 const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
      let itemInCart = cart.find((element: { id: number }) => element.id === props.product?.id)
      if (itemInCart === undefined) {
        itemInCart = { id: props.product?.id, price: props.product?.price, quantity: 1 };
        setCart((currentState: any) => [...currentState, itemInCart]);
      }
      else {
        itemInCart.quantity += 1
        setCart((currentState: any) => [...currentState]);
      }
    }
    
    if (!props.product) {
        return (
            <Box>
                <Heading level={3}>
                    Ooops, vi kunde inte hitta produkten du letar efter..
                </Heading>
            </Box>
        )
    }

    return (
        <Box direction='row'
            justify='center'
            // key={props.id}
            align='center'
            height='large'
            margin='medium'
            wrap={true}
        >
            <Box 
                fill
                border='all'
                
                
                style={{width: '50%', height: '50%' , marginRight: '20px', flexWrap: 'wrap'}}
            >
                {/* <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '80%'}}/> */}
                <Carousel fill play={5000}>
                    <Image fit="contain"  style={{width: '100%', height: '100%'}} src={props.product.img} />
                    <Image fit="contain" style={{width: '100%', height: '100%'}} src={props.product.img2} />
                </Carousel>
            </Box>
            <Box>

                <Box
                    align='center'
                    justify='center'
                    direction='column'

    >
                    <Heading level='1' color='brand'>{props.product.name}</Heading>
                    <Heading level='4' color='brand'>{props.product.price} sek</Heading>

                    <Box direction= 'row-responsive'>
                        <Box align="center" pad="medium">
                            <Button onClick={addToCart} />
                        </Box> 
                    </Box>
                </Box>
                    <Box flex>
                        <Heading level='3'>{props.product.description}</Heading>
                    </Box>
            </Box>
        </Box>
    );
}
