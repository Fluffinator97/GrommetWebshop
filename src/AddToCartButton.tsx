import React, { useState, PropsWithChildren, CSSProperties } from 'react'
import {Cart} from  'grommet-icons'
import { grommet, Box, Button, Grommet } from "grommet";

interface Props {
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function AddToCartButton(props :Props) {
    const [count, setCount] = useState(0)

    return (
        <Button
            icon={<Cart/>}
            label='Add To Cart'
            onClick={props.onClick}
        />
    
    )
}
