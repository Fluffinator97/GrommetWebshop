import React from 'react'
import { CartProvider } from './context/cartContext'
import { ShopCart } from './ShopCart'
import ProductList from './productList'

export default function HomePage() {
    return (

        <CartProvider>
            <div>
                <ShopCart />
                <ProductList />
            </div>
        </CartProvider>

    )
}
