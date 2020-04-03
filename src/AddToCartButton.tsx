import React from 'react'
import { Cart } from 'grommet-icons'
import { Button } from "grommet";

interface Props {
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function AddToCartButton(props: Props) {
    return (
        <Button
            margin={{'bottom': 'xsmall'}}
            hoverIndicator
            icon={<Cart />}
            label={'Add To Cart'}
            onClick={props.onClick}
        />

    )
}
