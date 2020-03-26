import React from 'react'
import { Grommet } from 'grommet'
import { MeterStack } from './MeterStack'
import { LoginForm } from './LoginForm'
import StepsDigram from './StepsDigram'


export const CheckoutStages = () => (
    <Grommet>
        {/* <MeterStack percentageFilled={25} text="1. User Info"></MeterStack> */}
        <StepsDigram stageNum={4} ></StepsDigram>
        <LoginForm></LoginForm>

    </Grommet>
)
