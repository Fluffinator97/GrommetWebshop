import React, { CSSProperties, useContext, useState } from 'react'
import { Shop, Link } from 'grommet-icons'
import { Button } from "grommet";
import { CartContext } from "./context/cartContext";
import { Redirect } from 'react-router-dom'

interface Props {

}



export const ShopCart = (props: Props) => {
    const [checkOut, setCheckOut] = useState(false)
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc: number, curr: { price: number; }) => acc + curr.price, 0)

    const renderRedirect = () => {
        if (checkOut) {
            return <Redirect to='/Checkout' />
        }
    }

    let numItems = 0
    for (let item of cart) {
        numItems += item.quantity
    }

    return (
        <>
            {renderRedirect()}
            <span style={badgeStyle}>{numItems}</span>

            <Button
                icon={<Shop />}
                onClick={() => setCheckOut(true)}
            />
        </>
    )
}

const badgeStyle: CSSProperties = {
    background: '#6FFFB0',
    borderRadius: '50%',
    color: '#333333',

    minWidth: '1rem',
    padding: '0.1rem',
    position: 'absolute',
    textAlign: 'center',
}


