import React, { useContext } from 'react';
import { CartContext } from '../src/context/cartContext';
import { Box, Button, Heading, Image, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid } from "./ResponsiveGrid";

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



const listProductsBoxes = products.map((product, index) => {



    return (
        <Box
        elevation="large"
        key={product.id}
        background="light-3"
        flex={false}
        justify="center"
        align="center"
         >
            <Heading margin="none">{product.name}</Heading>
            <Image fit='cover' src={product.img} alt="" style={{width: '100%', maxHeight: '100%' }}/>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {/* <img src={product.img} alt=""/> */}
            {/* <img src={"./assets/hardRobot.jpg"} alt=""/> */}
            <Button margin={{'bottom': '8px'}} icon={<Add />} label="Add to Cart" onClick={() => {}} primary />
        </Box>
    )
});


export default function MainGrid() {
    return (
        <Grommet theme={customBreakpoints}>
           

                <ResponsiveGrid
                    gap="medium"
                    margin="medium"
                    columns="medium"
                    rows="xsmall"
                    
                >
                    {listProductsBoxes}
                </ResponsiveGrid>
           
        </Grommet>
    );
}