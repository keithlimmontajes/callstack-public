import React, { ReactElement } from 'react';
import { Pressable, View } from 'react-native';
import CloseIcon from '../../components/icons/CloseIcon';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const CloseButton = (): ReactElement => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <CloseIcon />
      </Pressable>
    </View>
  );
}