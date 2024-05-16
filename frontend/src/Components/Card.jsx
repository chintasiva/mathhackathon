// import React from 'react';
// import { Box, Text, Image, useBoolean } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const Card = ({ title, description, imageUrl, logoUrl }) => {
//     const [isHovered, setIsHovered] = useBoolean();
//     return (
//         <Box
//             maxW="280px"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             boxShadow="lg"
//             position="relative"
//             mx="auto"
//             mt={4}
//         >
//             <motion.div
//                 style={{ padding: "65px", height: "200px", display: "flex", alignItems: "center" }}
//                 whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//                 onHoverStart={() => setIsHovered.on()}
//                 onHoverEnd={() => setIsHovered.off()}
//             >
//                 <Image src={imageUrl} alt={title} />
//             </motion.div>
//             <Box p="6">
//                 <Text fontWeight="bold" fontSize="lg" mb="2" textAlign="center" noOfLines={2}>{title}</Text>
//                 <Text color="gray.500" fontSize="sm" textAlign="center" noOfLines={3}>{description}</Text>
//             </Box>
//         </Box>
//     );
// };

// export default Card;


// import React from 'react';
// import { Box, Text, Image, useBoolean } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const Card = ({ title, description, imageUrl, logoUrl }) => {
//     const [isHovered, setIsHovered] = useBoolean();
//     return (
//         <Box
//             maxW="280px"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             boxShadow="lg"
//             position="relative"
//             mx="auto"
//             mt={4}
//         >
//             {/* Image container */}
//             <Box position="relative" height="200px">
//                 <Image src={imageUrl} alt={title} objectFit="cover" w="100%" h="100%" />

//                 {/* Overlay to create hover effect */}
//                 <motion.div
//                     whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
//                     style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         background: 'black',
//                         zIndex: 1,
//                     }}
//                 />
//             </Box>

//             {/* Content */}
//             <Box p="6">
//                 <Text fontWeight="bold" fontSize="lg" mb="2" textAlign="center" noOfLines={2}>{title}</Text>
//                 <Text color="gray.500" fontSize="sm" textAlign="center" noOfLines={3}>{description}</Text>
//             </Box>
//         </Box>
//     );
// };

// export default Card;


import React from 'react';
import { Box, Text, Image, useBoolean } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Card = ({ title, description, imageUrl, logoUrl }) => {
    const [isHovered, setIsHovered] = useBoolean();

    return (
        <Box
            _hover={{ cursor: "pointer" }}
            maxW="320px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            position="relative"
            mx="auto"
            mt={4}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                style={{ padding: "75px", height: "200px", display: "flex", alignItems: "center" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                onHoverStart={() => setIsHovered.on()}
                onHoverEnd={() => setIsHovered.off()}
            >
                <Image src={imageUrl} alt={title} />
            </motion.div>
            <Box p="6">
                <Text fontWeight="bold" color={"gray.600"} fontSize="lg" mb="2" textAlign="center" noOfLines={2}>{title}</Text>
                <Text color="gray.400" fontSize="sm" textAlign="justify">{description}</Text>
            </Box>
        </Box>
    );
};

export default Card;
