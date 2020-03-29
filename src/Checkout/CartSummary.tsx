import React from 'react'
import { Box, Heading, Text } from 'grommet'

interface Props {
    stageNum: number
    userSnap: { name: string; adr: string; mobNum: number }
    orderCost: number
    totalItems: React.ReactNode
    arrivalDate: string
}

function CartSummary(props: Props) {
    return (
        <Box margin='small' pad='small' justify='start' align='start' elevation='large'>
            < Heading alignSelf='center' color={'brand'} level={4}>Your Cart</Heading>
            <Box pad='medium'>

                <Box width='medium'>
                    <Text>{props.totalItems} items</Text>
                </Box>
                <Box style={props.stageNum >= 2 ? { display: 'block' } : { display: 'none' }}>
                    <Text>Deliver To:</Text>
                    <Text>{props.userSnap.name} <br /> {props.userSnap.adr}  <br /> {props.userSnap.mobNum}</Text>
                </Box>
                <Box>
                <Text color='brand'>Total Price  {(props.orderCost).toFixed(2)} SEK</Text>
                </Box>
                <Box style={props.stageNum >= 3 ? { display: 'block' } : { display: 'none' }}>
                    <Text>Reaches you:</Text>
                    <Text> {props.arrivalDate}</Text>
                </Box>

            </Box>
        </Box>
    )
}

export default CartSummary
