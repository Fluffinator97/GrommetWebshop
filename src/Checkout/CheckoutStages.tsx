import React, { useState, useContext, useEffect, useRef } from 'react'
import { Grommet, Box } from 'grommet'
import { UserInfo } from './UserInfo'
import StepsDiagram from './StepsDiagram'
import { theme } from '../index'
import Shipping from './Shipping'
import { CartContext } from '../context/cartContext'
import CartSummary from './CartSummary'
import { totalPrice } from './CheckoutCart'
import { Payment } from './Payment/Payment'
import { numItems } from '../CheckoutButton'
import Done from './Payment/Done'

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
    const [arrivalDate, setArrivalDate] = useState('')
    const [userInfo, setUserInfo] = useState({
        name: 'user',
        email: 'email',
        mobNum: 0o0,
        adr: '123 me',
    }
    )

    // function usePrevious(value: any):number {
    //     const ref = useRef();
    //     useEffect(() => {
    //       ref.current = value;
    //     }, [value])
    //     return ref.current;
    //   }

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
    }

    const ship = (value: [number, string]) => {
        setCurrentStage(Stages.pay)
        setOrderTotal(orderTotal + value[0])
        setArrivalDate(value[1])
    }
    const pay = () => {
        setCurrentStage(Stages.done)
        setCart([])
    }
    useEffect(() => {
        console.log('UPDATE')
        return () => {
            displayPage();
        }
    },
        [currentStage],
    );

    // const finalCost = usePrevious(orderTotal)
    const displayPage = () => {
        let displayPage = <UserInfo SubmitForm={onSubmit} />
        switch (currentStage) {
            case Stages.info:
                displayPage = <UserInfo SubmitForm={onSubmit} />
                break;
            case Stages.ship:
                displayPage = <Shipping ship={ship} />
                break;
            case Stages.pay:
                displayPage = <Payment userSnap={userInfo}
                    SubmitForm={pay} />
                break;
        }
        return displayPage
    }

    if (currentStage === Stages.done) {
        return (
            <Grommet theme={theme} >
                <StepsDiagram stageNum={currentStage} ></StepsDiagram>
                <Done userSnap={userInfo} />
            </Grommet >)
    }
    return (
        <Grommet theme={theme} >
            <StepsDiagram stageNum={currentStage} ></StepsDiagram>

            <Box animation='fadeIn' direction='row' wrap={true} justify='center' align='start' >
                <Box width='medium' flex={{ grow: 0 }} align='center'>
                    <CartSummary
                        stageNum={currentStage}
                        userSnap={userInfo}
                        arrivalDate={arrivalDate}
                        orderCost={orderTotal}
                        totalItems={numItems(cartItems)}
                    />
                </Box>
                <Box width='medium' animation='fadeIn' flex={{ grow: 3 }} >
                    {displayPage()}
                </Box>
            </Box>
        </Grommet >)
}
