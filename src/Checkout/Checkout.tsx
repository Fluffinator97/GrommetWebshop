import React, { useContext } from 'react'
import CollapsibleNav from '../CollapsibleNav'
import { CartContext } from '../context/cartContext'
import CheckoutCart from './CheckoutCart'
import { EmptyCart } from './EmptyCart'


export default function Checkout(empty: boolean) {
    const [cartItems, setCart] = useContext(CartContext)
    let displayPage = <EmptyCart />
    if (cartItems.length > 0) {
        displayPage = <CheckoutCart />
    }
    return (
        <>
        
            <CollapsibleNav showCart={false} />
            {displayPage}
        </>
    )
}
