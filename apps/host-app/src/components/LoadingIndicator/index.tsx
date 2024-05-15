import React from 'react';
import { styles } from './styles';
import { ActivityIndicator, View } from 'react-native';
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_LOADING_INDICATOR } from '@superapp/test-ids/enums/HostApp';

const FallbackComponent = () => (
  <View
    style={styles.container}
    {...testProps(AUTOMATION_LOADING_INDICATOR.loadingContainer)}>
    <ActivityIndicator
      color="rgba(56, 30, 114, 1)"
      size="large"
      {...testProps(AUTOMATION_LOADING_INDICATOR.activityIndicator)}
    />
  </View>
);

export default FallbackComponent;
