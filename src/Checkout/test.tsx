import React from "react";
import { Gremlin } from "grommet-icons";
import { Box, Grommet, List, Text } from "grommet";

export const data = ["Boise", "Fort Collins", "Bay Area", "North Carolina"];

export const ChildrenExample = () => (
  <Grommet>
    <Box pad="large" height="100%" background="light-2">
      <List data={data} pad="medium">
        {(datum: React.ReactNode, index: number) => (
          <Box
            key={index}
            direction="row-responsive"
            gap="large"
            align="center"
          >
            <Gremlin size="large" />
            <Text weight="bold">{datum}</Text>
          </Box>
        )}
      </List>
    </Box>
  </Grommet>
);
