import React from 'react';
// import theme from '@superapp/theme';
import RootNavigation from './navigation';

import { store } from '@redux/root';
import { Provider } from 'react-redux';
// import { ThemeProvider } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
// import AuthenticationModal from './compositions/AuthenticationModal';

// import { LogBox } from 'react-native';

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
    // </ThemeProvider>
  );
};

export default App;
