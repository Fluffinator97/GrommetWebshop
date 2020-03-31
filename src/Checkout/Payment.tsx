import React, { useState } from "react";
import { Accordion, AccordionPanel, Box, Grommet, Text, FormField, Form } from "grommet";
import { theme } from '../index'
import CardDetails from "./CardDetails";
import FinishBuyButton from "./FinishBuyButton";

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
    SubmitForm: (((event: React.FormEvent<Element>) => void) & ((event: React.FormEvent<HTMLFormElement>) => void))
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
                    <Form onSubmit={props.SubmitForm}>
                        <Box direction='row' align='center'>

                            <Box direction='row' justify='evenly' align='center'>
                                <Text >Mobile Num : </Text>
                                <FormField pad={false} margin='xsmall'
                                    name="Mobile number" value={props.userSnap.mobNum}
                                    validate={{ regexp: /^[0-9]{10}$/, message: '10 digits' }}
                                    onClick={(e) => (e.currentTarget.value = '')}
                                />
                            </Box>
                            <FinishBuyButton />
                        </Box>
                    </Form>
                </AccordionPanel>
                <AccordionPanel
                    header={renderPanelHeader("Card", activeIndex.includes(1))}
                >
                    <Box pad="medium" >
                        <CardDetails userName={props.userSnap.name} SubmitForm={props.SubmitForm}/>
                    </Box>
                </AccordionPanel>
                <AccordionPanel
                    header={renderPanelHeader("Invoice", activeIndex.includes(2))}
                >
                    <Box direction='row' align='center' >
                        <Form onSubmit={props.SubmitForm}>
                            <Box direction='row' align='center' >
                                <Box pad='small' justify='evenly' direction='row' align='center' >
                                    <Text >Invoice will be sent to:</Text>
                                    <FormField name="email" type="email" value={props.userSnap.email} required />
                                </Box>
                                <FinishBuyButton />
                            </Box>
                        </Form>
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Grommet >
    );
};
