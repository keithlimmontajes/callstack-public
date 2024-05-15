// React modules
import React from 'react';
import { Text, View, Pressable } from 'react-native';

// Third party libraries
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Utils
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_NOTIFICATION_HELP } from '@superapp/test-ids/enums/HostApp';

import { styles } from './styles';
import { color } from '../../utils/themes';
import Feather from 'react-native-vector-icons/Feather';

const NotificationHelp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View
      style={styles.container}
      {...testProps(AUTOMATION_NOTIFICATION_HELP.notificationHelpContainer)}>
      <View
        style={styles.subcontainer}
        {...testProps(
          AUTOMATION_NOTIFICATION_HELP.notificationHelpSubContainer,
        )}>
        <Pressable
          {...testProps(
            AUTOMATION_NOTIFICATION_HELP.notificationHelpClickableButton,
          )}
          onPress={() => navigation.navigate('NotificationHelp')}>
          <View style={styles.content}>
            <View style={styles.subcontent}>
              <View style={styles.icons}>
                <Feather
                  name="message-circle"
                  size={26}
                  color={color.DEFAULT}
                />
              </View>
              <View>
                <Text
                  style={styles.text}
                  {...testProps(AUTOMATION_NOTIFICATION_HELP.notificationHelp)}>
                  Need Help ?
                </Text>
                <Text
                  style={styles.text}
                  {...testProps(
                    AUTOMATION_NOTIFICATION_HELP.notificationChatWithAgent,
                  )}>
                  Chat with an agent
                </Text>
              </View>
            </View>
            <View style={styles.icons}>
              <Feather name="arrow-right" size={26} color={color.DEFAULT} />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NotificationHelp;
