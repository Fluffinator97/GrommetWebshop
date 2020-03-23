import React, { CSSProperties, useContext } from 'react'
import { Shop } from 'grommet-icons'
import { Button, Box } from "grommet";
import { CartContext } from "./context/cartContext";
import { Redirect, withRouter, RouteComponentProps, Link } from 'react-router-dom'


interface Props {
    showLabel: boolean
}

export const CheckoutButton = (props: Props) => {
    const [cartItems, setCart] = useContext(CartContext)
    let numItems = 0
    for (let item of cartItems) {
        numItems += item.quantity
    }

    return (
        <Box >
            <span style={numItems === 0 ? { ...badgeHidden } : { ...badgeStyle }}>
                {numItems}
            </span>

            <Link to='/Checkout'>
                <Button
                    hoverIndicator={{ size: 'large' }}
                    icon={<Shop size='medium' />}
                    label={props.showLabel ? 'My Cart' : ''}
                />
            </Link>
        </Box>
    )
}

const badgeStyle: CSSProperties = {
    display: 'block',
    background: '#6FFFB0',
    borderRadius: '50%',
    color: '#333333',
    minWidth: '1.5rem',
    padding: '0.1rem',
    position: 'absolute',
    top: '1%',
    textAlign: 'center',
}
const badgeHidden: CSSProperties = {
    display: 'none',
}

