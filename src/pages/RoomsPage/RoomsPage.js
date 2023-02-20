import React, {useState} from 'react';
import {SafeAreaView, FlatList, Modal, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import FlashMessage, {showMessage} from 'react-native-flash-message';

import FloatingButton from '../../components/FloatingButton';
import RoomCard from '../../components/RoomCard/RoomCard';
import AddRoomModal from '../../modals/AddRoomModal';

import styles from './RoomsPage.style';

function RoomsPage({navigation}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const roomList = useSelector(selector => selector.roomList);
  const user = useSelector(selector => selector.user);

  const handleAddRoom = () => {
    setShowAddModal(true);
  };

  const addNewRoom = name => {
    if (name.length !== 0) {
      const newRoom = {
        id: uuid.v4(),
        name: name.trim(),
        owner: user.email.split('@')[0],
      };
      roomList.push(newRoom);
      showMessage({
        message: `${name} odası başarı ile kuruldu.`,
        type: 'success',
        duration: 2501,
        icon: 'success',
        position: 'top',
      });
    }
    setShowAddModal(false);
  };

  const renderRoom = ({item}) => (
    <RoomCard navigation={navigation} room={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={roomList} renderItem={renderRoom} style={styles.list} />
      <FlashMessage position="top" />
      <AddRoomModal onPress={addNewRoom} visible={showAddModal} />
      <FloatingButton icon="plus" onPress={handleAddRoom} />
    </SafeAreaView>
  );
}

export default RoomsPage;
