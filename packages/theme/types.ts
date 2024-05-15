export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    white: string;
    black: string;
    grey0: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    greyOutline: string;
    searchBg: string;
    success: string;
    error: string;
    warning: string;
    divider: string;
    platform: {
      ios: {
        primary: string;
        secondary: string;
        grey: string;
        searchBg: string;
        success: string;
        error: string;
        warning: string;
      };
      android: {
        primary: string;
        secondary: string;
        grey: string;
        searchBg: string;
        success: string;
        error: string;
        warning: string;
      };
      web: {};
    };
  };
}
