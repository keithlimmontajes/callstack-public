import React from 'react';
import { styles } from './styles';
import { Federated } from '@callstack/repack/client';
import { ActivityIndicator, View } from 'react-native';
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_LANDERS_SCREEN } from '@superapp/test-ids/enums/HostApp';
import { withTheme } from '@rneui/themed';

const LandersStacks = React.lazy(() =>
  Federated.importModule('Landers', 'HomeScreen'),
);

// TODO: move to reuse component global
const FallbackComponent = () => (
  <View
    style={styles.container}
    {...testProps(AUTOMATION_LANDERS_SCREEN.landersScreenContainer)}>
    <ActivityIndicator
      color="rgba(56, 30, 114, 1)"
      size="large"
      {...testProps(AUTOMATION_LANDERS_SCREEN.landersActivityIndicator)}
    />
  </View>
);

const LandersScreen = (props: any) => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <LandersStacks {...props} testProps={'helllo'} />
    </React.Suspense>
  );
};

export default withTheme(LandersScreen) as React.ComponentType<any>;
