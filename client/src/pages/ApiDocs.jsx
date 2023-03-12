import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Box,
  Image,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';
import doc6 from '../assets/doc6.png';

export function ApiDocs() {
  const [userCoupons, setUserCoupons] = useState([]);

  return (
    <>
      <Navbar />

      <Heading
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        fontSize={'2xl'}
        mt={'2rem'}
      >
        API documentation:
      </Heading>

      <SimpleGrid
        marginTop="3rem"
        marginLeft="3rem"
        marginRight="3rem"
        display={'flex'}
        flexDirection={'column'}
        alignItems="center"
        justifyContent={'center'}
        spacing={0}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Box boxSize="3xl">
          <Image src={doc1} alt="Docs" />
        </Box>
        <Box boxSize="3xl">
          <Image src={doc2} alt="Docs" />
        </Box>
        <Box boxSize="3xl">
          <Image src={doc3} alt="Docs" />
        </Box>
        <Box boxSize="3xl">
          <Image src={doc4} alt="Docs" />
        </Box>
        <Box boxSize="3xl">
          <Image src={doc5} alt="Docs" />
        </Box>
        <Box boxSize="3xl">
          <Image src={doc6} alt="Docs" />
        </Box>
      </SimpleGrid>
    </>
  );
}
