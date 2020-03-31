import React from "react";
import { Grid, ResponsiveContext, Grommet, Box, Button, Image } from "grommet";
import { LinkNext } from "grommet-icons";
import { Link } from 'react-router-dom'
import { theme } from '../index'
import SucessPurschase from '../assets/successful_purchase.svg'

interface Props {
    userSnap: { name: string; mobNum: number; email: string }
}
function Done(props: Props) {
    return (
        <Grommet >
            <ResponsiveContext.Consumer>
                {size => {

                    console.log(size)
                    return (
                        <Grommet theme={theme}>
                            <Grid
                                columns={{
                                    count: 1,
                                    size: 'auto',
                                }}

                                align='center'
                                justify='center'
                                gap="medium"
                                margin={{ top: `${size}` }}
                            >
                                <Box height={{ min: 'small', max: `${size}` }} width={size} justify='evenly' align='center' >
                                    <Image src={SucessPurschase} />
                                    <Link to='/HomePage'>
                                        <Button
                                            primary
                                            reverse={true}
                                            icon={<LinkNext />}
                                            label='Continue Shopping '

                                            margin='small'
                                        />

                                    </Link>
                                </Box>
                            </Grid>
                        </Grommet>
                    );
                }}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}

export default Done
