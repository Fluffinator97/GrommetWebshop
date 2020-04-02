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
import { Link, Redirect } from "react-router-dom";
import MyCart from "./Checkout/MyCart";
import { link } from "fs";


interface Props {
    showCart: boolean
}

const CollapsibleNav = (props: Props) => (
    <ResponsiveContext.Consumer>
        {responsive =>
            responsive === "small" ? (
                <Header background="brand" pad="medium" >
                    <Box direction="row">
                        <Menu
                            label="Categories"
                            items={[
                                { label: "Beds", onClick: () => { } },
                                { label: "Lamps", onClick: () => { } },
                                { label: "Tables", onClick: () => { } },
                                { label: "Carpets", onClick: () => { } },
                                { label: "Pillows", onClick: () => { } },
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
                        <Box direction='row' align='center' justify='stretch' >
                            <Nav direction="row" align='center'>
                                <Anchor href="#" label="Beds" color='light-1' />
                                <Anchor href="#" label="Lamps" color='light-1' />
                                <Anchor href="#" label="Tables" color='light-1' />
                                <Anchor href="#" label="Carpets" color='light-1' />
                                <Anchor href="#" label="Pillows" color='light-1' />
                            </Nav>
                        </Box>
                        <span style={props.showCart ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                            <CheckoutButton showLabel={true} />
                        </span>
                    </Header>
                )
        }
    </ResponsiveContext.Consumer>
);

export default CollapsibleNav