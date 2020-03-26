import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Box } from 'grommet/components/Box'
import { Grommet } from 'grommet/components/Grommet'
import { List, Text, Button, Paragraph } from 'grommet'
import { AddCircle, SubtractCircle, LinkNext } from 'grommet-icons'
import { Link } from 'react-router-dom'

export default function CheckoutCart() {
    const [cartItems, setCart] = useContext(CartContext)

    const addToCart = (data: number) => {
        let itemInCart = cartItems.find((element: { id: number }) => element.id === data)
        itemInCart.quantity += 1
        setCart((currentState: any) => [...currentState])
        console.log(itemInCart)
    }

    const arrayRemove = (arr: any[], value: any) => {
        return arr.filter(function (ele: any) {
            return ele != value
        })
    }

    const removeFromCart = (data: number) => {
        let itemInCart = cartItems.find((element: { id: number }) => element.id === data)
        if (itemInCart.quantity > 1) {
            itemInCart.quantity -= 1
            setCart((currentState: any) => [...currentState])
            console.log(itemInCart)
        }
        else {
            setCart(arrayRemove(cartItems, itemInCart))
        }
    }

    let totalPrice = 0
    for (let item of cartItems) {
        totalPrice += item.quantity * item.price
    }

    return (
        <Grommet>
            <Box pad="large" height="100%" background="light-2">
                <List
                    data={cartItems}
                    primaryKey={item => (
                        <Box direction='row' wrap={true} gap='small' justify='center' align='center'>
                            <Text size="large" weight="bold">
                                {item.id}
                            </Text>
                            <Box direction='row' wrap={true} gap='small' justify='center' align='center'>
                                <Text size="medium" weight="bold">
                                    Quantity : {item.quantity}
                                </Text>
                                <Button
                                    hoverIndicator
                                    style={{ borderRadius: '50%' }}
                                    size="small"
                                    icon={<AddCircle size='medium' color='dark-1' />}
                                    onClick={() => { addToCart(item.id) }}
                                />
                                <Button
                                    hoverIndicator
                                    size="small"
                                    style={{ borderRadius: '50%' }}
                                    icon={<SubtractCircle size='medium' color='dark-1' />}
                                    onClick={() => { removeFromCart(item.id) }}
                                />
                            </Box>

                        </Box>
                    )}
                    secondaryKey={item => (
                        <Box>

                            <Paragraph size="large">
                                {item.price}<Text size="small" color="dark-4"> SEK/piece</Text>
                            </Paragraph>

                        </Box>
                    )}

                />
                <Box align='end' gap='small'>
                    <Paragraph size="large">
                        Total = {totalPrice}<Text size="small" color="dark-4"> SEK</Text>
                    </Paragraph>

                    <Box animation='pulse'>
                    <Link to='/Login'>
                        <Button
                          
                            size="small"
                            primary
                            label='to checkout'
                            icon={<LinkNext />}
                        />
                    </Link>
                </Box>
                </Box>
            </Box>
        </Grommet>
    )
}
