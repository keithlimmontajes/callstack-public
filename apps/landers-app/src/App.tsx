import React from 'react';
import { store } from '@redux/root';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LanderRootStacks from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <LanderRootStacks />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
