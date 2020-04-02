import React, { useContext } from 'react';
import { CartContext } from '../src/context/cartContext';
import { Box, Button, Carousel, Heading, Image, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid2 } from "./ResponsiveGrid2";

import products from './allProducts'
import { Send, Close, Add } from 'grommet-icons';





// set custom breakpoints so we can see the changes
const customBreakpoints = deepMerge(grommet, {
    global: {
        breakpoints: {
            small: {
                value: 600
            },
            medium: {
                value: 900
            },
            large: 3000
        }
    }
});

 interface Props {
     name: string,
     price: number,
     id: number,
     key: number,
     img: string,
     products: any
 }

 

//  const listProductsBoxes = products.map((product, index) => {



//      return (
//          <Box
//          elevation="large"
//          key={product.id}
//          background="light-3"
//          flex={false}
//          justify="center"
//          align="center" >
//              <Heading margin="none"></Heading>
//              <Image fit='cover'  alt="" style={{width: '100%', maxHeight: '100%' }}/>
            
            
//              <Button margin={{'bottom': '8px'}} icon={<Add />} label="Add to Cart" onClick={() => {}} primary />
//          </Box>
//      )
//  });


export default function FirstSection() {
    return (
        <Grommet theme={customBreakpoints}>
            <Box direction='row-responsive'
            justify='center'
            align='center'
            height='medium'
            border='all'
            margin='medium'
            >
                <Box 
                justify='center'
                alignSelf='center'
                style={{maxWidth: '50%'}}>
                    {/* <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '80%'}}/> */}
                    <Carousel fill>
                    <Image fit="cover"  style={{width: '100%', height: '100%'}} src={'./assets/08.jpg'} />
                    <Image fit="cover" style={{width: '100%', height: '100%'}} src={'./assets/25.jpg'} />
                </Carousel>
                </Box>
                <Box 
                fill='horizontal'
                justify='center'
                alignContent='center'>
                    <Heading level='3' color='brand'>Best Seller</Heading>
                    <Heading level='5'>The Woodenforge series is inspired by a time when new land was created and rail systems were built. It has a rustic design.The price is 2495kr.</Heading>
                </Box>
            </Box>
        </Grommet>
    );
}

{/* <Box
           border='all'
           margin='medium'>

                
                
                <ResponsiveGrid2
                    >
                        <Box
                        border='all'
                        
                        height='small'>
                        <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '100%'}}/>

                        </Box>
                        <Box
                        border='all'
                        >

                            <Heading level='3'>Buy now</Heading>
                        </Box>
                                    {/* <Heading margin={{}}>Best Seller</Heading>
                                    <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '40%'}}/>
                                <Heading level='3'>This is our </Heading> */}

                    {/* {listProductsBoxes} */}
        //         </ResponsiveGrid2>
        //     </Box>
            
        // </Grommet> */}