import React, {useState} from 'react';
import {
    Box,
    Carousel,
    Image
    
   } from 'grommet';
 import {  } from 'grommet-icons';



 interface Props {
     products: any
 }
export default function CarouselSection(props: Props) {
   

        
        return (
            <Box 
            margin={{ bottom: 'small'}}
             
            overflow="hidden"
            flex
            fill
            >
                <Carousel fill>
                    <Image fit="cover" src={props.products[1].img} />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                </Carousel>
            </Box>
            )
            
    
 }

 
