import React from 'react';
import { Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import { ResponsiveGrid } from "./ResponsiveGrid";
import products from './allProducts'
import Product from './product';

const customBreakpoints = deepMerge(grommet, {
    global: {
        breakpoints: {
            small: {
                value: 600
            },
            medium: {
                value: 900
            },
            large: 3000
        },
        font: {
            family: "'Overlock', cursive;",
        },
        colors: {
            brand: "neutral-3",
        },
        heading: {
            extend: "font-family: 'Nunito', sans-serif;",
        },
    }
});

export default function MainGrid() {
    return (
        <Grommet theme={customBreakpoints}>
            <ResponsiveGrid
                gap="medium"
                margin="medium"
                columns="medium"
                rows="xsmall"
            >
                {
                    products.map(item => (
                        <Product name={item.name} id={item.id} price={item.price} key={item.id} img={item.img} />
                    ))
                }
            </ResponsiveGrid>
        </Grommet>
    );
}