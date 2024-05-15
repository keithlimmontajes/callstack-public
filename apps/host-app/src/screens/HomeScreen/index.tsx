// React modules
import React from 'react';
import { ScrollView } from 'react-native';
import { Federated } from '@callstack/repack/client';

// Global Components
import { Separator } from '@global/components';

// Compositions
import Header from '../../compositions/Header';
import CardCarousel from '../../compositions/CardCarousel';
import MiniAppSelection from '../../compositions/MiniAppSelection';
// import BeAMember from '../../compositions/BeAMember';
// import GroceryProducts from '../../compositions/GroceryProducts';
// import Restaurants from '../../compositions/Restaurants';
// import BottomPromotion from '../../compositions/BottomPromotion';

import { testProps } from '@superapp/test-ids';
import { AUTOMATION_HOME_SCREEN } from '@superapp/test-ids/enums/HostApp';
// import { withTheme } from '@rneui/themed';
import LoadingIndicator from '../../components/LoadingIndicator';

const HomeBanners = React.lazy(() =>
  Federated.importModule('Landers', 'HomeBanners'),
);

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...testProps(AUTOMATION_HOME_SCREEN.homeScreenScrollContainer)}>
        <Separator space={20} />
        <CardCarousel />

        <Separator space={20} />
        <React.Suspense fallback={<LoadingIndicator />}>
          <HomeBanners />
        </React.Suspense>

        <Separator space={20} />
        <MiniAppSelection />
        <Separator space={20} />

        {/* <GroceryProducts /> */}
        {/* <Restaurants /> */}
        <Separator space={10} />
        {/* <BottomPromotion /> */}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
