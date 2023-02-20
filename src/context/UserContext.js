import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';

import rooms from '../assets/js/rooms';

const initialValues = {
  user: {},
  login: false,
  roomList: rooms,
};

const reducers = (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, 
        user: payload.user, 
        login: payload.login
      };
      break;

    case 'LOGOUT':
      return {
        ...state,
        user: {},
        login: false,
      }
      break;

    case 'SINGUP':
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(
  reducers,
  auth().currentUser
    ? {
        user: auth().currentUser,
        login: true,
        roomList: rooms,
      }
    : initialValues,
);

const UserProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
}

export default UserProvider;
