import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { ButtonStyles } from './styles/buttonStyles';
import { TagStyles } from './styles/tagStyles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

/*
 Default Chakra theme:
 https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/colors.ts
*/

const customTheme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#F7FAFC',
      100: '#CBD4DD',
      200: '#A2ADBE',
      300: '#7E869F',
      400: '#73798C',
      500: '#575E75',
      600: '#3B4668',
      700: '#2B3350',
      800: '#151C31',
      900: '#050B1C',
    },
    red: {
      50: '#FDE2DF',
      100: '#FAC7C0',
      200: '#F8ABA2',
      300: '#F69083',
      400: '#F37465',
      500: '#F15946',
      600: '#B54335',
      700: '#7A2D23',
      800: '#3E1712',
      900: '#020101',
    },
    orange: {
      50: '#FCE9E1',
      100: '#FAD5C5',
      200: '#F7C0A9',
      300: '#F4AC8C',
      400: '#FF9769',
      500: '#EF8354',
      600: '#B4633F',
      700: '#79422A',
      800: '#3E2216',
      900: '#020101',
    },
    green: {
      50: '#E1F9E5',
      100: '#C5F3CD',
      200: '#A8EEB5',
      300: '#8CE89D',
      400: '#6FE384',
      500: '#53DD6C',
      600: '#3FA651',
      700: '#2A7037',
      800: '#15391C',
      900: '#010201',
    },
    cyan: {
      50: '#E6FBFF',
      100: '#CEF7FF',
      200: '#B7F2FF',
      300: '#9FEEFF',
      400: '#88EAFF',
      500: '#70E6FF',
      600: '#54ADC0',
      700: '#397481',
      800: '#1D3B42',
      900: '#010203',
    },
    purple: {
      50: '#EDE0EC',
      100: '#DCC3DA',
      200: '#CBA6C7',
      300: '#B988B5',
      400: '#A86BA3',
      500: '#974E91',
      600: '#723B6D',
      700: '#4C2749',
      800: '#271425',
      900: '#020102',
    },
  },
  fonts: {
    heading: 'Bubblegum Sans',
    body: 'Bubblegum Sans',
  },
  components: {
    Button: ButtonStyles,
    Tag: TagStyles,
  },
});

export default customTheme;
