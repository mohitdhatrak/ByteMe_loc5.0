import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useAuth } from '../context/auth-context';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Links = [];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const BtnsBeforeLogin = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}
    >
      <ColorModeSwitcher />

      <Button
        as={'a'}
        fontSize={'sm'}
        fontWeight={400}
        variant={'link'}
        href={'/login'}
      >
        Log In
      </Button>
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
      >
        Sign Up
      </Button>
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

      <Flex alignItems={'center'} ml={'1rem'}>
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
            <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
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

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useAuth();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
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
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {currentUser === '' ? <BtnsBeforeLogin /> : <BtnsAfterLogin />}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
