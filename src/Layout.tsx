import React from 'react';
import { Grommet, Box, Grid } from 'grommet';
import { theme } from './index';
import CollapsibleNav from './CollapsibleNav';
import FooterSection from './Footer';

interface Props {
    showCart: boolean
    main: React.ReactNode
}
export const Layout = (props: Props) => {
    return (
        <Grommet theme={theme}>
            <Grid
                rows={['xsmall', 'large', 'xsmall']}
                areas={[
                    ['header'],
                    ['main'],
                    ['footer'],
                ]}
                gap="small"
            >

                <CollapsibleNav showCart={props.showCart} />

                <Box gridArea="main" >
                {props.main}
                </Box>

                <FooterSection />

            </Grid>
        </Grommet>
    );
};
