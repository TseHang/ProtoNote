import { createGlobalStyle } from 'styled-components';
/*
System font-stack
https://css-tricks.com/snippets/css/system-font-stack/
*/

export default createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`;
