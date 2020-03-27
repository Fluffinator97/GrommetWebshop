import React, { CSSProperties, useContext } from 'react'
import { Shop } from 'grommet-icons'
import { Button, Box, Stack, Text } from "grommet";
import { CartContext } from "./context/cartContext";
import { Link } from 'react-router-dom'


interface Props {
    showLabel: boolean
}

export const CheckoutButton = (props: Props) => {
    const [cartItems, setCart] = useContext(CartContext)
    let numItems = 0
    for (let item of cartItems) {
        numItems += item.quantity
    }

    return (
        <Stack anchor="top-left" >
            <Link to='/Checkout'>
                <Button
                    hoverIndicator={{ size: 'large' }}
                    icon={<Shop size='medium' />}
                    label={props.showLabel ? 'My Cart' : ''}
                />
            </Link>
            <Box
                background="light-1"
                style={numItems === 0 ? { display: 'none' } : { display: 'block' }}

                pad={{ horizontal: 'xsmall' }}
                round
            >
                <Text >{numItems}</Text>
            </Box>
        </Stack>
    )
}


