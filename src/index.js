import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, theme} from '@chakra-ui/react';

//Redux configuration
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvider store={store}> {/* This will use to provide store access using redux in app components*/}
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);