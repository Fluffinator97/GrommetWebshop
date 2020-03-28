import React from 'react'
import { Grommet } from 'grommet'
import { LoginForm } from './LoginForm'
import StepsDiagram from './StepsDiagram'
import { theme } from '../index'
import Shipping from './Shipping'

interface Props {
    stageNumber: number
}
export default function CheckoutStages(props: Props){
    let displayPage = <LoginForm />
    switch(props.stageNumber){
        case 1: displayPage = <LoginForm /> 
        break;
        case 2: displayPage = <Shipping /> 
        break;
        // case 1: displayPage = <LoginForm /> 
        // break;
    }
    return (<Grommet theme={theme}>
        <StepsDiagram stageNum={props.stageNumber} ></StepsDiagram>
        {displayPage}
    </Grommet>)
}
