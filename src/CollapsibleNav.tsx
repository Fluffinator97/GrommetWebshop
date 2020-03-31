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
import { Link } from "react-router-dom";


interface Props {
    showCart: boolean
}

const CollapsibleNav = (props: Props) => (
    <ResponsiveContext.Consumer>
        {responsive =>
            responsive === "small" ? (
                <Header background="brand" pad="medium">
                    <Box direction="row">
                        <Menu
                            label="Click me"
                            items={[
                                { label: "Bed", onClick: () => { } },
                                { label: "Lamp", onClick: () => { } },
                                { label: "Table", onClick: () => { } },
                                { label: "Carpet", onClick: () => { } },
                                { label: "Pillow", onClick: () => { } }
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
                                <Anchor href="#" label="Bed" color='light-1' />
                                <Anchor href="#" label="Lamp" color='light-1' />
                                <Anchor href="#" label="Table" color='light-1' />
                                <Anchor href="#" label="Carpet" color='light-1' />
                                <Anchor href="#" label="Pillow" color='light-1' />
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