import React from 'react';
import './CouponForm.css';
import {
  RadioGroup,
  Text,
  Button,
  NumberInput,
  Select,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  Input,
  Box,
  FormControl,
  VStack,
  FormLabel,
  HStack,
  Radio,
  border,
} from '@chakra-ui/react';

export function CouponForm() {
  return (
    <div>
      <Box>
        <Box
          className="Box"
          w="100%"
          h="200px"
          bgGradient="radial(gray.300, black.400, white.200)"
        >
          {/* <Box> */}

          <Text fontSize="6xl">GENERATE YOUR CUSTOM COUPONS</Text>
          <VStack>
            <Box className="internal-box">
              <FormControl as="fieldset" fontSize="6xl">
                <FormLabel as="legend"> Coupon Type :</FormLabel>
                <RadioGroup defaultValue="Static">
                  <HStack spacing="24px">
                    <Radio value="Static">Static</Radio>
                    <Radio value="Dynamic">Dynamic</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </Box>
            <HStack>
              <Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Number of Coupons</FormLabel>
                    <Input placeholder="Number of Coupons" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Number of Uses</FormLabel>
                    <Input placeholder="Number of Uses" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Expiration Date</FormLabel>
                    <Input placeholder="Expiration Date" />
                  </FormControl>
                </Box>
              </Box>
              <Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>User Id</FormLabel>
                    <Input placeholder="USer Id" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Product Id</FormLabel>
                    <Input placeholder="Product Id" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Expiration Time</FormLabel>
                    <Input placeholder="Expiration Time" />
                  </FormControl>
                </Box>
              </Box>
            </HStack>

            <Box>
              <FormControl as="fieldset" fontSize="6xl">
                <FormLabel as="legend"> Coupon Type :</FormLabel>
                <RadioGroup defaultValue="Static">
                  <HStack spacing="24px">
                    <Radio value="Alpha">Alpha</Radio>
                    <Radio value="Numeric">Numeric</Radio>
                    <Radio value="Alpha Numberic">Alpha Numberic</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl>
                <FormLabel>BAADME SOCHNA</FormLabel>
                <Select placeholder="BAADME SOCHNA">
                  <option>Apply to order</option>
                  <option>Apply to Item</option>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Discount type</FormLabel>
                <Select placeholder="Select Discount type">
                  <option>Amount</option>
                  <option>Percent</option>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <NumberInput max={50} min={10}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Box>
            <Button>submit</Button>
          </VStack>
        </Box>
      </Box>
    </div>
  );
}
