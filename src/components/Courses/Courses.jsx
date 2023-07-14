import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';


const Course = ({
    views,
    title,
    imageSrc,
    id,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount,
    loading,
  }) => {
    return (
        <VStack className="course" alignItems={['center', 'flex-start']}>
        <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
        <Heading
          textAlign={['center', 'left']}
          maxW="200px"
          size={'sm'}
          fontFamily={'sans-serif'}
          noOfLines={3}
          children={title}
        />
        <Text noOfLines={2} children={description} />
        <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
        </VStack>
    )
  }

  const Courses = () => {
    const [keyword, setKeyword] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch();
    
      const addToPlaylistHandler = async couseId => {
        await dispatch(addToPlaylist(couseId));
        dispatch(loadUser()); //This will load user automatically on completion of the task.
      };
    
    //---This is done during development mode
    // const addToPlaylistHandler = ()=> {
    //     console.log("Added to playlist")
    // }
    
    const categories = [
      'Web development',
      'Artificial Intellegence',
      'Data Structure & Algorithm',
      'App Development',
      'Data Science',
      'Game Development',
    ];
    
    const { loading, courses, error, message } = useSelector(
      state => state.course
    );
    
    useEffect(() => {
      dispatch(getAllCourses(category, keyword));
    
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
    
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
    }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

    {/* Use to Search the courses */}

      <Input
        value={keyword}
        onChange={e=> setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      <HStack overflowX={'auto'}
        paddingY="8"
        
        //to hide the scroll bar
        css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
       

        >
        {     

            categories.map((item, Index)=>(
            <Button key={Index} onClick={()=>setCategory(item)} minW={'60'}> {/*We use paranthesis as we are not directly returning the value. If use curly brackets than use return keyword.*/} 
            <Text children={item} />
        </Button>))
        }
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >

               
        {courses.length > 0 ? (
          courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Courses Not Found" /> //This will show when no courses are found.
        )}
    </Stack>

    </Container>
  )
}

export default Courses