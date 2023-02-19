import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import RoomsPage from '../../pages/RoomsPage';
import ChatPage from '../../pages/ChatPage';
import UserProvider from '../../context/UserContext';

const Stack = createNativeStackNavigator();

function App() {
  const [currentUserId, setCurrentUserId] = useState(
    auth().currentUser ? auth().currentUser.id : false,
  );

  useEffect(() => {
    setCurrentUserId(auth().currentUser ? auth().currentUser.id : false);
  }, [currentUserId]);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation}) => ({
            headerShow: false,
            unmountOnBlur: true,
            headerRight: () => (
              <Button
                onPress={() => {
                  auth().signOut();
                  navigation.navigate('LoginPage');
                }}
                title="Çıkış"
                color="#000"
              />
            ),
          })}>
              <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{title: 'User Login'}}
              />
              <Stack.Screen
                name="RegisterPage"
                component={RegisterPage}
                options={{title: 'Register'}}
              />
                            <Stack.Screen
                name="RoomsPage"
                component={RoomsPage}
                option={{title: 'Chat Rooms'}}
              />
              <Stack.Screen
                name="ChatPage"
                component={ChatPage}
                option={{title: 'Chat Room'}}
              />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
