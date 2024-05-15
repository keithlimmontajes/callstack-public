// React modules
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// Third party libraries
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Global components
import { Separator, TextInput } from '@global/components';

// Compositions
// import Address from '../Address';

// Components
import LandersIcon from '../../components/Icons/LandersIcon';
import CartIcon from '../../components/Icons/CartIcon';

// Utils
import { testProps } from '@superapp/test-ids';
import { AUTOMATION_HEADER } from '@superapp/test-ids/enums/HostApp';

import { styles } from './styles';
/**
 *
 * Add other components inside here such as
 * Search box, landers icon, cart items
 *
 */

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigation = () => {
    navigation.navigate('UnderConstruction');
  };

  return (
    <View
      style={styles.headerContainer}
      {...testProps(AUTOMATION_HEADER.headerContainer)}>
      <View
        style={styles.alignment}
        {...testProps(AUTOMATION_HEADER.headerItemContainer)}>
        <TouchableOpacity
          style={styles.landersIcon}
          onPress={handleNavigation}
          {...testProps(AUTOMATION_HEADER.clickableLandersIcon)}>
          <LandersIcon iconWidth={40} iconHeight={40} />
        </TouchableOpacity>
        <TextInput
          placeholder="What are you looking for?"
          inputStyle={styles.input}
          placeholderTextColor="#fff"
          {...testProps(AUTOMATION_HEADER.headerTextInput)}
        />
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={handleNavigation}
          {...testProps(AUTOMATION_HEADER.clickableCartIcon)}>
          <CartIcon />
        </TouchableOpacity>
      </View>
      <Separator space={20} />
      <View
        style={styles.addressContainer}
        {...testProps(AUTOMATION_HEADER.addressContainer)}>
        {/* <Address handleNavigation={handleNavigation} /> */}
      </View>
    </View>
  );
};

export default Header;
