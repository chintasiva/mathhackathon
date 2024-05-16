// import { useState } from 'react';
// import { Box, Flex, Text, Button, Center } from '@chakra-ui/react';
// import { FiUpload } from 'react-icons/fi'; // Import the FiUpload icon

// const FileUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setSelectedFile(event.dataTransfer.files[0]);
//   };

//   const handleUpload = () => {
//     // Handle the upload process here
//     if (selectedFile) {
//       // You can send the file to the server or perform any other action
//       console.log('Uploading file:', selectedFile);
//     }
//   };

//   return (
//     <Flex
//       justify="center"
//       align="center"
//       minH="100vh"
//       bgGradient="linear(to-r, #1a1a1a, #000000)"
//       px={4}
//       py={3}
//     >
//       <Box maxW="420px" w="100%">
//         <Text fontSize="20px" mt={15} color='white' textAlign="center">Upload Your File here to Check the Damage</Text>

//         <Box
//           mt={10}
//           p={8}
//           borderRadius="20px"
//           bg="#fff"
//           boxShadow="0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.28)"
//           textAlign="center"
//           onDrop={handleDrop}
//           onDragOver={(e) => e.preventDefault()}
//         >
//           <label htmlFor="file-upload" className="label">
//             <Box
//               borderRadius="20px"
//               p={8}
//               w="100%"
//               border='2px'
//               borderColor='black.500'
//               _hover={{ transform: 'scale(1.1)' }}
//               transition="0.3s"
//             >
//               <Box textAlign="center" mb={4}>
//                 <Center mb={4}> {/* Center the icon */}
//               <FiUpload size={50} /> {/* Use the FiUpload icon */}
//             </Center>
//               </Box>
//               <Text fontSize="xl" mt={4}>
//                 {selectedFile ? selectedFile.name : 'Drag & drop any file here'}
//               </Text>
//             </Box>
//             <input
//               type="file"
//               id="file-upload"
//               style={{ display: 'none' }}
//               onChange={handleFileInputChange}
//             />
//           </label>

//           {/* Upload button */}
//           <Button
//             bg="#000"
//             color="#f7fff7"
//             fontSize="18px"
//             borderRadius="20px"
//             mt={4}
//             w="100%"
//             onClick={handleUpload}
//             _hover={{ bg: "#333" }}
//           >
//             Upload
//           </Button>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default FileUploader;

// import { useState } from 'react';
// import { Box, Flex, Text, Button, Center } from '@chakra-ui/react';
// import { FiUpload } from 'react-icons/fi'; // Import the FiUpload icon
// import axios from 'axios';

// const FileUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setSelectedFile(event.dataTransfer.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);
//       await axios.post("http://localhost:5000/", formData)
//         .then((res) => {
//           console.log(res)
//         })
//         .catch((err) => {
//           console.log(err)
//         })

//       console.log('Uploading file:', selectedFile);
//     }
//   };

//   return (
//     <Flex
//       justify="center"
//       align="center"
//       minH="100vh"
//       bgGradient="linear(to-r, #1a1a1a, #000000)"
//       px={4}
//       py={3}
//     >
//       <Box maxW="420px" w="100%">
//         <Text fontSize="20px" mt={15} color='white' textAlign="center">Upload Your File here to Check the Damage</Text>

//         <Box
//           mt={10}
//           p={8}
//           borderRadius="20px"
//           bg="#fff"
//           boxShadow="0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.28)"
//           textAlign="center"
//           onDrop={handleDrop}
//           onDragOver={(e) => e.preventDefault()}
//         >
//           <label htmlFor="file-upload" className="label">
//             <Box
//               borderRadius="20px"
//               p={8}
//               w="100%"
//               border='2px'
//               borderColor='black.500'
//               _hover={{ transform: 'scale(1.1)' }}
//               transition="0.3s"
//             >
//               <Box textAlign="center" mb={4}>
//                 <Center mb={4}> {/* Center the icon */}
//                   <FiUpload size={50} /> {/* Use the FiUpload icon */}
//                 </Center>
//               </Box>
//               <Text fontSize="xl" mt={4}>
//                 {selectedFile ? selectedFile.name : 'Drag & drop any file here'}
//               </Text>
//             </Box>
//             <input
//               type="file"
//               id="file-upload"
//               style={{ display: 'none' }}
//               onChange={handleFileInputChange}
//             />
//           </label>

//           {/* Upload button */}
//           <Button
//             bg="#000"
//             color="#f7fff7"
//             fontSize="18px"
//             borderRadius="20px"
//             mt={4}
//             w="100%"
//             onClick={handleUpload}
//             _hover={{ bg: "#333" }}
//           >
//             Upload
//           </Button>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default FileUploader;

// import React, { useState } from 'react';
// import { Box, Flex, Text, Button, Center, Stack, useToast } from '@chakra-ui/react';
// import { FiUpload } from 'react-icons/fi';
// import axios from 'axios';
// import loadinggif from "../assets/GIF/loadinggif.gif"

// const FileUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [response, setResponse] = useState(null);
//   const [imageData, setImageData] = useState(null);
//   const [isloading, setIsLoading] = useState(false);
//   const toast = useToast();

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setSelectedFile(event.dataTransfer.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     setIsLoading(true)
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       try {
//         const res = await axios.post('http://localhost:5000/', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         console.log(res)
//         setResponse(res.data);
//         setImageData(res.data.image);
//         toast({
//           title: "Successfully got the response",
//           description: "Your message has been sent successfully!",
//           status: "success",
//           duration: 3000,
//           isClosable: true,
//         });
//         setIsLoading(false)
//       } catch (error) {
//         console.error('Error uploading file:', error);
//         toast({
//           title: "Error",
//           description: error.response.data,
//           status: "error",
//           duration: 3000,
//           isClosable: true,
//         });
//         setIsLoading(false)

//       }
//     }
//   };

//   return (
//     <Stack bg="gray.900" id='check-damage-section'>
//       <Flex
//         justify="center"
//         align="center"
//         minH="100vh"
//         bgGradient="linear(to-r, #1a1a1a, #000000)"
//         px={4}
//         py={3}
//       >
//         <Box maxW="420px" w="100%">
//           <Text fontSize="20px" mt={15} color='white' textAlign="center">Upload Your File here to Check the Damage</Text>

//           <Box
//             mt={10}
//             p={8}
//             borderRadius="20px"
//             bg="#fff"
//             boxShadow="0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.28)"
//             textAlign="center"
//             onDrop={handleDrop}
//             onDragOver={(e) => e.preventDefault()}
//           >
//             <label htmlFor="file-upload" className="label">
//               <Box
//                 borderRadius="20px"
//                 p={8}
//                 w="100%"
//                 border='2px'
//                 borderColor='black.500'
//                 _hover={{ transform: 'scale(1.1)' }}
//                 transition="0.3s"
//               style={{ cursor: 'pointer' }}
//               >
//                 <Box textAlign="center" mb={4}>
//                   <Center mb={4}>
//                     <FiUpload size={50} />
//                   </Center>
//                 </Box>
//                 <Text fontSize="xl" mt={4}>
//                   {selectedFile ? selectedFile.name : 'Drag & drop any file here'}
//                 </Text>
//               </Box>
//               <input
//                 type="file"
//                 id="file-upload"
//                 style={{ display: 'none' }}
//                 onChange={handleFileInputChange}
//               />
//             </label>

//             <Button
//             isDisabled={!selectedFile}
//               bg="#000"
//               color="#f7fff7"
//               fontSize="18px"
//               borderRadius="20px"
//               mt={4}
//               w="100%"
//               onClick={handleUpload}
//               _hover={{ bg: "#333" }}
//             >
//               Upload
//             </Button>


//           </Box>
//         </Box>
//       </Flex>
//       {isloading ? (loadinggif &&
//         <Box  w='40%' m='auto' style={{ marginTop: '-80px' }}>
//           <img src={loadinggif} alt='loader' />
//         </Box>)
//         :
//         (response && imageData && (

//           <Box w='40%' m='auto' mb={10} bg="gray.900" p={10} style={{ marginTop: '-80px' }}
//             borderRadius="20px"
//             border='2px'
//             borderColor='teal.500'
//             _hover={{ transform: 'scale(1.1)' }}
//             transition="0.3s"
//           >
//             <Text fontSize="xl" color="white" textAlign='center' pb={5} >Damage Percentage: {response.damaged_percentage}%</Text>
//             <img src={imageData} alt="Damage Image" style={{ width: '100%' }} />
//           </Box>
//         ))
//       }
//     </Stack>
//   );
// };

// export default FileUploader;

import { VictoryPie } from 'victory';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import React, { useState } from 'react';
import { Box, Flex, Text, Button, Center, Stack, useToast } from '@chakra-ui/react';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';
import loadinggif from "../assets/GIF/loadinggif.gif"

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true)
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', selectedFile);

  //     try {
  //       const res = await axios.post('https://mathhackathon.onrender.com/', formData, {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       });
  //       console.log(res)
  //       setResponse(res.data);
  //       setImageData(res.data.image);
  //       toast({
  //         title: "Successfully got the response",
  //         description: "Your message has been sent successfully!",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       setIsLoading(false)
  //     } catch (error) {
  //       console.error('Error uploading file:', error);
  //       toast({
  //         title: "Error",
  //         description: error.response.data,
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       setIsLoading(false)

  //     }
  //   }
  // };


  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile); // Ensure 'file' matches the backend key
  
      try {
        const res = await axios.post('http://localhost:5000/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data' // Use multipart/form-data for file upload
          }
        });
        console.log(res)
        setResponse(res.data);
        setImageData(res.data.image);
        toast({
          title: "Successfully got the response",
          description: "Your message has been sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error uploading file:', error);
        toast({
          title: "Error",
          description: error.response.data.error, // Access error message properly
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setIsLoading(false);
      }
    } else {
      // Handle case when no file is selected
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Please select a file.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  

  return (
    <Stack bg="gray.900" id='check-damage-section'>
      <Flex
        justify="center"
        align="center"
        minH="100vh"
        bgGradient="linear(to-r, #1a1a1a, #000000)"
        px={4}
        py={3}
      >
        <Box maxW="420px" w="100%">
          <Text fontSize="20px" mt={15} color='white' textAlign="center">Upload Your File here to Check the Damage</Text>

          <Box
            mt={10}
            p={8}
            borderRadius="20px"
            bg="#fff"
            boxShadow="0 10px 20px rgba(0, 0, 0, 0.24), 0 6px 6px rgba(0, 0, 0, 0.28)"
            textAlign="center"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <label htmlFor="file-upload" className="label">
              <Box
                borderRadius="20px"
                p={8}
                w="100%"
                border='2px'
                borderColor='black.500'
                _hover={{ transform: 'scale(1.1)' }}
                transition="0.3s"
              style={{ cursor: 'pointer' }}
              >
                <Box textAlign="center" mb={4}>
                  <Center mb={4}>
                    <FiUpload size={50} />
                  </Center>
                </Box>
                <Text fontSize="xl" mt={4}>
                  {selectedFile ? selectedFile.name : 'Drag & drop any file here'}
                </Text>
              </Box>
              <input
                type="file"
                id="file-upload"
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />
            </label>

            <Button
            isDisabled={!selectedFile}
              bg="#000"
              color="#f7fff7"
              fontSize="18px"
              borderRadius="20px"
              mt={4}
              w="100%"
              onClick={handleUpload}
              _hover={{ bg: "#333" }}
            >
              Upload
            </Button>


          </Box>
        </Box>
      </Flex>
      {isloading ? (loadinggif &&
        <Box  w='40%' m='auto' style={{ marginTop: '-80px' }}>
          <img src={loadinggif} alt='loader' />
        </Box>)
        :
        (response && imageData && (

          <Box w='40%' m='auto' mb={10} bg="gray.900" p={10} style={{ marginTop: '-80px' }}
            borderRadius="20px"
            border='2px'
            borderColor='teal.500'
            _hover={{ transform: 'scale(1.1)' }}
            transition="0.3s"
          >
            <Text fontSize="xl" color="white" textAlign='center' pb={5} >Damage Percentage: {response.damaged_percentage}%</Text>
            <img src={imageData} alt="Damage Image" style={{ width: '100%' }} />
          </Box>
        ))
      }
      {response && (
  <Box w="20%" m="auto" mb={10}>
    <VictoryPie
      data={[
        { x: "Damaged", y: response.damaged_percentage },
        { x: "Undamaged", y: 100 - response.damaged_percentage }
      ]}
      colorScale={["teal", "grey"]}
      innerRadius={100}
      labelRadius={120}
      style={{ labels: { fill: "white", fontSize: 18, fontWeight: "bold" } }}
    />
  </Box>
)}
    </Stack>
  );
};

export default FileUploader;

