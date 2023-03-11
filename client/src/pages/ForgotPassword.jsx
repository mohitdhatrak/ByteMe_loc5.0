import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  PinInputField,
  HStack,
  Center,
  PinInput,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';

export function ForgotPassword() {
  const [validEmail, setValidEmail] = useState(false);

  return (
    <>
      <Navbar />
      {validEmail ? (
        <Flex
          minH={'80vh'}
          align={'center'}
          justify={'center'}
          //   bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack
            spacing={4}
            w={'full'}
            maxW={'sm'}
            // bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={10}
          >
            <Center>
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                Verify your Email
              </Heading>
            </Center>
            <Center
              fontSize={{ base: 'sm', sm: 'md' }}
              //   color={useColorModeValue('gray.800', 'gray.400')}
            >
              We have sent code to your email
            </Center>
            <Center
              fontSize={{ base: 'sm', sm: 'md' }}
              fontWeight="bold"
              //   color={useColorModeValue('gray.800', 'gray.400')}
            >
              username@mail.com
            </Center>
            <FormControl>
              <Center>
                <HStack>
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Center>
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Verify
              </Button>
            </Stack>
          </Stack>
        </Flex>
      ) : (
        <Flex
          minH={'80vh'}
          align={'center'}
          justify={'center'}
          // bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            // bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              Forgot your password?
            </Heading>
            <Text
              fontSize={{ base: 'sm', sm: 'md' }}
              //   color={useColorModeValue('gray.800', 'gray.400')}
            >
              You&apos;ll get an email with a reset link
            </Text>
            <FormControl id="email">
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
              />
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Request Reset
              </Button>
            </Stack>
          </Stack>
        </Flex>
      )}
    </>
  );
}
