import React from 'react'
import CollapsibleNav from '../CollapsibleNav'
import CheckoutStages from './CheckoutStages'



export default function Checkout() {
    return (
        <div>
            <CollapsibleNav showCart={true} />
            <CheckoutStages></CheckoutStages>
        </div>
    )
}
