import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';

function FloatingButton({onPress, icon}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name={icon} color="white" size={30} />
    </TouchableOpacity>
  );
}

export default FloatingButton;
