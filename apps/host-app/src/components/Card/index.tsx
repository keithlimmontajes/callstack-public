import React from 'react';
import { styles } from './styles';
import { CartTypes } from './types';
import { View } from 'react-native';
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_CARD_COMPONENT_ID } from '@superapp/test-ids/enums/HostApp';

const Card = ({ children }: CartTypes) => {
  return (
    <View
      style={styles.container}
      {...testProps(AUTOMATION_CARD_COMPONENT_ID.cardContainer)}>
      {children}
    </View>
  );
};

export default Card;
