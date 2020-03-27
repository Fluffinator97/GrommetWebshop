import React from 'react'
import { Box, Button, Form, FormField, TextArea } from 'grommet'
import { LinkNext } from 'grommet-icons'


export const LoginForm = () => {
    return (
        <Box align="center" justify="center" margin='small'>
            <Box pad='small'>
                <Form

                    // onSubmit={({ value }) => console.log('Submit', value)}
                >
                    <Box pad='small' direction='row-responsive'>
                        <FormField pad={false} margin='xsmall' label="Name" name="name" required validate={{ regexp: /^[a-z]/i }} />
                        <FormField pad={false} margin='xsmall' label="Email" name="email" type="email" required />
                    </Box>
                    <FormField pad={false} margin='xsmall'
                        label="Mobile Number" name="mobileNum" required
                        validate={{ regexp: /^[0-9]{10}$/, message: '10 digits' }}
                    />
                    <FormField pad={false} margin='xsmall' label="Address" name="Address" component={TextArea} />


                    <Box direction="row" wrap={true} justify='evenly' margin={{ top: 'small' }}>
                        <Button label="Cancel" size='small' alignSelf='center' />
                        <Button type="reset" label="Reset" size='small' alignSelf='center' />
                        <Box animation='pulse'>
                            <Button

                                reverse={true} icon={<LinkNext />}
                                type="submit" label="Next" size='small' alignSelf='center' primary />
                        </Box>
                    </Box>

                </Form>
            </Box>

        </Box>
    )
}
