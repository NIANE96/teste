import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../styles/common/common.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomInputField = ({ placeholder, iconName, isPassword, style, value, onChangeText, ...props }) => {
  const [isSecure, setIsSecure] = useState(isPassword);

  useEffect(() => {
    if (value !== undefined) {
      onChangeText(value);
    }
  }, []);

  return (
    <View style={[commonStyles.inputContainer, style]}>
      {iconName && <Icon name={iconName} size={20} style={commonStyles.icon} />}
      <TextInput
        style={commonStyles.input}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Icon name={isSecure ? "eye" : "eye-slash"} size={20} style={commonStyles.iconRight} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInputField;
