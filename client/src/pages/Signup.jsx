import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useColorModeValue,
  Text,
  Box,
  HStack,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputFieldForm } from '../components/InputFieldForm';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../context/auth-context';
import { validateForm } from '../utils/validateForm';

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const { setCurrentUser } = useAuth();
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async formData => {
    const validationArr = validateForm(formData, 'signup');
    const isValid = validationArr[0];

    if (isValid) {
      // frontend validation done, all fields are valid, do further process here
      try {
        const {
          data: { userId, message },
        } = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/api/user/signup`,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );

        if (userId) {
          // save the user to global state here, useReducer
          setCurrentUser(userId);
          toast({
            description: message,
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });

          navigate('/');
        } else {
          toast({
            description: message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
        }
      } catch (error) {
        toast({
          description: error?.response?.data?.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      }
    } else {
      toast({
        description: validationArr[1],
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <>
      <Navbar />
      <Stack minH={'93vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Formik
            // validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              handleSubmit(values);
            }}
            initialValues={{ email: '', password: '' }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                  <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                      Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                      to use all of our cool features
                    </Text>
                  </Stack>
                  <Box
                    rounded={'lg'}
                    // bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                  >
                    <Stack spacing={4}>
                      <HStack>
                        <Box>
                          <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <InputFieldForm name="firstName" type="text" />
                          </FormControl>
                        </Box>
                        <Box>
                          <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <InputFieldForm name="lastName" type="text" />
                          </FormControl>
                        </Box>
                      </HStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <InputFieldForm name="email" type="email" />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <InputFieldForm
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                          />
                          <InputRightElement h={'full'}>
                            <Button
                              variant={'ghost'}
                              onClick={() =>
                                setShowPassword(showPassword => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <Stack spacing={10} pt={2}>
                        <Button
                          loadingText="Submitting"
                          size="lg"
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500',
                          }}
                          type="submit"
                          isLoading={isSubmitting}
                        >
                          Sign up
                        </Button>
                      </Stack>
                      <Stack pt={4}>
                        <Text align={'center'}>
                          Already a user?{' '}
                          <Link color={'blue.400'} href="/login">
                            Log in
                          </Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    </>
  );
}
