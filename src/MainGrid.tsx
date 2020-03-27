import React, { useContext } from 'react';
import { CartContext } from '../src/context/cartContext';
import { Box, Button, Image, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid } from "./ResponsiveGrid";

import products from './allProducts'





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
        align="center" >
            <h1>{product.name}</h1>
            <Image  src={product.img} alt="" style={{maxWidth: '80%'}}/>
            <p>{product.price}</p>
            {/* <img src={product.img} alt=""/> */}
            {/* <img src={"./assets/hardRobot.jpg"} alt=""/> */}
            <Button />
        </Box>
    )
});


export default function MainGrid() {
    return (
        <Grommet theme={customBreakpoints}>
            <Box>

                <ResponsiveGrid
                    gap="medium"
                    margin="medium"
                    columns="medium"
                    rows="xsmall"
                    
                >
                    {listProductsBoxes}
                </ResponsiveGrid>
            </Box>
        </Grommet>
    );
}