import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import {ColorModeSwitcher} from '../../../ColorModeSwitcher';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  //To be use during development mode.
  //  const isAuthenticated = false; //this will help to check the authenticate condition during development mode. In production mode we will be using this function in the parameterx
     
  // const user ={
  //   role:"admin" //this will help to check the user authenticate condition i.e. login during development mode.
  //  }

  // The logout handler
  
  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };

   //------------// 
   
  return (
    <>
    <ColorModeSwitcher />

    <Button 
     onClick={onOpen}
    colorScheme='yellow' 
    width={"12"} 
    height={"12"} 
    rounded={"full"} 
    zIndex={'overlay'} // This will help to provide the access of menu button in the video section and on all pages.
    position={"fixed"} 
    top={"6"} 
    left={"6"}
    >

<RiMenu5Fill />

    </Button>
<Drawer placement='left' onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay backdropFilter={"blur{1px"} />
  <DrawerContent>
    <DrawerHeader>COURSE HUB</DrawerHeader>
    <DrawerBody>
    <VStack spacing={'4'} alignItems="flex-start">
    <LinkButton onClose={onClose} url="/" title="Home" />
    <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
    <LinkButton onClose={onClose} url="/request" title="Request a Course" />
    <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
    <LinkButton onClose={onClose} url="/about" title="About" />

    <HStack
     justifyContent={'space-evenly'}
     position="absolute" //This will shift the buttons to the bottom.
     bottom={'2rem'}
     width="80%">

    {isAuthenticated?(
      <>
      <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                {user && user.role === 'admin' && (  //user you need to defined in the header section to use it
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
                )}
      </VStack>
      </>
    ):(
      <>
      <Link onClick={onClose} to="/login">
        <Button colorScheme={'yellow'}>Login</Button>
      </Link>

      <p>OR</p>

      <Link onClick={onClose} to="/register">
        <Button colorScheme={'yellow'}>Sign Up</Button>
      </Link>
    </>
    )}
    </HStack>
      
    </VStack>
    </DrawerBody>
  </DrawerContent>


</Drawer>

    </>
  )
}

export default Header