import React from 'react'
import ProductList from './productList'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import CarouselSection from './Carousel'
import Footer from './Footer'
import products from './allProducts'
import { Box } from 'grommet'

export default function HomePage() {
    return (
        <Box>
            <CollapsibleNav showCart={true}/>
            <Box height='small'><CarouselSection products={products}/></Box>
            <ProductList />
            <Box><MainGrid/></Box>
            <Footer/>
        </Box>

    )
}
