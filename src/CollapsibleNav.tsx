import React from "react";

import {
    Anchor,
    Box,
    Button,
    Grommet,
    Header,
    Nav,
    Menu,
    ResponsiveContext,
    Text
} from "grommet";
import { grommet } from "grommet/themes";
import { CheckoutButton } from "./CheckoutButton";
import { theme } from "./index";

interface Props {
    showCart: boolean
}

const CollapsableNav = (props: Props) => (
    <ResponsiveContext.Consumer>
        {responsive =>
            responsive === "small" ? (
                <Header background="brand" pad="medium" >
                    <Box direction="row">
                        <Menu
                            label="Click me"
                            items={[
                                { label: "Dam", onClick: () => { } },
                                { label: "Herr", onClick: () => { } },
                                { label: "Barn", onClick: () => { } }
                            ]}
                        />
                    </Box>
                    <Box direction="row" align="center" gap="small">
                        the shop
                         </Box >
                    <span style={props.showCart ? { display: 'block' } : { display: 'none' }}>
                        <CheckoutButton showLabel={false} />
                    </span>
                </Header>
            ) : (
                    <Header background="brand" pad="medium" >
                        <Box direction="row" align="center" gap="small">
                            <Anchor href="#" label='The Shop'/>
                         </Box >
                        <Box direction='row' align='center' justify='stretch' >
                            <Nav direction="row" align='center'>
                                <Anchor href="#" label="Dam" color='light-1' />
                                <Anchor href="#" label="Herr" color='light-1' />
                                <Anchor href="#" label="Barn" color='light-1' />
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

export default CollapsableNav