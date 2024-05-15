import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';
import { View, Modal, TouchableOpacity } from 'react-native';

const BottomModal = ({ visible, onClose, children }: any) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="close" size={24} color="black" />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
