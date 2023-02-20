import React from 'react'
import { View, Text } from 'react-native'

import styles from './MessageCard.style';

const MessageCard = ({message}) => {
  return (
    <View style={styles.container}>
      <Text>{message.text}</Text>
    </View>
  )
}

export default MessageCard