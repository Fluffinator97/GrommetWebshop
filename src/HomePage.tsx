import React from 'react'
import ProductList from './productList'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import CarouselSection from './Carousel'
import FooterSection from './Footer'
import products from './allProducts'

export default function HomePage() {
    return (


        <>
            <CollapsibleNav showCart={true}/>
            <CarouselSection products={products}/>
            <ProductList />
            <MainGrid />
            <FooterSection />
        </>

    )
}
