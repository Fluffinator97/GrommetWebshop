import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'


export default function ProductPage() {
    return (
        <>
            <CollapsibleNav showCart={true}/>
            <ProductView />
            <Footer />
        </>

    )
}
