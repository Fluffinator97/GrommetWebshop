import React from 'react'
import CollapsibleNav from '../CollapsibleNav'
import CheckoutStages from './CheckoutStages'
import FooterSection from '../Footer'

export default function Checkout() {
    return (
        <>
            <CollapsibleNav showCart={true} />
            <CheckoutStages></CheckoutStages>
            <FooterSection />
        </>
    )
}
