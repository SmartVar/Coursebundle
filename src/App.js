/*
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import '../src/App.css';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import NotFound from './components/Layout/NotFound/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from './components/Layout/Loader/Loader';
*/
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import React, { useEffect } from 'react';
import {lazy, Suspense} from 'react';
import '../src/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const Home = lazy(()=> import("./components/Home/Home"));
const Header = lazy(()=> import('./components/Layout/Header/Header'));
const Courses = lazy(()=> import( './components/Courses/Courses'));
const Footer = lazy(()=> import( './components/Layout/Footer/Footer'));
const Login = lazy(()=> import( './components/Auth/Login'));
const Register = lazy(()=> import( './components/Auth/Register'));
const ForgetPassword = lazy(()=> import( './components/Auth/ForgetPassword'));
const ResetPassword = lazy(()=> import( './components/Auth/ResetPassword'));
const Contact = lazy(()=> import( './components/Contact/Contact'));
const Request = lazy(()=> import( './components/Request/Request'));
const About = lazy(()=> import( './components/About/About'));
const Subscribe = lazy(()=> import( './components/Payments/Subscribe'));
const PaymentFail = lazy(()=> import( './components/Payments/PaymentFail'));
const PaymentSuccess = lazy(()=> import( './components/Payments/PaymentSuccess'));
const NotFound = lazy(()=> import( './components/Layout/NotFound/NotFound'));
const CoursePage = lazy(()=> import( './components/CoursePage/CoursePage'));
const Profile = lazy(()=> import( './components/Profile/Profile'));
const ChangePassword = lazy(()=> import( './components/Profile/ChangePassword'));
const UpdateProfile = lazy(()=> import( './components/Profile/UpdateProfile'));
const Dashboard = lazy(()=> import( './components/Admin/Dashboard/Dashboard'));
const CreateCourse = lazy(()=> import( './components/Admin/CreateCourse/CreateCourse'));
const AdminCourses = lazy(()=> import( './components/Admin/AdminCourses/AdminCourses'));
const Users = lazy(()=> import( './components/Admin/Users/Users'));
// const Loader = lazy(()=> import( './components/Layout/Loader/Loader'));

function App() {

  // This will prevent the right click functionality on the video and other pages of the app //

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  //The Authenticated and user function
  //This will also use to dispatch clearError and clearMessage function of Reducers

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  // This will be used during loading of user reducer
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <>
         <Suspense fallback={<div>Loading...</div>}> 

      <Header isAuthenticated={isAuthenticated} user={user} />
     
      <Routes>
        
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />} />

            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />

            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />

            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage user={user} />
                </ProtectedRoute>
              }
            />         

            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />  {/* Token is given to take the value using parameters*/}

          <Route path="/contact" element={<Contact />} /> 
          <Route path="/request" element={<Request />} /> 
          <Route path="/about" element={<About />} /> 
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentfail" element={<PaymentFail />} /> 
            <Route path="/paymentsuccess" element={<PaymentSuccess />} /> 

            <Route path="*" element={<NotFound />} />  {/* All other Routes will be directed to NotFound*/}

            <Route path="/coursepage" element={<CoursePage />} />  {/* All other Routes will be directed to NotFound*/}

            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            /> 
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />

{/* Admin Routes */}

              <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'} //To check the user is 'admin' and only admin could access these routes.
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
<Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
<Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
<Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Users />
                </ProtectedRoute>
              }
            />

      </Routes>
      
      <Footer />
      <Toaster />
      </Suspense>
      </>
      {/* )} */}
      </Router>
  );
};
export default App;
