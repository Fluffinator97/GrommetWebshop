import React from 'react';
import { Box, Carousel, Heading, Image } from "grommet";

export default function FirstSection() {
    return (
        <Box direction='row-responsive'
            round='medium'
            justify='center'
            align='center'
            height='medium'
            border='all'
            margin='medium'
            pad='small'
        >
            <Box
                justify='center'
                alignSelf='center'
                style={{ maxWidth: '50%' }}
            >
                <Carousel fill play={5000}>
                    <Image fit="cover" style={{ width: '100%', height: '100%' }} src={'./assets/08.jpg'} />
                    <Image fit="cover" style={{ width: '100%', height: '100%' }} src={'./assets/25.jpg'} />
                </Carousel>
            </Box>
            <Box fill='horizontal' justify='center' align='center'>
                <Heading textAlign='center' level='3' color='brand'>Best Seller</Heading>
                <Heading style={{textAlign:'justify'}} level='5'>The Woodenforge series is inspired by a time when new land was created and rail systems were built. It has a rustic design.The price is 2495kr.</Heading>
            </Box>
        </Box>

    );
}

