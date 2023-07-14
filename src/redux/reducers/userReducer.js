import { createReducer } from '@reduxjs/toolkit';

//---User Reducer---//

export const userReducer = createReducer(
  {/*THis is the initial state*/},
  {/*This is the payload*/

  // Register User Functionality

  registerRequest: state => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  registerFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },

   // Login User Functionality

  loginRequest: state => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  },
  loginFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },

  // Loding User Functionality

  loadUserRequest: state => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  loadUserFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },

  // Logout User Functionality

  logoutRequest: state => {
    state.loading = true;
  },
  logoutSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.message = action.payload;
  },
  logoutFail: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  },

  //Clear state error and Message functionality from app.js

  clearError: state => {
    state.error = null;
  },  //This will clear the state once error occurs in the state.
  clearMessage: state => {
    state.message = null;
  }, //This will clear the message once Success/Error occurs
});


//---Profile Reducer---//

export const profileReducer = createReducer(
  {},
  {

    //Update Profile Functionality

    updateProfileRequest: state => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Update Profile Picture Functionality

    updateProfilePictureRequest: state => {
      state.loading = true;
    },
    updateProfilePictureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateProfilePictureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Change Password Functionality

    changePasswordRequest: state => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Forget Password Functionality

    forgetPasswordRequest: state => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Reset Password Functionality

    resetPasswordRequest: state => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Remove From Playlist Functionality

    removeFromPlaylistRequest: state => {
      state.loading = true;
    },
    removeFromPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Clear state functionality

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);

//---Subscription Reducer---//

export const subscriptionReducer = createReducer(
  {},
  {
    buySubscriptionRequest: state => {
      state.loading = true;
    },
    buySubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.subscriptionId = action.payload;
    },
    buySubscriptionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    cancelSubscriptionRequest: state => {
      state.loading = true;
    },
    cancelSubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    cancelSubscriptionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
