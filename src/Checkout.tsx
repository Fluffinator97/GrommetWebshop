import React, { useContext } from 'react'
import { CartContext } from "./context/cartContext";


export default function Checkout() {
    const [cartItems, setCart] = useContext(CartContext)
    const totalPrice = cartItems.reduce((acc: number, curr: { price: number; }) => acc + curr.price, 0)
    console.log(cartItems)

    return (
        <p>
            {cartItems.map((item: { name: React.ReactNode; price: React.ReactNode; }) => (<h6>{item.name} - {item.price}</h6>))}
        </p>
    )
}
