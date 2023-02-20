import React, {cloneElement, useEffect, useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import RoomsPage from '../../pages/RoomsPage';
import ChatPage from '../../pages/ChatPage';

import UserProvider from '../../context/UserContext';

const Stack = createNativeStackNavigator();

function App() {
  const login = useSelector(selector => selector.login);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerShow: false,
          unmountOnBlur: true,
          headerRight: () => (
            <Button
              onPress={() => {
                auth().currentUser && auth()
                  .signOut()
                  .then(() => dispatch({
                    type: 'LOGOUT', 
                    login: false
                  }))
                  .catch(err => console.log(err));
              }}
              title={auth().currentUser ? 'Çıkış' : 'Login'}
              color="#000"
            />
          ),
        })}>
        {!login ? (
          <>
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
          </>
        ) : (
          <>
            <Stack.Screen
              name="RoomsPage"
              component={RoomsPage}
              options={{title: 'Chat Rooms'}}
            />
            <Stack.Screen
              name="ChatPage"
              component={ChatPage}
              options={{title: 'Chat Room'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
export default AppWrapper;
