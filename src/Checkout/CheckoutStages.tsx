import React, { useState } from 'react'
import { Grommet, Box } from 'grommet'
import { UserInfo } from './UserInfo'
import StepsDiagram from './StepsDiagram'
import { theme } from '../index'
import Shipping from './Shipping'

export default function CheckoutStages() {
    const [userInfoReceived, setUserInfoReceived] = useState(true)
    const [shippingInfoReceived, setShippingInfoReceived] = useState(false)
    const [paymentInfoReceived, setPaymentInfoReceived] = useState(false)
    const [stageNum, setStageNum] = useState(2)
   const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        mobNum: 0,
        adr:'',
    }
 )
    
    const onSubmit = (e: { preventDefault: () => void; target: any }) => {
        e.preventDefault()
        let snapInfo =
        {
            name: e.target[0].value,
            email: e.target[1].value,
            mobNum: e.target[2].value,
            adr: e.target[3].value,
        }

        setUserInfoReceived(true)
        setStageNum(2)
        setUserInfo(snapInfo)
        console.log(snapInfo)
    }
    const onShipping = (e: { preventDefault: () => void; target: any }) => {
        e.preventDefault()
        //    let shippingInfo = {
        //         name: e.target[0].value,
        //         email: e.target[1].value,
        //         mobNum: e.target[2].value,
        //         adr: e.target[3].value,
        //     }
        setShippingInfoReceived(true)
        setStageNum(3)
        // setShippingSnap(shippingInfo)
    }



    return (
        <Grommet theme={theme}>
            <StepsDiagram stageNum={stageNum} ></StepsDiagram>
            <Box style={userInfoReceived ? { display: 'none' } : { display: 'block' }}>
                <UserInfo SubmitForm={onSubmit} />
            </Box>
            <Box style={shippingInfoReceived ? { display: 'none' } : { display: 'block' }}>
                <Shipping userSnap={userInfo} submitShipping={onShipping} />
            </Box>
            {/* <Box style={userInfoReceived ? { display: 'none' } : { display: 'block' }}>
                <UserInfo SubmitForm={onSubmit} />
            </Box>
            <Box style={userInfoReceived ? { display: 'none' } : { display: 'block' }}>
                <UserInfo SubmitForm={onSubmit} />
            </Box> */}
        </Grommet>)
}
