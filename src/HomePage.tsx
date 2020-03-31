import React from 'react'
import MainGrid from './MainGrid'
import CollapsibleNav from './CollapsibleNav'
import Footer from './Footer'
import FirstSection from './FirstSection'

export default function HomePage() {
    return (
        <>
            <CollapsibleNav showCart={true}/>
            <FirstSection />
            <MainGrid />
            <Footer />
        </>

    )
}
