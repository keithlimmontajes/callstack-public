// React modules
import React from 'react';

// Components
import TextInput from '../TextInput';
import { testProps } from '../../testIds/commons';

const FormikInput = ({
  form,
  field,
  textStyle,
  inputStyle,
  label,
  placeholder,
  name = ''
}: {
  form: any;
  field: any;
  textStyle: any;
  inputStyle: any;
  label: string;
  placeholder?: string;
  name: string;
}) => {
  return (
    <>
      <TextInput
        {...field}
        onChangeText={(text: string) => {
          form.setFieldValue(field.name, text);
        }}
        label={label}
        textStyle={textStyle}
        inputStyle={inputStyle}
        value={field.value}
        errors={form.errors[field.name]}
        touched={form.touched[field.name]}
        placeholder={placeholder}
        {...testProps(`${name}FormikInput`)}
      />
    </>
  );
};

export default FormikInput;
