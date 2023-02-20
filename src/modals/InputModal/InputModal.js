import React, { useState } from 'react';
import {View, Text, Modal, TextInput, Button} from 'react-native';

import styles from './InputModal.style';

const InputModal = ({visible, onClose, onSend}) => {
    const [message, setMessage] = useState('');
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.card}>
            <Text onPress={() => onClose(false)} style={styles.close}>X</Text>
            <TextInput style={styles.input} multiline onChangeText={setMessage} placeholder='Mesajınızı giriniz...' />
            <Button title="Gönder" onPress={() => onSend(message)} />
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;
