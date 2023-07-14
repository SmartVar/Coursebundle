import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      
      //This is add to change to position of the switcher to Right top/right and make it fixed.
      position={"fixed"}
      top="4"
      right="4"
      zIndex={'overlay'} // This will help to provide the access of colormodeswitcher button in the video section and on all pages.
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
