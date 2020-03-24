import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Box } from 'grommet/components/Box'
import { Grommet } from 'grommet/components/Grommet'

export default function CheckoutCart() {
    const [cartItems, setCart] = useContext(CartContext)
    // const totalPrice = cartItems.reduce((acc: number, curr: { price: number; }) => acc + curr.price, 0)

    let totalPrice = 0
    for (let item of cartItems) {
        totalPrice += item.quantity * item.price

    }

    console.log(cartItems)
    return (
        <Grommet>
            <Box>
                <p>
                    {cartItems.map((item: { id: React.ReactNode; price: React.ReactNode; quantity: React.ReactNode }) =>
                        (<h6>{item.id} - {item.price} -- {item.quantity}</h6>))}
                </p>
                <p>Total = {(totalPrice).toFixed(2)} SEK</p>

            </Box>
        </Grommet>
    )
}
