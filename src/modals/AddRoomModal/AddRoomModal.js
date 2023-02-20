import {Modal, View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

import styles from './AddRoomModal.style';

const AddRoomModal = ({visible, onPress}) => {
  const [name, setName] = useState('');

  const handlePress = () => {
    onPress(name);
    setName('');
  };

  const handleClose = () => {
    setName('');
    onPress(name);
  }
  
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.name}>Yeni Oda Ekle</Text>
            <Text onPress={handleClose}>X</Text>
          </View>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Oda adı.."
            onPress={handlePress}
          />
          <Button
            title="Add a Room"
            style={styles.button}
            onPress={handlePress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddRoomModal;
