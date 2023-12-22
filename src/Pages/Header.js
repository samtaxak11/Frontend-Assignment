import React from 'react'

import {Box, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Box width={"100%"} display = "flex" padding={["0px" , "20px"]} alignItems={"center"} justifyContent={"space-between"}>
        {/* Left Side */}
        
        <Box  display = "flex" alignItems={"center"}  justifyContent={"space-between"} gap={"12px"} marginLeft={"640px"} >
            <Text fontSize={["2xl", '5xl']} color='#2A4365' as='b' bgGradient='linear(to-l, #63B3ED, #2B6CB0)' bgClip='text'>Dynamic Form Maker</Text>
        </Box>

        {/* Right Side */}

        <ColorModeSwitcher />
        
    </Box>
  )
}

export default Header;