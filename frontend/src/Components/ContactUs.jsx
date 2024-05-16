import React, { useState } from 'react';
import { Box, Stack, Heading, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const toast = useToast();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const serviceId = 'service_cbb5ffi';
        const templateId = 'template_53uuyya';
        const userId = 'GOfJ0x0FDljEKyk9f';
        if (formData.name && formData.email && formData.message) {
            try {
                const response = await emailjs.send(serviceId, templateId, formData, userId);
                console.log('Email sent successfully:', response);
                toast({
                    title: "Message Sent",
                    description: "Your message has been sent successfully!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setIsLoading(false)
                setTimeout(() => {
                    navigate("/")
                }, 2000)
            } catch (error) {
                console.error('Email sending failed:', error);
                setIsLoading(false)
                toast({
                    title: "Error",
                    description: "Failed to send message. Please try again later.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } else {
            toast({
                title: "Error",
                description: "Please Enter the details",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            setIsLoading(false)
        }
    };

    return (
        <Stack spacing={4} position="relative">
            <Box
                bgImage="url('https://med-hot.com/wp-content/uploads/2020/04/subpage-banner-01.jpg')"
                bgSize="cover"
                bgPosition="center"
                minHeight={{ base: '100vh', md: '85vh' }}
            />
            <Box
                as={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                position="absolute"
                top="20%"
                left={{ base: "5%", md: "30%" }}
                transform="translate(-50%, -50%)"
                width="90%"
                maxWidth="500px"
                padding="1rem"
                bg="rgba(255,255,255,0.9)"
                borderRadius="0.5rem"
                boxShadow="0 4px 8px rgba(0,0,0,0.1)"
            >
                <Heading as="h2" size="lg" mb={4} textAlign="center">Contact Us</Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            size="md"
                            resize="vertical"
                        />
                        <Button isLoading={isloading} type="submit" colorScheme="blue" w="100%">{isloading ? "Sending..." : "Send"}</Button>
                    </Stack>
                </form>
            </Box>
        </Stack>
    );
};

export default ContactUs;
