import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../Layout/Loader/Loader';
// import introVideo from '../../assets/videos/intro.mp4'; //this can be use in development mode


// This will be used only in development mode - Sample Lecture model //
// const lectures = [
//     {
//         _id: '1sadfasdsf',
//         title: 'sample',
//         description: 'sample lecture description',
//         video: {
//             url: 'sadfdsf'
//         },
//     },

//     {
//         _id: '2sadfasdsf',
//         title: 'sample',
//         descript2on: 'sample lecture description',
//         video: {
//             url: 'sadfdsf'
//         },
//     },

//     {
//         _id: '3sadfasdsf',
//         title: 'sample',
//         description: 'sample lecture description',
//         video: {
//             url: 'sadfdsf'
//         },
//     },
// ];



const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams(); //To get the course id from the backend.

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />; //This will divert the user who is not admin to subscribe page.
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}> {/*if phone-1fr and if other 3fr and 1fr*/}
      {lectures && lectures.length > 0 ? ( //This is the condition when lectures are greater than zero.
        <>

        {/* This is first element of the page */}
          <Box>
            <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              // src={introVideo} // This will be used during development
              src= {lectures[lectureNumber].video.url}  // This will be fetch from backend
            ></video>

            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}            /> {/* The above code will display lectures starting from index '1' with lecture title */}

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
          </Box>


           {/* This is 2nd element of the page */} 
          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
          </>
          ) : (
            <Heading children="No Lectures" />
          )}
                
    </Grid>
  );
};

export default CoursePage;
