import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference'); //This will help to get the reference id of the subscription taken.



  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign={'center'}>
        You have Pro Pack
      </Heading>

      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w="full"
          bg="yellow.400"
          p="4"
          css={{ borderRadius: '8px 8px 0 0' }} 
        > {/*borderRadius top-l/r only*/}
          <Text color={'black'}>Payment Success</Text>
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulation you're a pro member. You have access to premium
              content.
            </Text>

            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to="/profile">
          <Button variant={'ghost'}>Go to profile</Button>
        </Link>

        <Heading size={'xs'}>Reference: {reference}</Heading> {/* This is the reference no. generated at the time of payment*/}
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
