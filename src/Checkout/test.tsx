import React from 'react'
import { Grommet } from 'grommet'
import { MeterStack } from './MeterStack'
import { LoginForm } from './LoginForm'
import StepsDiagram from './StepsDiagram'
import { theme } from '../index'


export const CheckoutStages = () => (
    <Grommet theme={theme}>
        <StepsDiagram stageNum={1} ></StepsDiagram>
        <LoginForm></LoginForm>

    </Grommet>
)
