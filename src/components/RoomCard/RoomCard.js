import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/js/colors';

import styles from './RoomCard.style';

const RoomCard = ({navigation, room}) => {
  const handlePress = () => navigation.navigate('ChatPage', {room});
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MaterialCommunityIcons name="cradle" size={30} color={colors.primary} />
      <Text style={styles.name}>{room.name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
