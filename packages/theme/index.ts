import { createTheme } from '@rneui/themed';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module '@rneui/themed' {
  export interface Colors {
    LANDER_BUTTON?: string;
    MAIN_COLOR?: string;
  }

  // export interface CreateThemeOptions extends RecursivePartial<Theme> {
  //   // lightColors: any;
  //   // darkColors: Colors;
  // }

  export interface Theme {
    mode: 'light' | 'dark';
    spacing: { lg: number; md: number; sm: number; xl: number; xs: number };
  }
}

// Add buttons here
// Global theme for host and landers
const customTheme = createTheme({
  lightColors: {
    LANDER_BUTTON: 'blue',
    MAIN_COLOR: '#80AF46',
  },
  darkColors: {
    LANDER_BUTTON: 'blue',
    MAIN_COLOR: '#80AF46',
  },
  mode: 'light',
});

export default customTheme;
