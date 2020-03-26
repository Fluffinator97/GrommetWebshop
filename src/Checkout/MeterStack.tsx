import React from 'react'
import { Meter, Stack, Text } from 'grommet'
import { Grid, ResponsiveContext, Grommet, Box, Button, Image } from "grommet";

interface Props {
    text: string
    percentageFilled: number
}

export const MeterStack = (props: Props) => {
    return (
        <Grommet>
            <ResponsiveContext.Consumer>
                {size => {
                    return (<Stack >
                        <Meter size='full' background='light-4'
                            values={[
                                {
                                    value: props.percentageFilled,
                                    label: props.text,
                                    color: 'brand'
                                }
                            ]}
                        />
                        <Text style={{ display: (size === 'small' ? 'none' : 'block') }} color='light-1' margin={{ left: 'large' }} alignSelf='center'>{props.text}</Text>
                    </Stack>)
                }}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}
