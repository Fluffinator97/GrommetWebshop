import React, { CSSProperties, useContext } from 'react'
import { Shop } from 'grommet-icons'
import { grommet, Box, Button, Grommet } from "grommet";
import { CartContext } from "./context/cartContext";

interface Props {

}

export const ShopCart = (props: Props) => {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc: number, curr: { price: number; }) => acc + curr.price, 0)
    return (
        <>

            <span style={badgeStyle}>{cart.length}</span>

            <Button
                icon={<Shop />}
                onClick={() => { }}
            />

            {/* {cart.map((item: { name: React.ReactNode; price: React.ReactNode; }) => (<h6>{item.name} - {item.price}</h6>))} */}
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


