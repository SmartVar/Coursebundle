import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  subscriptionReducer,
   userReducer,
  } from './reducers/userReducer';
  import { courseReducer } from './reducers/courseReducer';
  import { adminReducer } from './reducers/adminReducer';
  import { otherReducer } from './reducers/otherReducer';

const store = configureStore({
    reducer: {
        user: userReducer, //This is user reducer.
        profile: profileReducer, //This is profile reducer.
        course: courseReducer, //This is Course reducer.
        subscription: subscriptionReducer, //This is Subscription reducer.
        admin: adminReducer,//This is admin reducer.
        other: otherReducer,//This is other reducer.
    },
  });

  export default store;

  export const server = 'https://newcoursehub.onrender.com/api/v1'; //This is the server link