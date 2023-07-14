import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { login } from '../../redux/actions/user';

  
const Login = () => {

//---State Management---//

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

//-This will be used to provide email and password received from the frontend user to our redux action login function for further action-//

const submitHandler = e => {
  e.preventDefault(); //This will avoid loading of page by default.
  dispatch(login(email, password));
};

    return (
      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent="center" spacing={'16'}>
          <Heading children={'Welcome to CourseBundler'} />
  
        {/* Form Adding to Webpage */}
        
          <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <Box my={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={'email'}
                focusBorderColor="yellow.500"
              />
            </Box>
  
            <Box my={'4'}>
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                type={'password'}
                focusBorderColor="yellow.500"
              />
            </Box>
  
            <Box>
              <Link to="/forgetpassword">
                <Button fontSize={'sm'} variant="link">
                  Forget Password?
                </Button>
              </Link>
            </Box>
  
            <Button my="4" colorScheme={'yellow'} type="submit">
              Login
            </Button>
  
            <Box my="4">
              New User?{' '}
              <Link to="/register">
                <Button colorScheme={'yellow'} variant="link">
                  Sign Up
                </Button>{' '}  {/*In order to add space between 'Sign up' link button and link text 'here' we add space after button */}
                here
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Login;
  