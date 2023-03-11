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
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';

const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" paddingBottom={'10px'}>
                GENERATE YOUR CUSTOM COUPONS
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                        First name
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                        Last name
                    </FormLabel>
                    <Input id="last-name" placeholder="First name" />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email address
                </FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                    Password
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
        </>
    );
};

const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Coupons Details
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Coupon Type
                </FormLabel>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option>Static coupons</option>
                    <option>Dynamic Coupons</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="Number of coupons"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Number of coupons
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
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
                    htmlFor="Number of uses"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Number of uses
                </FormLabel>
                <Input
                    type="text"
                    name="Number of coupons"
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
                    htmlFor="Expiration dates"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Expiration dates
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            {/* <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl> */}

            {/* --------------------------else dynamic condition -------------------------- */}

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="User Id"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    User Id
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
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
                    htmlFor="Product Id"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Product Id
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
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
                    mt="2%">
                    Expiration Time
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                />
            </FormControl>
        </>
    );
};

const Form3 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal">
                Coupon Details
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                        htmlFor="country"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Coupon Type
                    </FormLabel>
                    <Select
                        id="country"
                        name="country"
                        autoComplete="country"
                        placeholder="Select option"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md">
                        <option>Alpha</option>
                        <option>Numeric</option>
                        <option>Alpha Nmumeric</option>
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
                        mt="2%">
                        Overall Product Unit
                    </FormLabel>
                    <Input
                        type="number"
                        name="postal_code"
                        id="postal_code"
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
                        mt="2%">
                        Fixed Price / Percentage
                    </FormLabel>
                    <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
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
                        mt="2%">
                        Value
                    </FormLabel>
                    <Input
                        type="number"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                    />
                </FormControl>


            </SimpleGrid>
        </>
    );
};

export function MultistepForm() {
    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(33.33);
    return (
        <>
            <Navbar />

            <Box
            // width="800px"
            // height="800px"
            // padding="100"

            >
                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form">
                    <Progress
                        hasStripe
                        value={progress}
                        mb="5%"
                        mx="5%"
                        isAnimated></Progress>
                    {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
                    <ButtonGroup mt="5%" w="100%">
                        <Flex w="100%" justifyContent="space-between">
                            <Flex>
                                <Button
                                    onClick={() => {
                                        setStep(step - 1);
                                        setProgress(progress - 33.33);
                                    }}
                                    isDisabled={step === 1}
                                    colorScheme="teal"
                                    variant="solid"
                                    w="7rem"
                                    mr="5%">
                                    Back
                                </Button>
                                <Button
                                    w="7rem"
                                    isDisabled={step === 3}
                                    onClick={() => {
                                        setStep(step + 1);
                                        if (step === 3) {
                                            setProgress(100);
                                        } else {
                                            setProgress(progress + 33.33);
                                        }
                                    }}
                                    colorScheme="teal"
                                    variant="outline">
                                    Next
                                </Button>
                            </Flex>
                            {step === 3 ? (
                                <Button
                                    w="7rem"
                                    colorScheme="red"
                                    variant="solid"
                                    onClick={() => {
                                        toast({
                                            title: 'Account created.',
                                            description: "We've created your account for you.",
                                            status: 'success',
                                            duration: 3000,
                                            isClosable: true,
                                        });
                                    }}>
                                    Submit
                                </Button>
                            ) : null}
                        </Flex>
                    </ButtonGroup>
                </Box>
            </Box>
        </>
    );
}