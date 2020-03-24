import React from 'react'
import ProductList from './productList'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'

export default function HomePage() {
    return (


        <>
            <CollapsibleNav showCart={true}/>
            <ProductList />
            <MainGrid />
        </>

    )
}
