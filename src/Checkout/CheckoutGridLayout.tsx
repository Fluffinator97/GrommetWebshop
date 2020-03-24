import React from 'react';
import { Grommet, Box, Grid } from 'grommet';
import { grommet } from 'grommet/themes';

interface Props{
    header: React.ReactNode
    main: React.ReactNode
    footer: React.ReactNode
    sidebarState : boolean
    sidebar?: React.ReactNode
}

const GridAreasAlternative = (props :Props) => {
    let gridArea = `${props.main}`
    if (props.sidebarState){
        gridArea = `${props.sidebar}`
    }
  return (
    <Grommet full theme={grommet}>
      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['1/4', '3/4']}
        areas={[
          ['header', 'header'],
          [`${gridArea}`, 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
      >
        <Box background="brand" gridArea="header">
         {props.header}
        </Box>

        <Box background="light-5" gridArea="sidebar">
          {props.sidebar}
        </Box>

        <Box background="light-2" gridArea="main">
        {props.main}
        </Box>

        <Box background="dark-2" gridArea="footer">
        {props.footer}
        </Box>
      </Grid>
    </Grommet>
  );
}

export default GridAreasAlternative