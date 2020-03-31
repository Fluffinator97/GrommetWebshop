import React from 'react'
import ProductList from './productList'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import CarouselSection from './Carousel'
import Footer from './Footer'
import products from './allProducts'
import FirstSection from './FirstSection'

export default function HomePage() {
    return (
        <>
            <CollapsibleNav showCart={true}/>
            <CarouselSection products={products}/>
            <FirstSection />
            {/* <ProductList /> */}
            <MainGrid />
            <Footer />
        </>

    )
}
