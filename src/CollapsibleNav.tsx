import React from "react";

import {
    Anchor,
    Box,
    Grommet,
    Header,
    Nav,
    Menu,
    ResponsiveContext
} from "grommet";
import { grommet } from "grommet/themes";
import { CheckoutButton } from "./CheckoutButton";

interface Props {
    showCart: boolean
}

const CollapsableNav = (props: Props) => (
    <Grommet theme={grommet}>
        <ResponsiveContext.Consumer>
            {responsive =>
                responsive === "small" ? (
                    <Header background="dark-1" pad="medium" >
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

                        <Header background="dark-1" pad="medium" >
                            <Box direction="row" align="center" gap="small">
                                the shop
                         </Box >
                            <Box direction='row' align='center' justify='stretch' >
                                <Nav direction="row" align='center'>
                                    <Anchor href="#" label="Dam" />
                                    <Anchor href="#" label="Herr" />
                                    <Anchor href="#" label="Barn" />
                                </Nav>
                            </Box>
                            <span style={ props.showCart ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                            <CheckoutButton showLabel={true} />
                            </span>
                        </Header>
                    )

            }



        </ResponsiveContext.Consumer>

    </Grommet >
);

export default CollapsableNav