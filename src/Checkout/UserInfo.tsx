import React from 'react'
import { Box, Button, Form, FormField, TextArea } from 'grommet'
import { LinkNext } from 'grommet-icons'
import { CancelButton } from './testing'

interface Props{
    SubmitForm: (((event: React.FormEvent<Element>) => void) & ((event: React.FormEvent<HTMLFormElement>) => void))
}
export const UserInfo = (props:Props) => {


    return (
        <Box align="center" justify="center" margin='small'>
            <Box pad='small'>
                <Form onSubmit={props.SubmitForm} >
                    <Box pad='small' direction='row-responsive'>
                        <FormField
                            pad={false} margin='xsmall' label="Name" name="name" validate={{ regexp: /^[a-z]/i }} />
                        <FormField pad={false} margin='xsmall' label="Email" name="email" type="email" />
                    </Box>
                    <FormField pad={false} margin='xsmall'
                        label="Mobile Number" name="Mobile number"
                        validate={{ regexp: /^[0-9]{1}$/, message: '10 digits' }}
                    />
                    <FormField pad={false} margin='xsmall' label="Address" name="address" component={TextArea} />
                    <Box direction="row" wrap={true} justify='evenly' margin={{ top: 'small' }} gap='small'>
                        <CancelButton />
                        <Button type="reset" label="Reset" size='small' alignSelf='center' />
                        <Box animation='pulse'>
                            <Button
                                reverse={true} icon={<LinkNext size='small'/>}
                                type="submit" label="Next" size='small' alignSelf='center' primary />
                        </Box>
                    </Box>
                </Form>
            </Box>
        </Box>
    )
}
