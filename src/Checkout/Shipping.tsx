import React, { useState } from 'react'
import { Box, Heading, Text, Grommet, CheckBox, Image, RadioButtonGroup } from 'grommet'
import { theme } from '../index'
import { Deliver } from 'grommet-icons'
import dhlIcon from '../assets/dhl.png'
import expDhlIcon from '../assets/dhlExpress.png'
import postnordIcon from '../assets/postnord.png'
import ShippingOptions from './ShippingOptions'

interface Props {
    userSnap: { name: React.ReactNode; email: React.ReactNode; mobNum: React.ReactNode; adr: React.ReactNode }
    submitShipping: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
}
export default function Shipping(props: Props) {
    const [value, setValue] = useState('c1')

    const orderDate = new Date()
    const expressDate = new Date(orderDate)
    expressDate.setDate(expressDate.getDate() + 1)

    const postNordDate = new Date(orderDate)
    postNordDate.setDate(postNordDate.getDate() + 3)

    const normalDeliveryDate = new Date(orderDate)
    normalDeliveryDate.setDate(normalDeliveryDate.getDate() + 7)

    const expressPrice = 10
    const normalPrice = 5
    const postNordPrice = 0
    return (
        <Grommet theme={theme} >
            <Box direction='row-responsive' justify='evenly' pad='small' >
                <Box margin='small' justify='center' alignContent='center' flex={{ grow: 1 }} border={{ color: 'brand', size: 'small' }}>
                    <Heading level={3}>Summary</Heading>
                    <Text>Deliver To:</Text>
                    <Text>{props.userSnap.name}</Text>
                    <Text>{props.userSnap.adr}</Text>
                    <Text>{props.userSnap.mobNum}</Text>
                </Box>
                <Box justify='center' align='center' flex={{ grow: 1 }} pad='small' >
                    <Box pad='small' direction='row' align='center' justify='center'>
                        <Deliver/><Heading margin="none" level={3}>Choose your preferred delivery :</Heading>
                    </Box>

                    <Box align='center' justify='center'>
                        <RadioButtonGroup
                            name="radio"
                            options={[
                                {
                                    label: <ShippingOptions
                                        deliveryName={'Express'}
                                        deliveryIcon={expDhlIcon}
                                        deliveryDate={
                                            expressDate
                                        }
                                        deliveryCost={expressPrice}
                                        orderTotalCost={5}
                                    />, value: "d1"
                                },
                                {
                                    label: <ShippingOptions
                                        deliveryName={'Standard'}
                                        deliveryIcon={dhlIcon}
                                        deliveryDate={
                                            normalDeliveryDate
                                        }
                                        deliveryCost={normalPrice}
                                        orderTotalCost={5}
                                    />, value: "d2"
                                },
                                {
                                    label: <ShippingOptions
                                        deliveryName={'PostNord'}
                                        deliveryIcon={postnordIcon}
                                        deliveryDate={
                                            postNordDate
                                        }
                                        deliveryCost={postNordPrice}
                                        orderTotalCost={5}
                                    />, value: "d3"
                                }
                            ]}
                            value={value}
                            onChange={event => setValue(event.target.value)}
                        />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    )
}
