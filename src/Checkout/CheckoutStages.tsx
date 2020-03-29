import React, { useState, useContext } from 'react'
import { Grommet, Box } from 'grommet'
import { UserInfo } from './UserInfo'
import StepsDiagram from './StepsDiagram'
import { theme } from '../index'
import Shipping from './Shipping'
import { CartContext } from '../context/cartContext'
import CartSummary from './CartSummary'
import { totalPrice } from './CheckoutCart'
import Payment from './Payment'

export default function CheckoutStages() {

    enum Stages {
        info = 1,
        ship = 2,
        pay = 3,
        done = 4
    }

    const [cartItems, setCart] = useContext(CartContext)
    const [currentStage, setCurrentStage] = useState(Stages.info)
    const [orderTotal, setOrderTotal] = useState(totalPrice(cartItems))
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        mobNum: 0,
        adr: '',
    }
    )
    console.log(currentStage)
    const onSubmit = (e: { preventDefault: () => void; target: any }) => {
        e.preventDefault()
        let snapInfo =
        {
            name: e.target[0].value,
            email: e.target[1].value,
            mobNum: e.target[2].value,
            adr: e.target[3].value,
        }
        setUserInfo(snapInfo)
        setCurrentStage(Stages.ship)
        console.log(currentStage)
    }
    const ship = (value: number) => {
        setCurrentStage(Stages.pay)
        setOrderTotal(orderTotal + value)
    }

    return (
        <Grommet theme={theme} >
            <StepsDiagram stageNum={currentStage} ></StepsDiagram>
            <Box direction='row-responsive' justify='center' align='center' >
                <Box flex={{ grow: 1 }} align='center'>
                    <CartSummary
                        stageNum={currentStage}
                        userSnap={userInfo}
                        orderCost={orderTotal}
                        totalItems={cartItems.length}
                        arrivalDate={''}
                    />
                </Box>
                <Box flex={{ grow: 3 }} style={currentStage === 1 ? { display: 'block' } : { display: 'none' }}>
                    <UserInfo SubmitForm={onSubmit} />
                </Box>
                <Box flex={{ grow: 3 }} style={currentStage === 2 ? { display: 'block' } : { display: 'none' }}>
                    <Shipping ship={ship} />
                </Box>
                <Box flex={{ grow: 3 }} style={currentStage === 3 ? { display: 'block' } : { display: 'none' }}>
                    <Payment/>
                </Box>
                {/* <Box style={userInfoReceived ? { display: 'none' } : { display: 'block' }}>
                <UserInfo SubmitForm={onSubmit} /> </Box>*/}
            
            </Box>
        </Grommet >)
}
