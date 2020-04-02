import React, { useContext } from 'react';
import { Box, Carousel, Heading, Image, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { CartContext } from '../src/context/cartContext';
import Button from './AddToCartButton'
import { Alert } from 'grommet-icons';
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
        <Box direction='row-responsive'
            justify='center'
            // key={props.id}
            align='center'
            height='large'
            margin='medium'
            style={{flexWrap: 'wrap'}}
        >
            <Box 
                justify='center'
                alignSelf='center'
                border='all'
                
                style={{width: '50%', height: '50%' , marginRight: '20px', flexWrap: 'wrap'}}
            >
                {/* <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '80%'}}/> */}
                <Carousel fill>
                <Image fit="cover"  style={{width: '100%', height: '100%'}} src={props.product.img} />
                <Image fit="cover" style={{width: '100%', height: '100%'}} src={props.product.img} />
                </Carousel>
                
            </Box>
            <Box
                align='center'
                style={{width: '50%'}}
            >
                <Heading level='3' color='brand'>{props.product.name}</Heading>
                <Heading level='4' color='brand'>{props.product.price} sek</Heading>

                <Box direction= 'row-responsive'>
                    <Box align="center" pad="medium">
                    <Button onClick={addToCart} />
                    </Box> 
                </Box>
            </Box>
            <Box >
                <Heading level='2'>{props.product.description}</Heading>
            </Box>
        </Box>
    );
}



// interface Props {
//     name: string,
//     id: number,
//     price: number,
//     img: string,
//     description: string,
//     category?: string
// }

// const customBreakpoints = deepMerge(grommet, {
//     global: {
//         breakpoints: {
//             small: {
//                 value: 600
//             },
//             medium: {
//                 value: 900
//             },
//             large: 3000
//         }
//     }
// });

// export default function ProductView(props: Props) {

//     const [cart, setCart] = useContext(CartContext);

//     const addToCart = () => {
//       let itemInCart = cart.find((element: { id: number }) => element.id === props.id)
//       if (itemInCart === undefined) {
//         itemInCart = { id: props.id, price: props.price, quantity: 1 };
//         setCart((currentState: any) => [...currentState, itemInCart]);
//       }
//       else {
//         itemInCart.quantity += 1
//         setCart((currentState: any) => [...currentState]);
//       }
//     }
  

//     return (
//         <Grommet theme={customBreakpoints}>
//             <Box direction='row-responsive'
//             justify='center'
//             key={props.id}
//             align='center'
//             height='large'
//             margin='medium'
//             style={{flexWrap: 'wrap'}}
//             >
//                 <Box 
//                 justify='center'
//                 alignSelf='center'
//                 border='all'
//                 style={{maxWidth: '50%', marginRight: '20px', flexWrap: 'wrap'}}
//                 >
//                     {/* <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '80%'}}/> */}
//                     <Carousel fill>
//                     <Image fit="cover"  style={{width: '100%', height: '100%'}} src={'./assets/08.jpg'} />
//                     <Image fit="cover" style={{width: '100%', height: '100%'}} src={'./assets/25.jpg'} />
//                 </Carousel>
//                 </Box>
//                 <Box
//                 align='center'
//                 style={{width: '50%'}}
//                 >
//                 <Heading level='3' color='brand'>{props.name}</Heading>
                
//                 <Heading level='4' color='brand'>{props.price} sek</Heading>

//                 <Box direction= 'row-responsive'>
//                     <Box 
//                     align="center" 
//                     pad="medium">
//                         <Button onClick={addToCart} />
//                     </Box>
//                     </Box>
//                     <Box >
//                         <Heading level='2'>The Woodenforge series is inspired by a time when new land was created and rail systems were built. It has a rustic design. The price is 2495kr.</Heading>
//                     </Box>
//                 </Box>
//             </Box>
//         </Grommet>
//     );
// }
