import React from 'react';
import { Box, Flex, Text, Image, HStack, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const MotionButton = motion(Button);
const MotionBox = motion(Box);
const HeadSection = () => {
    return (
        <Stack bg="gray.900" pt={10} id="intro-section">
            <Flex
                as={MotionBox}
                w="90%"
                direction={{ base: 'column', md: 'row' }}
                alignItems='center'
                justify="space-evenly"
                px={8}
                py={16}
                style={{ margin: 'auto' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box flex={{ base: 1, md: 1 }} w={{ base: '100%', md: '50%' }} pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }} style={{ position: 'relative' }}>
                    <Text align='left' fontSize={{ base: '2xl', md: 'lg' }} fontWeight="bold" color="white" mb={4}>Auto Insurance</Text>
                    <Text align='left' fontWeight="bold" fontSize={{ base: '3xl', md: '3xl' }} color="gray.300" mb={8}>Compilation of Data Sets for Car Damage Detection in the Automotive Sector</Text>
                    <Text align='start' sx={{ wordSpacing: '0.rem' }} fontSize={{ base: 'md', md: 'lg' }} color="gray.300">Involving the Collection, Annotation, and Segmentation of Video and Image Datasets to Train Models.</Text>
                    <Box
                        display="flex" justifyContent="start"
                        pt={{ base: 5, md: 7 }}
                    >
                        <Link to={'/contact_us'}>   <MotionButton size='md'
                            height='48px'
                            width='200px'
                            border='2px'
                            borderColor='green.500'
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}>Contact Us</MotionButton></Link>
                    </Box>
                </Box>
                <Box flex={{ base: 1, md: 1 }} w={{ base: '100%', md: '80%' }} p='2' ml={{ base: 0, md: 50 }} style={{ position: 'relative' }}>
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0G_Yp2aFpNOAmLiceI0eH6UdMws4kcbXatFnv4m1dw&s"
                        alt="Car Damage Detection"
                        borderRadius="md"
                        boxShadow="lg"
                        objectFit={{ base: 'cover', md: 'contain' }}
                        h={{ base: 'auto', md: '100%' }}
                        w={{ base: '100%', md: '90%' }}
                        ml={{ base: '0', md: '35' }}
                    />
                    <Box
                        bgGradient="linear(to-r, rgba(0,0,0,0.8), rgba(0,0,0,0))"
                        position="absolute"
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        borderRadius="md"
                        transition="all 0.3s"
                        opacity={0}
                        _hover={{ opacity: 1 }}
                    />
                </Box>
            </Flex>
        </Stack >
    );
};

export default HeadSection;
