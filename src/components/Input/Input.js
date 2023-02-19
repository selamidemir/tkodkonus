import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

export default function Input({icon, placeholder, password, value, onChange}) {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} style={styles.icon} />
      <TextInput
        style={styles.text_input}
        value={value}
        secureTextEntry={password}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
}
