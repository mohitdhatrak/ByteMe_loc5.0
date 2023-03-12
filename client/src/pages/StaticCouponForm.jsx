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

export function StaticCouponForm() {
  const toast = useToast();

  return (
    <>
      <Navbar />

      <Box mt={'3rem'}>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={600}
          p={6}
          m="10px auto"
        >
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
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              console.log(values);
              // handleSubmit(values);
            }}
            initialValues={{ email: '', password: '' }}
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
                    Redemption limit per coupon
                  </FormLabel>
                  <InputFieldForm
                    type="text"
                    name="redemptionLimit"
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
        </Box>
      </Box>
    </>
  );
}
