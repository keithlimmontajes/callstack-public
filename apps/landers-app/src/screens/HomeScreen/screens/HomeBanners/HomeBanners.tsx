import React from 'react';
import { View } from 'react-native';

import { useGetJsonPageNewHomeQuery } from '@superapp/api/landers';
import HomeCardsBanner from '../../components/HomeCardsBanner/HomeCardsBanner';

import styles from './styles';

const HomeBannersScreen = () => {
  const { data, isFetching } = useGetJsonPageNewHomeQuery();

  // @TODO add loading when still fetching the banners

  return (
    <View style={styles.container}>
      {data?.map((item, index) => <HomeCardsBanner key={index} item={item} />)}
    </View>
  );
};

export default HomeBannersScreen;
