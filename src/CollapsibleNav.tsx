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
import { Baby, User, UserFemale } from 'grommet-icons';

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
                                label="Categories"
                                items={[
                                    { label: "Bed", onClick: () => { } },
                                    { label: "Lamp", onClick: () => { } },
                                    { label: "Table", onClick: () => { } },
                                    { label: "Carpet", onClick: () => { } },
                                    { label: "Pillow", onClick: () => { } }
                                ]}
                            />
                        </Box>
                        <Box direction="row" align="center" gap="small">
                            <Anchor href="#" label='The Shop'/>
                         </Box >
                        <span style={props.showCart ? { display: 'block' } : { display: 'none' }}>
                            <CheckoutButton showLabel={false} />
                        </span>
                    </Header>



                ) : (

                        <Header background="dark-1" pad="medium" >
                            <Box direction="row" align="center" gap="small">
                            <Anchor href="#" label='The Shop'/>
                            </Box >
                            <Box direction='row' align='center' justify='stretch' >
                                <Nav direction="row" align='center'>
                                    
                                    <Anchor href="#" label="Bed" />
                                    <Anchor href="#" label="Lamp" />
                                    <Anchor href="#" label="Table" />
                                    <Anchor href="#" label="Carpet" />
                                    <Anchor href="#" label="Pillow" />
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