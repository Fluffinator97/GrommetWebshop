import React from "react";

import {
    Anchor,
    Box,
    Header,
    Nav,
    Menu,
    ResponsiveContext,
} from "grommet";

import { CheckoutButton } from "./CheckoutButton";
import { Link} from "react-router-dom";

interface Props {
    showCart: boolean
    showMenu: boolean
}

const scrollToElement = (name: any) => {
    let element = document.querySelector(`#${name}`)
    if(element){
        element.scrollIntoView()
    }
}
const CollapsibleNav = (props: Props) => {
    
   return (
  
    <ResponsiveContext.Consumer>
        {responsive =>
            responsive === "small" ? (
                <Header background="brand" pad="medium" >
                    <Box direction="row" style={props.showMenu ? { display: 'block' } : { display: 'none' }}>
                        <Menu
                            label="Categories"
                            items={[
                                { label: "Beds", onClick: () => scrollToElement('beds') },
                                { label: "Lamps", onClick: () => scrollToElement('lamps') },
                                { label: "Tables", onClick: () => scrollToElement('tables') },
                                { label: "Carpets", onClick: () => scrollToElement('carpets') },
                                { label: "Pillows", onClick: () => scrollToElement('pillows') },
                                { label: "My Cart", onClick: ()=> {} },
                            ]}
                        />
                    </Box>
                    <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                        <Box direction="row" align="center" gap="small">
                            The Shop
                         </Box >
                    </Link>
                    <span style={props.showCart ? { display: 'block' } : { display: 'none' }}>
                        <CheckoutButton showLabel={false} />
                    </span>
                </Header>
            ) : (
                    <Header background="brand" pad="medium" >
                        <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
                            <Box color='light-1' direction="row" align="center" gap="small">
                                The Shop
                            </Box>
                        </Link>
                        <Box direction='row' align='center' justify='stretch' style={props.showMenu ? { display: 'block' } : { display: 'none' }}>
                            <Nav direction="row" align='center'>
                                <Anchor onClick={()=>scrollToElement('beds')} label="Beds" color='light-1' />
                                <Anchor onClick={()=>scrollToElement('lamps')} label="Lamps" color='light-1' />
                                <Anchor onClick={()=>scrollToElement('tables')} label="Tables" color='light-1' />
                                <Anchor onClick={()=>scrollToElement('carpets')} label="Carpets" color='light-1' />
                                <Anchor onClick={()=>scrollToElement('pillows')} label="Pillows" color='light-1' />
                            </Nav>
                        </Box>
                        <span style={props.showCart ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                            <CheckoutButton showLabel={true} />
                        </span>
                    </Header>
                )
        }
    </ResponsiveContext.Consumer>
);}

export default CollapsibleNav