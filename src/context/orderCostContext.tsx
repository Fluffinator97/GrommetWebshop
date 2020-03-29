import React, { useState, ReactNode } from 'react'
const [orderCost, setOrderCost] = useState(0)
export const OrderCostContext = React.createContext(setOrderCost)
interface Props {
    children: ReactNode
}

export const orderCostProvider = (props: Props) => {
    const [orderCost, setOrderCost] = useState(0)

    return (
        <OrderCostContext.Provider value={setOrderCost}>
            {props.children}
        </OrderCostContext.Provider>
    )
}