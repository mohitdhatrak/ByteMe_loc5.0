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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useAuth } from '../context/auth-context';

const Links = ['Dashboard', 'Projects', 'Team'];

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
        href={'#'}
      >
        Sign In
      </Button>
      <Button
        as={'a'}
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'pink.400'}
        href={'#'}
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
  return (
    <Menu>
      <Stack direction={'row'} spacing={7}>
        <ColorModeSwitcher />

        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </MenuButton>
      </Stack>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
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
          <Box>Logo</Box>
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