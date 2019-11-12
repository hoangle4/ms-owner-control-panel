import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
const NumberInput = ({
  style,
  keyboardType,
  maxLength,
  value,
  onChangeText,
  placeholder,
  name,
  dataObj
}) => {
  console.log(value);
  const onChange = v => !isNaN(v) && onChangeText({ ...dataObj, [name]: v });
  return (
    <TextInput
      style={style}
      keyboardType={keyboardType}
      onChangeText={onChange}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
};

NumberInput.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataObj: PropTypes.object.isRequired
};

export default NumberInput;
