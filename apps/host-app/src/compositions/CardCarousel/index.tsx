// React modules
import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

// Third party libraries
import Carousel from 'react-native-snap-carousel';

// Global components
import { Image } from '@global/components';

// Utils
import { DASHBOARD_ASSET_URI } from '../../utils/imageUri';
import { styles } from './Styles';
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_CARD_CAROUSEL } from '@superapp/test-ids/enums/HostApp';

const data = [
  { image: DASHBOARD_ASSET_URI.IMAGE_1 },
  { image: DASHBOARD_ASSET_URI.IMAGE_2 },
  { image: DASHBOARD_ASSET_URI.IMAGE_3 },
];

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }: any) => {
    return (
      <View
        style={styles.item}
        key={index}
        {...testProps(index + AUTOMATION_CARD_CAROUSEL.carouselImageContainer)}>
        <Image
          source={item.image}
          customStyle={{ borderRadius: 20 }}
          {...testProps(index + AUTOMATION_CARD_CAROUSEL.carouselImage)}
        />
      </View>
    );
  };

  return (
    <View
      style={styles.container}
      {...testProps(AUTOMATION_CARD_CAROUSEL.carouselContainer)}>
      <Carousel
        layoutCardOffset={18}
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 45}
        onSnapToItem={index => setActiveIndex(index)}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default CardCarousel;
