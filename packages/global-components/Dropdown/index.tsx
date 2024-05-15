// React modules
import React from 'react';
import { View } from 'react-native';

// Third party libraries
import SelectDropdown from 'react-native-select-dropdown';
import { scale } from 'react-native-size-matters';

// Components
import Text from '../Text';

// Utils
import { testProps } from '../../testIds/commons';
import { AUTOMATION_DROPDOWN } from '@superapp/test-ids/enums/HostApp';
import { styles } from './styles';

/* @ts-expect-error*/

const Dropdown = ({ dropdownWidth, label, form, field, data }) => {
  // Sample data only needed to get actual data
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const errors = form.errors[field.name];
  const touched = form.touched[field.name];

  return (
    <View {...testProps(AUTOMATION_DROPDOWN.dropdownContainer)}>
      <Text
        size={14}
        color="#40475A"
        {...testProps(label + AUTOMATION_DROPDOWN.dropdownLabel)}>
        {label}
      </Text>
      <SelectDropdown
        /* 
        ================================================
        TEMPORARY RENDER COUNTRIES DATA. STILL GATHERING 
        DATA NEEDED FOR OTHER DROPDOWN INPUTS 
        ================================================
        */
        data={data || countries}
        onSelect={(selectedItem, index) => {
          form.setFieldValue(field.name, selectedItem);
        }}
        defaultButtonText={' '}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={[
          styles.inputStyle,
          {
            borderColor: errors && touched ? '#EC543C' : '#D9D9D9',
            width: dropdownWidth || scale(150),
          },
        ]}
        {...testProps(label + AUTOMATION_DROPDOWN.dropdownInput)}
      />
      {errors && touched && (
        <Text
          color="#EC543C"
          {...testProps(label + AUTOMATION_DROPDOWN.dropdownTextError)}>
          {errors}
        </Text>
      )}
    </View>
  );
};

export default Dropdown;
