import React from "react";
import { Grid, ResponsiveContext, Grommet, Box, Button, Image, Heading, Text } from "grommet";
import { LinkNext } from "grommet-icons";
import { Link } from 'react-router-dom'
import SuccessPurchase from '../../assets/successful_purchase.svg'

interface Props {
    userSnap: { name: string; mobNum: number; email: string }
}
function Done(props: Props) {
    return (
        <Box justify='center' alignSelf='center' direction='row' wrap='reverse'>
            <Box height='small' width='medium'>
                <Image fit='contain' src={SuccessPurchase} />
            </Box>
            <Box height='small' width='medium'>
                <Heading textAlign='center' level={2}>Thank You For Shopping With us </Heading>
                <Link to='/HomePage'>
                    <Button
                        primary
                        reverse={true}
                        icon={<LinkNext />}
                        label='Continue Shopping '
                        margin='small'
                    />
                </Link>
                <Text>Your order No:...... containing ...items will reach you on </Text>
            </Box>
        </Box>
    )
}

export default Done
