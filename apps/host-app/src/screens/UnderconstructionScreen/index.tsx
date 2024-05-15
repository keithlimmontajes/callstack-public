import React from 'react';
import { View } from 'react-native';
import { Text } from '@global/components';

const UnderConstruction = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text size={30} customStyle={{ textAlign: 'center' }} color="#000">
        This page is under construction.
      </Text>
    </View>
  );
};

export default UnderConstruction;
