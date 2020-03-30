import React, { useState } from "react";

import {
    Accordion,
    AccordionPanel,
    Box,
    Grommet,
    Text,
    TextInput,
    FormField,
    Button,
    Form
} from "grommet";
import { theme } from '../index'
import { LinkNext } from "grommet-icons";
import CardDetails from "./CardDetails";


const renderPanelHeader = (title: {}, active: boolean) => (
    <Box direction="row" align="center" pad="medium" gap="small">
        <strong>
            <Text>{title}</Text>
        </strong>
        <Text color="brand">{active ? "-" : "+"}</Text>
    </Box>
);

interface Props {
    userSnap: { name: string; mobNum: number; email: string }
}
export const Payment = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState([0]);

    console.log(props.userSnap.email)
    return (
        <Grommet theme={theme}>
            <Accordion
                activeIndex={activeIndex}
                onActive={newActiveIndex => setActiveIndex(newActiveIndex)}
            >
                <AccordionPanel
                    header={renderPanelHeader("Swish", activeIndex.includes(0))}
                >
                    <Box pad="medium" background="Card" >
                        <Text>Panel 1 contents</Text>
                        <TextInput />
                    </Box>
                </AccordionPanel>
                <AccordionPanel
                    header={renderPanelHeader("Card", activeIndex.includes(1))}
                >
                    <Box pad="medium" >
                        <CardDetails userName={props.userSnap.name} />
                    </Box>
                </AccordionPanel>
                <AccordionPanel
                    header={renderPanelHeader("Invoice", activeIndex.includes(2))}
                >
                    <Box direction='row' align='center' >
                        <Form >
                            <Box direction='row' align='center' >
                                <Box pad='small' justify='evenly' direction='row' align='center' >
                                    <Text >Invoice will be sent to:</Text>
                                    <FormField name="email" type="email" value={props.userSnap.email} required />
                                </Box>
                                <Button
                                    reverse={true} icon={<LinkNext size='small' />}
                                    type="submit" label="Next" size='small' primary />
                            </Box>

                        </Form>
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Grommet>
    );
};
