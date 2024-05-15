import React from 'react';

import { NewHomeResponseItem } from '@superapp/types/landers';
import BannerProductList from '../BannerProductList';

type Props = {
  item: NewHomeResponseItem;
};

const HomeCardsBanner = ({ item }: Props) => {
  if (item.type === 'html') {
    // @TODO add home card banner html
    return null;
  }

  if (item.type === 'banner' || item.type === 'bannerSlider') {
    // @TODO add home card banner here
    return null;
  }

  if (!item.hash) {
    return null;
  }

  return <BannerProductList hash={item.hash} />;
};

export default HomeCardsBanner;
