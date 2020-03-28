import React from 'react'
import {
    Box,
    Footer,
    Text,
    Grommet,
    Anchor,
    
    
    
   } from 'grommet';
import { Instagram, FacebookOption, Twitter} from 'grommet-icons';




const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
      <Anchor
        a11yTitle="Share feedback on Github"
        href="https://www.instagram.com/"
        icon={<Instagram color="brand" />}
      />
      <Anchor
        a11yTitle="Chat with us on Slack"
        href="https://www.facebook.com/"
        icon={<FacebookOption color="brand" />}
      />
      <Anchor
        a11yTitle="Follow us on Twitter"
        href="https://twitter.com/"
        icon={<Twitter color="brand" />}
      />
    </Box>
  );



  
  
  export default function FooterSection() {
    return (
      <Grommet>
        
        {/* <Footer background="dark-1" pad="large">
          
        </Footer> */}
        <Footer
          background="dark-2"
          pad={{ horizontal: "large", vertical: "small" }}
        >
          <Box direction="row" gap="small">
            <Text alignSelf="center">The Shop</Text>
          </Box>
          <Media />
          <Text textAlign="center" size="small">
            © 2020 Copyright Group F
          </Text>
        </Footer>
      </Grommet>
    );
  };