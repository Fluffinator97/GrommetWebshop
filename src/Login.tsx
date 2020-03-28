import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import CheckoutStages from './Checkout/CheckoutStages'

export default function Login() {
    return (
        <div>
            <CollapsibleNav showCart={true} />
            <CheckoutStages stageNumber={1}></CheckoutStages>
        </div>
    )
}
