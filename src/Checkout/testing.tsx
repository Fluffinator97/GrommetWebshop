import React from "react"
import { Box, Button, Grommet, Heading, Layer, Select, Text } from "grommet";
import { theme } from "../index";
import { Link } from "react-router-dom";

export const CancelButton = () => {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Grommet theme={theme}>
      <Button label='Cancel' onClick={onOpen} size='small' />
      {open && (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
            <Text>Are you sure?</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify='center'
              pad={{ top: "medium", bottom: "small" }}
            >
              <Link to='/MyCart'>
              <Button label="Yes" color="dark-3" /></Link>
              <Button
                label={
                  <Text color="white">
                    <strong>No</strong>
                  </Text>
                }
                onClick={onClose}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}

    </Grommet>
  );
};

