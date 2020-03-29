import React, { useState, ReactNode } from 'react'
const initialState: number = 0
export const OrderCostContext = React.createContext(initialState)
interface Props {
    children: ReactNode
}

export const OrderCostProvider = (props: Props) => {
    const [orderCost, setOrderCost] = useState(() => {
        const initialState: number = 0
        return initialState;
    })

    return (
        <OrderCostContext.Provider value={0}>
            {props.children}
        </OrderCostContext.Provider>
    )
}
