import React from 'react'
import ProductList from './productList'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import CarouselSection from './Carousel'
import FooterSection from './Footer'

export default function HomePage() {
    return (


        <>
            <CollapsibleNav showCart={true}/>
            <CarouselSection />
            <ProductList />
            <MainGrid />
            <FooterSection />
        </>

    )
}
