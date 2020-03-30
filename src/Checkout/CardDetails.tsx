import React, { useState } from 'react'
import { Form, Box, FormField, Text, Button, MaskedInput, TextInput } from 'grommet'
import { LinkNext } from 'grommet-icons'

interface Props {
    userName: string
}
function CardDetails(props: Props) {
    const [nameValue, setNameValue] = useState(props.userName)
    const [value, setValue] = useState("")
    const [dateValue, setDateValue] = useState("")
    const [cvvValue, setCvvValue] = useState("")
    return (
        <Form>
            <Box pad='small' direction='row' align='center'>
                <Box pad='small'>
                    <Text>Name</Text>
                    
                    <TextInput
                        value={nameValue}
                        onChange={(event: { target: { value: React.SetStateAction<string> } }) => setNameValue(event.target.value)}
                    />
                </Box>
                <Box>
                    Card number
                <MaskedInput
                        mask={[

                            {
                                length: 4,
                                regexp: /^[0-9]{1,4}$/,
                                placeholder: "xxxx"
                            },

                            { fixed: " " },
                            {
                                length: 4,
                                regexp: /^[0-9]{1,4}$/,
                                placeholder: "xxxx"
                            },
                            { fixed: " " },
                            {
                                length: 4,
                                regexp: /^[0-9]{1,4}$/,
                                placeholder: "xxxx"
                            },
                            { fixed: " " },
                            {
                                length: 4,
                                regexp: /^[0-9]{1,4}$/,
                                placeholder: "xxxx"
                            }
                        ]}
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </Box>
                <Box pad='small' width='xsmall'>
                    CVV
                <MaskedInput
                        mask={[
                            {
                                length: 3,
                                regexp: /^[0-9]{1,3}$/,
                                placeholder: "xxx"
                            },

                        ]}
                        value={cvvValue}
                        onChange={event => setCvvValue(event.target.value)}
                    />
                </Box>
                <Box pad='small' width='small'>
                    Exp Date
                <MaskedInput
                        mask={[
                            {
                                length: [1, 2],
                                options: Array.from({ length: 12 }, (v, k) => k + 1),
                                regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                                placeholder: "mm"
                            },
                            { fixed: "/" },
                            {
                                length: 4,
                                options: Array.from({ length: 50 }, (v, k) => 2020 + k),
                                regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
                                placeholder: "yyyy"
                            }
                        ]}
                        value={dateValue}
                        onChange={event => setDateValue(event.target.value)}
                    />
                </Box>
            <Box animation='pulse'>
                <Button
                    reverse={true} icon={<LinkNext size='small' />}
                    type="submit" label="Next" size='small' primary />
            </Box>
            </Box>




        </Form>
    )
}

export default CardDetails
