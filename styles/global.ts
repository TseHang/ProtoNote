import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { ColorMode } from '@/constants';

export default createGlobalStyle<{ colorMode: ColorMode }>`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100vw;
    height: 100vh;
    color: ${p => p.theme.colors.documentColor};
  }

  /*
  System font-stack
  https://css-tricks.com/snippets/css/system-font-stack/
  */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }

  input, button {
    outline: none;
    border: none;

    &:focus {
      outline: none;
    }
  }
  
  a {
    color: inherit;
  }
`;
