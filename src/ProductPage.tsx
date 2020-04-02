import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'
import HomePage from './HomePage'


export default function ProductPage() {
    return (
        <>
            <CollapsibleNav showCart={true}/>
            <HomePage />
            <Footer />
        </>

    )
}
