import React from 'react'
import { Box } from 'grommet/components/Box'
import { Image } from 'grommet'
import EmptyCartImage from './assets/shopping_cart.svg'

export default function EmptyCart() {
    return (
        <Box height="medium" width="medium" justify='center'>
            <Image src={EmptyCartImage}/>
        </Box>
    )
}
