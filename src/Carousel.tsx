import React, {useState} from 'react';
import {
    Box,
    Carousel,
    Image
    
   } from 'grommet';
 import {  } from 'grommet-icons';

export default function CarouselSection() {
   

        
        return (
            <Box 
            margin={{ bottom: 'small'}}
             
            overflow="hidden"
            flex
            fill
            >
                <Carousel fill>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                </Carousel>
            </Box>
            )
            
    
 }

 
