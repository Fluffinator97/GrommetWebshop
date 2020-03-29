import React, { useState } from 'react'
import { Box, RadioButtonGroup, Button } from 'grommet'
import dhlIcon from '../assets/dhl.png'
import expDhlIcon from '../assets/dhlExpress.png'
import postnordIcon from '../assets/postnord.png'
import ShippingOptions from './ShippingOptions'
import { LinkNext } from 'grommet-icons'

interface Props {
    ship:any
}
export default function Shipping(props: Props) {

    enum shipPrice {
        standardPrice = 0,
        quickPrice = 5,
        expressPrice = 10
    }

    const [value, setValue] = useState('d1')
    const [shipCost, setShipCost] = useState(shipPrice.expressPrice)

    const orderDate = new Date()
    const expressDate = new Date(orderDate)
    expressDate.setDate(expressDate.getDate() + 1)

    const standardDeliveryDate = new Date(orderDate)
    standardDeliveryDate.setDate(standardDeliveryDate.getDate() + 3)

    const quickDeliveryDate = new Date(orderDate)
    quickDeliveryDate.setDate(quickDeliveryDate.getDate() + 7)


    const getShipPrice = (selected: string) => {
let arrivalDate
        switch (selected) {
            case 'd1': setShipCost(shipPrice.expressPrice)
                break;
            case 'd2': setShipCost(shipPrice.quickPrice)
                break;
            case 'd3': setShipCost(shipPrice.standardPrice)
                break;
        }
        return [shipCost, arrivalDate]
    }

    return (

        <Box justify='center' align='center' pad='small' >
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
                                deliveryCost={shipPrice.expressPrice}
                            />, value: "d1"
                        },
                        {
                            label: <ShippingOptions
                                deliveryName={'Quick'}
                                deliveryIcon={dhlIcon}
                                deliveryDate={
                                    quickDeliveryDate
                                }
                                deliveryCost={shipPrice.quickPrice}
                            />, value: "d2"
                        },
                        {
                            label: <ShippingOptions
                                deliveryName={'Standard'}
                                deliveryIcon={postnordIcon}
                                deliveryDate={
                                    standardDeliveryDate
                                }
                                deliveryCost={shipPrice.standardPrice}
                            />, value: "d3"
                        }
                    ]}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </Box>
            <Box animation='pulse' pad={{ top: 'small' }} justify='end'>
                <Button
                    reverse={true} icon={<LinkNext size='small' />}
                    label="Next" size='small' primary
                    onClick={(e)=>{props.ship(getShipPrice(value))}} />
            </Box>
        </Box>
    )
}
