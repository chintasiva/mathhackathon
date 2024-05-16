import React from 'react';
import { Box, Text, Container, Flex, Stack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Card from './Card';

import remote_damage_inspection from "../assets/imgs/remote_damage_inspection.png";
import loss_mitigation from "../assets/imgs/loss_mitigation.png";
import inteligent_clime_decision from "../assets/imgs/inteligent_clime_decision.png";
import insurance_clims from "../assets/imgs/insurance_climes.png";

const MotionBox = motion(Box);

const AISection = () => {
    const cardData = [
        {
            id: 1,
            title: "Remote damage inspection",
            description: "AI-based computer vision techs enable real-time monitoring of insured assets and automated damage inspection even across complex environments like manufacturing lines and offshore drilling rigs.",
            imageUrl: remote_damage_inspection
        },
        {
            id: 2,
            title: "Prescriptive analytics for loss mitigation",
            description: "AI analyzes real-time data on customer behavior and the insured asset state to assess potential loss risks. It offers intelligent suggestions on the proper course of action for policyholders to prevent claim events.",
            imageUrl: loss_mitigation,
        },
        {
            id: 3,
            title: "Intelligent claim decisioning",
            description: "AI recommends the best-fitting damage-handling service providers (e.g., healthcare providers, repair service companies) to claimants based on the analysis of service suppliers’ capacity, location, availability, pricing, etc.",
            imageUrl: inteligent_clime_decision,
        },
        {
            id: 4,
            title: "Data-driven claim validation",
            description: "AI matches the claimants’ loss incident data to the insurance coverage terms and the available data from third-party sources. It instantly identifies fraudulent claim patterns and alerts claim specialists about potential fraud cases.",
            imageUrl: insurance_clims,
        },
        // Add more card data as needed
    ];
    return (
        <Stack bg="gray.900" id='ai-section' pt={10}>
            <Box py={16} position="relative">
                <Box
                    bgGradient="linear(to-r, teal.500, blue.500)" // Custom gradient background matching your theme
                    w="50px"
                    h="10px"
                    borderRadius="full"
                    position="absolute"
                    top="10px"
                    left={{ base: "25px", md: "60px" }}
                    alignItems={'left'}
                    transform="translateX(-50%)"
                    as={motion.div} // Wrap with motion component
                    animate={{ x: 0, opacity: 1 }} // Animation when component is visible
                    initial={{ x: -50, opacity: 0 }} // Initial animation state
                    transition={{ type: 'spring', stiffness: 100 }}
                />
                <Flex style={{ width: '90%', margin: 'auto' }} >
                    <Text color="white" fontSize={{ base: 'lg', md: 'xl' }} textAlign={{ base: "justify", md: "justify" }}>
                        Artificial Intelligence (AI) has transitioned from being a mere buzzword to becoming a fundamental part of mainstream technology. Its influence is ubiquitous, permeating various sectors including dating apps and automotive technology. In today's landscape, virtually every technological element incorporates some aspect of artificial intelligence, and the automotive insurance industry is no exception.
                    </Text>
                </Flex>
            </Box>
            {/* <Card title={"Remote damage inspection"} description={'AI-based computer vision techs enable real-time monitoring of insured assets and automated damage inspection even across complex environments like manufacturing lines and offshore drilling rigs.'}
                imageUrl={remote_damage_inspection} /> */}
            <Container maxW="container.lg" py={16}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
                    {/* Loop through card data and render Card component */}
                    {cardData.map(card => (
                        <Card
                            _hover={{ cursor: "pointer" }}
                            as={MotionBox}
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            logoUrl={card.logoUrl}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Stack>
    );
};

export default AISection;
