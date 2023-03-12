import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  chakra,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Stack,
  useToast,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Image
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
// import Carousel from '../pages/Carousel';
import { SearchBar } from '../pages/SearchBar';
import CustTestimonial from '../pages/CustTestimonial'
import Footer from '../pages/Footer'

const LinkItems = [
  { name: 'APIs', icon: FiHome },
  { name: 'Generate Coupon', icon: FiTrendingUp },
  { name: 'My Coupons', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontSize={'2xl'} fontWeight={'medium'} pb={'5'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'xl'} fontWeight={'light'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>

        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
      </Box>
      {/* <Box>

      <Carousel />
      </Box> */}
      <VStack>
        <Box
          maxW="60vw"
          //height="90vh"
          mx={'auto'}
          ml={'25rem'}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
        >
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}
          >
            What services we provide?
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={'Static coupons'}
              stat={'Provide data to generate a simple static coupon'}
            />
            <StatsCard
              title={'Dynamic coupons'}
              stat={
                'Using AI to create dynamic coupons as per user data analysis'
              }
            />
            <StatsCard
              title={'Rule engine'}
              stat={
                'Using a rule engine to validate coupons against a set of rules by merchant'
              }
            />
          </SimpleGrid>
        </Box>
        <Box>
         <CustTestimonial />
        </Box>
        <Box>
         <Footer />
        </Box>

        
          
        
      </VStack>
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      sx={{ width: '90%' }}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          display={'flex'}
          direction={'row'}
        >
          <Image
            boxSize="40px"
            borderRadius={'50%'}
            objectFit="cover"
            src={logo}
            alt="App logo"
            mr={'2'}
          />
          Couponify
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '2', md: '6' }} justifyContent="space-between" display={"flex"}>

        <SearchBar />


        {currentUser === '' ? <BtnsBeforeLogin /> : <BtnsAfterLogin />}

      </HStack>
    </Flex>
  );
};

const BtnsBeforeLogin = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}
    >
      <ColorModeSwitcher />

      <Flex alignItems={'center'}>
        <Button
          as={'a'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={'signup'}
          _hover={{
            bg: 'pink.300',
          }}
          mr={'2'}
        >
          Sign Up
        </Button>
      </Flex>
    </Stack>
  );
};

const BtnsAfterLogin = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
  const toast = useToast();

  return (
    <>
      <ColorModeSwitcher />

      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack>
              <Avatar
                size={'sm'}
                src={
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                }
              />
            </HStack>
          </MenuButton>
          <MenuList
            minW={'8rem !important'}
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem
              onClick={() => logUserOut(navigate, setCurrentUser, toast)}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

const logUserOut = async (navigate, setCurrentUser, toast) => {
  setCurrentUser('');

  try {
    const {
      data: { message },
    } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/api/user/logout`,
      {
        withCredentials: true,
      }
    );

    toast({
      description: message,
      status: 'info',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  } catch (error) {
    toast({
      description: error?.response?.data?.message,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  }

  navigate('/login');
};
