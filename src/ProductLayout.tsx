import React, { useContext } from 'react';
import { Box, Button, Carousel, Heading, Image, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import ProductCard from './product';

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

export default function ProductLayout() {

    return (
        <Grommet theme={customBreakpoints}>
        {Object.keys(id).map((name) => {
            return (
                <Box 
                hoverIndicator
                onClick={() => {alert("clicked");}}
                >
                    <Heading>{name.toUpperCase()}</Heading>
                    <Box
                        gap="medium"
                        margin="medium"
                        columns="medium"
                        rows="xsmall"
                    >
                        {
                            products.map(item => (
                                <ProductCard name={item.name} id={item.id} price={item.price} key={item.id} img={item.img} description={item.description} />
                            ))
                        }
                    </Box>
                </Box>
            )
        })}
    </Grommet>
    );
}