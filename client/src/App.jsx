import {
  ChakraProvider,
  theme,
  Spinner,
  useColorModeValue,
  Flex,
  useToast,
  createStandaloneToast,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './context/auth-context';
import axios from 'axios';
import { Error404Page } from './pages/Error404Page';
import { Home } from './pages/Home';
import { createAction, Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { NewPassword } from './pages/NewPassword';

export function App() {
  const { currentUser, setCurrentUser, loading, setLoading } = useAuth();
  const { ToastContainer } = createStandaloneToast();

  useEffect(() => {
    // perform network call like login to set current user if jwt not expired
    (async () => {
      try {
        const {
          data: { userId, message },
        } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/user`, {
          withCredentials: true,
        });

        if (message === 'Set user') {
          setCurrentUser(userId);
          setLoading(false);
        }
      } catch (error) {
        if (error.response?.data.message === 'Token invalid') {
          // user not logged in, token expired or invalid
          setLoading(false);
        }
      }
      // or we can use finally block for setloading?
    })();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {!loading ? (
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            {currentUser === '' ? (
              <>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route
                  path="/forgot-password"
                  element={<ForgotPassword />}
                ></Route>
                <Route path="/new-password" element={<NewPassword />}></Route>
              </>
            ) : (
              <Route path="*" element={<Error404Page />} />
            )}

            <Route path="*" element={<Error404Page />} />
          </Routes>

          <ToastContainer />
        </>
      ) : (
        <Flex
          minH={'80vh'}
          align={'center'}
          justify={'center'}
          // bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Spinner />
        </Flex>
      )}
    </ChakraProvider>
  );
}
