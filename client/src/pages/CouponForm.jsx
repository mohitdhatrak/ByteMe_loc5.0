import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Select,
  SimpleGrid,
  LeftAddon,
  Group,
  Textarea,
  FormHelperText,
  RightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Form, Formik } from 'formik';
import { InputFieldForm } from '../components/InputFieldForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form1 = () => {
  const toast = useToast();

  // const navigate = useNavigate();

  const handleStaticSubmit = async formData => {
    try {
      const {
        data: { coupon, message },
      } = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/coupon/generateStatic`,
        {
          coupon_name: formData.coupon_name,
          coupon_type: 'static',
          format: formData.format,
          quantity: formData.quantity,
          rules: { validtill: formData.validtill, minorder: formData.minorder },
          discount: {
            discount_type: formData.discount_type,
            value: formData.value,
          },
          coupon_length: formData.coupon_length,
        },
        { withCredentials: true }
      );

      if (message === 'Coupon generated') {
        // save the user to global state here, (useContext, useReducer)
        toast({
          description: message,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
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
  };

  return (
    <>
      <Heading
        w="100%"
        textAlign={'center'}
        fontWeight="normal"
        mb="2rem"
        fontSize="1.8rem"
      >
        Coupons Details
      </Heading>
      <Formik
        // validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
          handleStaticSubmit(values);
        }}
        initialValues={{}}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="country"
                fontSize="1.2rem"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
              >
                Coupon Type - Static coupons
              </FormLabel>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="quantity"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Name of coupon
              </FormLabel>
              <InputFieldForm
                type="text"
                name="coupon_name"
                id="coupon_name"
                autoComplete="street-address"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="quantity"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Number of coupons
              </FormLabel>
              <InputFieldForm
                type="text"
                name="quantity"
                id="quantity"
                autoComplete="street-address"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
              <FormLabel
                htmlFor="redemptionLimit"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Minimum order value
              </FormLabel>
              <InputFieldForm
                type="number"
                name="minorder"
                id="city"
                autoComplete="city"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="validtill"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Expiration date
              </FormLabel>
              <InputFieldForm
                type="date"
                name="validtill"
                id="state"
                autoComplete="state"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="User Id"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Coupon format
              </FormLabel>
              <Select
                id="format"
                name="format"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>Alphanumeric</option>
                <option>Numeric</option>
                <option>Alpha</option>
              </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="Product Id"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Discount type
              </FormLabel>
              <Select
                id="discount_type"
                name="discount_type"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>Percentage</option>
                <option>Absolute amount</option>
              </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="Expiration Time"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Discount value
              </FormLabel>
              <InputFieldForm
                type="number"
                name="value"
                id="value"
                autoComplete="postal-code"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="Expiration Time"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Coupon code length
              </FormLabel>
              <InputFieldForm
                type="number"
                name="coupon_length"
                id="coupon_length"
                autoComplete="postal-code"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              mt="2rem"
              type="submit"
              isLoading={isSubmitting}
              display={'block'}
              mx="auto"
              onClick={() => {
                toast({
                  description: 'Coupon details saved!',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                });
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const Form2 = () => {
  const toast = useToast();

  const handleDynamicSubmit = async formData => {
    try {
      // let message;
      // fetch('http://10.120.102.30:5000/predict', {
      //   method: 'POST',
      //   body: JSON.stringify({ message: 5 }),
      //   mode: 'cors',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // }).then(res => res.json());
      const {
        data: { coupon, message },
      } = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/coupon/generateDynamic`,
        {
          userId: formData.userId,
          coupon_type: 'dynamic',
          format: formData.format,
          quantity: formData.quantity,
          discount: {
            discount_type: formData.discount_type,
            value: formData.value,
          },
          coupon_length: formData.coupon_length,
        },
        { withCredentials: true }
      );

      if (message === 'Coupon generated') {
        // save the user to global state here, (useContext, useReducer)
        toast({
          description: message,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
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
  };

  return (
    <>
      <Heading
        w="100%"
        textAlign={'center'}
        fontWeight="normal"
        mb="2rem"
        fontSize="1.8rem"
      >
        Coupons Details
      </Heading>
      <Formik
        // validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
          handleDynamicSubmit(values);
        }}
        initialValues={{}}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="country"
                fontSize="1.2rem"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
              >
                Coupon Type - Dynamic coupons
              </FormLabel>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="quantity"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Current user id
              </FormLabel>
              <InputFieldForm
                type="text"
                name="userId"
                id="userId"
                autoComplete="street-address"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="User Id"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Coupon format
              </FormLabel>
              <Select
                id="format"
                name="format"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>Alphanumeric</option>
                <option>Numeric</option>
                <option>Alpha</option>
              </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="Product Id"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Discount type
              </FormLabel>
              <Select
                id="discount_type"
                name="discount_type"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                <option>Percentage</option>
                <option>Absolute amount</option>
              </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="Expiration Time"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Discount value
              </FormLabel>
              <InputFieldForm
                type="number"
                name="value"
                id="value"
                autoComplete="postal-code"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="Expiration Time"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%"
              >
                Coupon code length
              </FormLabel>
              <InputFieldForm
                type="number"
                name="coupon_length"
                id="coupon_length"
                autoComplete="postal-code"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>

            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              mt="2rem"
              type="submit"
              isLoading={isSubmitting}
              display={'block'}
              mx="auto"
              onClick={() => {
                toast({
                  description: 'Coupon details saved!',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                });
              }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export function CouponForm() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  return (
    <>
      <Navbar />

      <Box
        // width="800px"
        // height="800px"
        // padding="100"
        mt={'3rem'}
      >
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={600}
          p={6}
          m="10px auto"
        >
          <Progress
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated
          ></Progress>
          {step === 1 ? <Form1 /> : <Form2 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="flex-start">
              <Flex>
                {step === 1 ? (
                  <Button
                    w="7rem"
                    isDisabled={step === 3}
                    onClick={() => {
                      setStep(step + 1);
                      if (step === 3) {
                        setProgress(100);
                      } else {
                        setProgress(progress + 50);
                      }
                    }}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 50);
                    }}
                    isDisabled={step === 1}
                    colorScheme="teal"
                    variant="outline"
                    w="7rem"
                    mr="5%"
                  >
                    Back
                  </Button>
                )}
              </Flex>
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
