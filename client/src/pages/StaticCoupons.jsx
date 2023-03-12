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

function UserCouponCard({ couponData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  // const date = new Date(couponData.rules.validtill); // convert to JS date

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{couponData.coupon_name}</Heading>
        </CardHeader>
        <CardBody py={'1'}>
          <Text fontSize={'1rem'}>
            Discount: {couponData.discount.value}
            {couponData.discount.discount_type === 'percent_off'
              ? '%'
              : 'rupees'}
          </Text>

          <Text>Code: {couponData.code}</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={onOpen}>View coupon details</Button>
        </CardFooter>
      </Card>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody paddingBottom={'2'}>
            {/* Here we need to add asection for all prices */}
            <Box
              rounded="lg"
              p="2"
              m="auto"
              textAlign="center"
              fontSize={'1.5rem'}
            >
              Coupon details
            </Box>
            <Box rounded="lg" p="1" m="auto">
              1. Minimum Order value: {couponData.rules?.minorder} rupees
            </Box>
            {/* <Box rounded="lg" p="1" m="auto">
              2. Valid till: {date.getDate()}-{date.getMonth() + 1}-
              {date.getFullYear()}
            </Box> */}
            <Box rounded="lg" p="1" m="auto">
              2. Valid till: {couponData.rules.validtill}
            </Box>
            <Box rounded="lg" p="1" m="auto">
              3. Number of coupons: {couponData.quantity}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export function StaticCoupons() {
  const [userCoupons, setUserCoupons] = useState([
    {
      coupon_name: 'Holi offer',
      discount: {
        discount_type: 'percent_off',
        value: 10,
      },
      code: '84661677',
      rules: {
        validtill: '01-04-2023',
        minorder: 500,
      },
      quantity: 3,
    },
    {
      coupon_name: 'Diwali offer',
      discount: {
        discount_type: 'percent_off',
        value: 15,
      },
      code: 'sbfG657',
      rules: {
        validtill: '11-11-2023',
        minorder: 800,
      },
      quantity: 6,
    },
    {
      coupon_name: 'Winter offer',
      discount: {
        discount_type: 'percent_off',
        value: 20,
      },
      code: 'ABGFSGEW',
      rules: {
        validtill: '01-08-2023',
        minorder: 2000,
      },
      quantity: 1,
    },
  ]);

  // useEffect(() => {
  //   (async () => {
  //     const {
  //       data: { message, coupons },
  //     } = await axios.get(
  //       `${process.env.REACT_APP_API_ENDPOINT}/api/user/staticCoupons`,
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     if (message === 'Coupons retrieved') {
  //       // setUserCoupons(coupons);
  //       //Can replace with a toast or popup
  //     } else {
  //       //Can replace with a toast or popup
  //     }
  //   })();
  // }, []);

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
        All of your static coupons:
      </Heading>

      <SimpleGrid
        marginTop="3rem"
        marginLeft="3rem"
        marginRight="3rem"
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {userCoupons.map(couponData => (
          <UserCouponCard couponData={couponData} key={couponData.username} />
        ))}
      </SimpleGrid>
    </>
  );
}
