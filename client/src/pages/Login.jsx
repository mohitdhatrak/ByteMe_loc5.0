import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import axios from 'axios';
import { useAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../utils/validateForm';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { InputFieldForm } from '../components/InputFieldForm';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setCurrentUser } = useAuth();
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async formData => {
    const validationArr = validateForm(formData, 'login');
    const isValid = validationArr[0];

    if (isValid) {
      // frontend validation done, all fields are valid, do further process here

      try {
        const {
          data: { userId, message },
        } = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/api/user/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );

        if (userId) {
          // save the user to global state here, (useContext, useReducer)
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
                <Stack spacing={4} w={'full'} maxW={'md'}>
                  <Heading fontSize={'2xl'}>Sign in to your account</Heading>

                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <InputFieldForm name="email" type="email" />
                  </FormControl>
                  <FormControl id="password">
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
                  <Stack spacing={6}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                    >
                      <Link
                        color={'blue.500'}
                        href="/forgot-password"
                        margin="auto"
                      >
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      colorScheme={'blue'}
                      variant={'solid'}
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Log in
                    </Button>
                  </Stack>
                  <Stack pt={3}>
                    <Text align={'center'}>
                      New user?{' '}
                      <Link color={'blue.400'} href="/signup">
                        Sign up
                      </Link>
                    </Text>
                  </Stack>
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
