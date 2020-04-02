import React, { useContext } from 'react';
import { Box, Button, Carousel, Heading, Image, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";


interface Props {
    name: string,
    id: number,
    price: number,
    img: string,
  }

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

export default function ProductView() {

    return (
        <Grommet theme={customBreakpoints}>
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
                style={{maxWidth: '50%', marginRight: '20px', flexWrap: 'wrap'}}
                >
                    {/* <Image fit='contain' margin={{'top': ''}} src={'./assets/agy2.jpg'} alt="" style={{maxWidth: '80%'}}/> */}
                    <Carousel fill>
                    <Image fit="cover"  style={{width: '100%', height: '100%'}} src={'./assets/08.jpg'} />
                    <Image fit="cover" style={{width: '100%', height: '100%'}} src={'./assets/25.jpg'} />
                </Carousel>
                </Box>
                <Box
                align='center'
                style={{width: '50%'}}
                >
                <Heading level='3' color='brand'>Hell on wheels</Heading>
                
                <Heading level='4' color='brand'>2495 sek</Heading>

                <Box 
                align="center" 
                pad="medium">
                    <Button label="Add to cart" onClick={() => {}} />
                </Box>
                
                </Box>
                <Box >
                    <Heading level='2'>The Woodenforge series is inspired by a time when new land was created and rail systems were built. It has a rustic design. The price is 2495kr.</Heading>
                </Box>

            </Box>
        </Grommet>
    );
}