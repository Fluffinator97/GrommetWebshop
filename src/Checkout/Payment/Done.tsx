import React from "react";
import { Grid, ResponsiveContext, Grommet, Box, Button, Image, Heading, Text } from "grommet";
import { LinkNext } from "grommet-icons";
import { Link } from 'react-router-dom'
import SuccessPurchase from '../../assets/successful_purchase.svg'

interface Props {
    arrivalDate: React.ReactNode
}

function Done(props: Props) {

    const getUuid = (a: string = ''): string => (
        (a ? ((Number(a) ^ Math.random() * 16) >> Number(a) / 4).toString(16)
            : (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, getUuid))
    );


    console.log(getUuid())

    return (
        <Box justify='center' alignSelf='center' align='center' direction='row' wrap='reverse'>
            <Box pad={{ top: 'small' }}>
                <Image src={SuccessPurchase} />
            </Box>
            <Box pad='medium' gap='medium'>
                <Box align='center' justify='center'>
                    <Heading margin='none' textAlign='center' level={2}>Thanks! You're All Set </Heading>
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
                <Text>Your order <Text color='brand' weight='bold'>{getUuid()}</Text><br />
                 will reach you on <Text color='brand' weight='bold'>{props.arrivalDate} </Text></Text>
            </Box>
        </Box>
    )
}

export default Done
