import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import {CheckoutStages} from './Checkout/test'

export default function Login() {
    return (
        <div>
            <CollapsibleNav showCart={true} />
            <CheckoutStages></CheckoutStages>
        </div>
    )
}
