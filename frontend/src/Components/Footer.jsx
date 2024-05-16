import React from 'react';
import { Box, Flex, Text, IconButton, Link, Icon } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from "../assets/logos/logo.png";

const Footer = () => {
    return (
        <Box as="footer" bg="#000" py="4" color='white'>
            <Flex direction="column" align="center">
                <Box mb="2">
                    <img src={logo} alt="Logo" width="100%" />
                </Box>
                <Flex>
                    <IconButton
                        as={Link}
                        href="#"
                        aria-label="Twitter"
                        icon={<Icon as={FaTwitter} />}
                        mr="2"
                    />
                    <IconButton
                        as={Link}
                        href="#"
                        aria-label="Facebook"
                        icon={<Icon as={FaFacebook} />}
                        mr="2"
                    />
                    <IconButton
                        as={Link}
                        href="#"
                        aria-label="Instagram"
                        icon={<Icon as={FaInstagram} />}
                    />
                </Flex>
                <Text mt="2">&copy; 2024 My Website. All rights reserved.</Text>
            </Flex>
        </Box>
    );
};

export default Footer;

