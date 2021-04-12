import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

/*
When theme is light, colors used are weight 500 for normal state and 600 for hover state
When theme is dark, colors used are weight 200 for normal state and 300 for hover state
*/

const colors = {
  black: '#16161D',
  primaryDark: {
    200: '#b6dafc',
    300: '#041249',
    500: '#081234',
    600: '#781234'
  },
  primaryBlue: {
    200: '#fff',
    300: '#aff',
    500: '#173562',
    600: '#573562'
  },
  primaryDarkLight: {
    200: '#fff',
    300: '#ADCAF0',
    500: '#ADCAF0',
    600: '#EDCAF0'
  },
  redDark: {
    200: '#F72E25',
    300: '#E72E25',
    500: '#772E25',
    600: '#A72E25'
  },
  redDarkLight: {
    200: '#fff',
    300: '#aff',
    500: '#C44536',
    600: '#F44536'
  },
  redLight: {
    200: '#fff',
    300: '#aff',
    500: '#D5C5C3',
    600: '#F5C5C3'
  }
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});

export default theme;
