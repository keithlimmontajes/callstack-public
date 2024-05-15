import React from 'react';

import { ScrollView } from 'react-native';

import HomeBanners from './screens/HomeBanners';

// Test samples for passing props theme to landers-app
const HomeScreen = (props: any) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <HomeBanners />
    </ScrollView>
  );
};

export default HomeScreen;
