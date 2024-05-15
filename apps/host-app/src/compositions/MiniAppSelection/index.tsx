// React modules
import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

// Global Components
import { Separator, Text } from '@global/components';

// Third party libraries
import { scale } from 'react-native-size-matters';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

// Utils
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_MINI_APP_SELECTION } from '@superapp/test-ids/enums/HostApp';

import { styles } from './Styles';

const miniApps = [
  { title: 'Grocery', icon: '' },
  { title: 'Food', icon: '' },
  { title: 'Hair Care', icon: '' },
  { title: 'Health', icon: '' },
  { title: 'Other', icon: '' },
];

const MiniAppSelection = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: scale(20) }}
      {...testProps(AUTOMATION_MINI_APP_SELECTION.miniAppSelectionContainer)}>
      {miniApps.map((item, index) => {
        return (
          <TouchableOpacity
            /** Navigation to mini apps (Grocery, Food, Health, etc etc...)*/
            key={index}
            onPress={() => navigation.navigate('Landers')}
            style={styles.clickableContainer}
            {...testProps(
              index +
                AUTOMATION_MINI_APP_SELECTION.miniAppSelectionClickableButton,
            )}>
            <View
              style={styles.circle}
              {...testProps(
                index + AUTOMATION_MINI_APP_SELECTION.miniAppSelectionCircle,
              )}
            />
            <Separator space={5} />
            <Text
              size={14}
              {...testProps(
                index + AUTOMATION_MINI_APP_SELECTION.miniAppSelectionTitle,
              )}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default MiniAppSelection;
