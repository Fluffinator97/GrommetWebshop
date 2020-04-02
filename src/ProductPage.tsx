import React from 'react'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import ProductView from './ProductView'

interface Props {
    name: string,
    id: number,
    price: number,
    img: string,
    description: string,
    category?: string
  }

export default function ProductPage() {
    return (
        <>
            <CollapsibleNav showCart={true}/>
            <ProductView {} />
            <Footer />
        </>

    )
}
