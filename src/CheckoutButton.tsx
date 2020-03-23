import React, { CSSProperties, useContext, useState } from 'react'
import { Shop, Link } from 'grommet-icons'
import { Button } from "grommet";
import { CartContext } from "./context/cartContext";
import { Redirect } from 'react-router-dom'


interface Props {

}



export const CheckoutButton = (props: Props) => {
    const [checkOut, setCheckOut] = useState(false)
    const [cartItems, setCart] = useContext(CartContext)


    const renderRedirect = () => {
        if (checkOut && numItems === 0) {
            return <Redirect to='/EmptyCart' />
        }
        else if (checkOut) {
            return <Redirect to='/Checkout' />
        }
    }

    let numItems = 0
    for (let item of cartItems) {
        numItems += item.quantity
    }

    return (
        <>
            {renderRedirect()}

            <span style={numItems === 0 ? { ...badgeHidden } : { ...badgeStyle }}>
                {numItems}
            </span>

            <Button
                icon={<Shop />}
                onClick={() => setCheckOut(true)}
            />
        </>
    )
}

const badgeStyle: CSSProperties = {
    display: 'block',
    background: '#6FFFB0',
    borderRadius: '50%',
    color: '#333333',

    minWidth: '1rem',
    padding: '0.1rem',
    position: 'absolute',
    textAlign: 'center',
}
const badgeHidden: CSSProperties = {
    display: 'none',
}


