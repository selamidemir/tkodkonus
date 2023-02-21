import React, {cloneElement, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import database, {firebase} from '@react-native-firebase/database';

import FloatingButton from '../../components/FloatingButton';
import InputModal from '../../modals/InputModal';

import styles from './ChatPage.style';
import parsMessageData from '../../utils/parseMessageData';
import MessageCard from '../../components/MessageCard';

function ChatPage({route}) {
  const {room} = route.params;
  const user = useSelector(s => s.user);
  const [visibleInputModal, setVisibleInputModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const databaseRef = firebase
    .app()
    .database('https://tkodkonus-default-rtdb.firebaseio.com/')
    .ref(`rooms/${room.name}/messages`);

  const handleAddMessage = () => {
    setVisibleInputModal(true);
  };

  const addMessage = text => {
    const date = new Date().toISOString();
    const message = {
      text: text.trim(),
      date,
      user: {
        id: user.uid,
        name: user.email.split('@')[0],
        email: user.email,
      },
    };
    databaseRef.push(message);
    setVisibleInputModal(false);
  };

  const renderMessage = ({item}) => <MessageCard message={item} currentUser={user.uid} />

  useEffect(() => {
    databaseRef.on('value', snapshot => {
      const data = snapshot.val();
      const messages = parsMessageData(data);
      setMessages(messages);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={messages} style={styles.messages} renderItem={renderMessage} />
      <FloatingButton icon="plus" onPress={handleAddMessage} />
      <InputModal
        visible={visibleInputModal}
        onSend={addMessage}
        onClose={setVisibleInputModal}
      />
    </SafeAreaView>
  );
}

export default ChatPage;
