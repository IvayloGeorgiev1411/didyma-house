import { createTheme } from '@mantine/core';

export const mainTheme = createTheme({
  fontFamily: 'Roboto, sans-serif', // main font
  defaultRadius: 'md',
  primaryColor: 'ocean',
  colors: {
    ocean: [
      '#e0f2ff', // 0 - lightest
      '#b3e0ff',
      '#80caff',
      '#4db3ff', // accent
      '#1a9cff', // main
      '#007acc',
      '#005999',
      '#003966',
      '#001933', // dark
      '#000f1a',
    ],
    sand: [
      '#fff6e0',
      '#ffedb3',
      '#ffe080', // light
      '#ffd54d', // accent
      '#ffca1a', // main
      '#cca700',
      '#998000',
      '#665900',
      '#332c00', // dark
      '#1a1600',
    ],
    coral: [
      '#ffe0e0',
      '#ffb3b3',
      '#ff8080', // light
      '#ff4d4d', // accent
      '#ff1a1a', // main
      '#cc0000',
      '#990000',
      '#660000',
      '#330000', // dark
      '#1a0000',
    ],
  },
  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '24px', lineHeight: '1.2' },
      h2: { fontSize: '20px', lineHeight: '1.3' },
      h3: { fontSize: '16px', lineHeight: '1.4' },
    },
  },
  other: {
    // named colors for easier reference
    oceanNamed: {
      light: '#e0f2ff',
      accent: '#4db3ff',
      main: '#1a9cff',
      dark: '#001933',
    },
    sandNamed: {
      light: '#ffe080',
      accent: '#ffd54d',
      main: '#ffca1a',
      dark: '#332c00',
    },
    coralNamed: {
      light: '#ff8080',
      accent: '#ff4d4d',
      main: '#ff1a1a',
      dark: '#330000',
    },
  },
});
