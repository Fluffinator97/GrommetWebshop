import React, { useState, ReactNode } from 'react'
const initialState: any[] = []
export const CartContext = React.createContext(initialState)
interface Props {
    children: ReactNode
}

export const CartProvider = (props: Props) => {
    const [cart, setCart] = useState(() => {
        const initialState: {}[] = []
        return initialState;
      })

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
