import React from "react";
import { Grid, ResponsiveContext } from "grommet";

// columns, rows and areas are for Grid with a known number of contents / boxes.

// if size if small, we only 1 column
// if size if medium, we only 2 column
// if size if large or xlarge, we 3 three columns
const columnSize = {
    'small': ["auto"],
    'medium': ["auto", "auto"],
    'large': ["auto", "auto", "auto"],
    'xlarge': ["auto", "auto", "auto"]
};

// if size if small, we have 3 rows
// if size if medium, we have 2 rows
// if size if large or xlarge, we have 1 row
const rowSize = {
    small: ["xsmall", "xsmall", "xsmall"],
    medium: ["xsmall", "xsmall"],
    large: ["xsmall"],
    xlarge: ["xsmall"]
};

export const ResponsiveGrid = ({
    ...props
}) => (
        <ResponsiveContext.Consumer>
            {size => {
                // take into consideration if not array is sent but a simple string
                let columnsVal = columnSize.small;
                if (columnSize) {
                    switch (size) {
                        case 'small': columnsVal = columnSize.small
                            break;
                        case 'medium': columnsVal = columnSize.medium
                            break;
                        case 'large': columnsVal = columnSize.large
                            break;
                        case 'xlarge': columnsVal = columnSize.xlarge
                            break;
                    }
                }

                let rowsVal = rowSize.small;
                if (rowSize) {
                    switch (size) {
                        case 'small': rowsVal = rowSize.small
                            break;
                        case 'medium': rowsVal = rowSize.medium
                            break;
                        case 'large': rowsVal = rowSize.large
                            break;
                        case 'xlarge': rowsVal = rowSize.xlarge
                            break;
                    }
                }

                return (
                    <Grid
                        {...props}

                        rows={!rowsVal ? size : rowsVal}
                        columns={!columnsVal ? size : columnsVal}
                    >

                    </Grid>
                );
            }}
        </ResponsiveContext.Consumer>
    );
