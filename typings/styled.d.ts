// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      documentColor: string;
      main: string;
      lightMain: string;
      secondary: string;
      bg: string;
      contentBackground: string;
      border: string;
      gradient: string;
    };
  }
}
