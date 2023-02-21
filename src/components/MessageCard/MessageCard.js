import React from 'react';
import {View, Text} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

import styles from './MessageCard.style';

const MessageCard = ({message, currentUser}) => {
  const align = currentUser === message.user.id ? 'flex-start' : 'flex-end';
  const formatedDate = formatDistance(
    parseISO(message.date), new Date(), {
    addSurffix: true,
    locale: tr,
  });

  return (
    <View style={{...styles.container, alignItems: align}}>
      <View style={styles.title}>
        <Text style={styles.user}>{message.user.name}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
      <View>
        <Text style={styles.text}>{message.text}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
