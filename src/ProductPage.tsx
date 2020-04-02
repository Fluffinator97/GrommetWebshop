import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductLayout from './ProductLayout'



export default function ProductPage() {
    return (
        <>
            <CollapsibleNav showCart={true}/>
            <ProductLayout  />
            <Footer />
        </>

    )
}
