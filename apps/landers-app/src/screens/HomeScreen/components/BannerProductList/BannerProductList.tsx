import React from 'react';
import { Text, View, Pressable, Dimensions } from 'react-native';

import { useGetJsonWidgetQuery } from '@superapp/api/landers';

import { RemoteImage } from '@global/components';

import styles from './styles';

const { width } = Dimensions.get('window');

type Props = {
  hash: string;
};

const BannerProductList = ({ hash }: Props) => {
  const { data, isFetching } = useGetJsonWidgetQuery({
    hash,
    storeCode: 'default', // default for now
  });

  if (isFetching) {
    // @TODO show skeleton placeholder here

    return null;
  }

  const urlBanner = data?.mobile_banner_url || data?.banner_url;

  const onPressSeeAll = () => {
    // @TODO
  };

  return (
    <>
      {!!urlBanner && (
        <View style={styles.blockBanner}>
          <Pressable onPress={onPressSeeAll}>
            <RemoteImage
              source={{ url: urlBanner }}
              width={width - 100}
              height={140}
              style={styles.bannerAdsImg}
            />

            <View style={styles.seeAllBtnBlock}>
              <Text>{data?.products_data.length} products</Text>
              <Pressable onPress={onPressSeeAll}>
                <Text style={styles.seeAllBtnText}>See All</Text>
              </Pressable>
            </View>

            <Text>BannerProductList</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default BannerProductList;
