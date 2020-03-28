import React from 'react'
import { Box, Heading, Text, Grommet } from 'grommet'
import { theme } from '../index'
import { Deliver } from 'grommet-icons'

interface Props {
    userSnap: { name: React.ReactNode; email: React.ReactNode; mobNum: React.ReactNode; adr: React.ReactNode }
    submitShipping: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
}
export default function Shipping(props: Props) {
    const orderDate = new Date()
    const expressDeliveryDate = new Date(orderDate)
    expressDeliveryDate.setDate(expressDeliveryDate.getDate() + 1)
    const normalDeliveryDate = new Date(orderDate)
    normalDeliveryDate.setDate(normalDeliveryDate.getDate() + 3)
    console.log(normalDeliveryDate)
    const pickUpDate = new Date(orderDate)
    pickUpDate.setDate(pickUpDate.getDate() + 7)
    console.log(pickUpDate)
    return (
        <Grommet theme={theme} >
            <Box direction='row-responsive' justify='evenly'>
                <Box justify='center' alignContent='center' flex={{ grow: 1 }} border={{ color: 'brand', size: 'large' }}>
                    <Heading level={3}>Summary</Heading>
                    <Text>Deliver To:</Text>
                    <Text>{props.userSnap.name}</Text>
                    <Text>{props.userSnap.adr}</Text>
                    <Text>{props.userSnap.mobNum}</Text>
                </Box>
                <Box justify='center' flex={{ grow: 3 }} border={{ color: 'brand', size: 'large' }}>
                    <Box gap='small' direction='row' align='center' justify='center'>
                        <Heading level={4}>Delivery Options</Heading><Deliver />
                    </Box>

                    {/* <CheckBox
                        checked={checked}
                        label="Express Delivery"
                        onChange={(event) => setChecked(event.target.checked)}
                    /> */}
                    
                </Box>
            </Box>


        </Grommet>
    )
}
