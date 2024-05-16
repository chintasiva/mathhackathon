import React, { useState } from 'react';
import { Box, Flex, IconButton, Stack, HStack, useDisclosure, Text, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import logo from "../assets/logos/logo.png";
import sslogo from "../assets/logos/smallscreenlogobg.png";
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navLinks = [
        { id: 1, text: 'Intro', to: 'intro-section' },
        { id: 2, text: 'AI solution', to: 'ai-section' },
        { id: 3, text: 'Check Damage', to: 'check-damage-section' }
    ];

    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
            duration: 800,
            smooth: 'easeInOutQuart'
        });
        onClose();
    };

    const scrollToIntroSection = () => {
        scroll.scrollTo('intro-section', {
            duration: 800,
            smooth: 'easeInOutQuart'
        });
        onClose(); 
    };

    return (
        <Box bgGradient="linear(to-r, #1a1a1a, #000000)" px={4} py={3}  position="fixed"
        top={0}
        width="100%" 
        zIndex={999}>
            <Flex justify="space-between" align="center">
                <Stack direction="row" align="center" style={{ width: "100%", margin: "auto" }}>
                    <Link to={"/"}>  <Image onClick={scrollToIntroSection} boxSize="auto" h={window.innerWidth > 768 ? "60px" : "50px"} src={window.innerWidth > 768 ? logo : sslogo} alt="company logo" /></Link>
                    {window.innerWidth > 768 && (
                        // <Stack style={{ width: "60%", margin: "auto", border: "1px solid red" }} direction="row" spacing={4}>
                        <HStack spacing={20} flex={1} justify="center">
                            {navLinks.map(link => (
                                <Text key={link.id} fontWeight="bold" color="white" cursor="pointer">
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        duration={800}
                                    >
                                        {link.text}
                                    </ScrollLink>
                                </Text>
                            ))}
                        </HStack>
                    )}
                </Stack>
                <Box display={{ base: 'block', md: 'none' }} >
                    <IconButton
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        onClick={isOpen ? onClose : onOpen}
                        variant="outline"
                    />
                </Box>
                <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }}>
                    {/* <Button variant="solid" colorScheme="blackAlpha" size="sm">Login</Button> */}
                   <Link to="/contact_us" ><Button variant="solid" colorScheme="cyan" size="sm">Contact Us</Button></Link> 
                </Stack>
            </Flex>
            {isOpen && (
                <Box bgGradient="linear(to-r, #1a1a1a, #000000)" px={4} py={3} w="95%" position="absolute" zIndex={10} >
                    <Stack spacing={4}>
                        {navLinks.map(link => (
                            <Text key={link.id} align="center" fontWeight="bold" color="white" cursor="pointer">
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={800}
                                    onClick={() => scrollToSection(link.to)}
                                >
                                    {link.text}
                                </ScrollLink>
                            </Text>
                        ))}
                       <Link to='/contact_us'> <Button variant="outline" w='100%' colorScheme="teal" size="sm">Contact Us</Button></Link>
                        {/* <Button variant="solid" colorScheme="cyan" size="sm">Signup</Button> */}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default Navbar;
