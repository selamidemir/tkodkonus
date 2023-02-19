import React, {useEffect, useState} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';

const initialValues = {
  user: {},
  login: false,
};

const reducers = (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case 'LOGIN':
      console.log('giriş işlemi. ', payload.email, payload.password);
      // auth().signOut();
      auth().signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => {
        state =  { ...state, login: true};
        return state;
      })
      .catch(err => {
        payload.showErrorMessage({
          message: 'Üye giriş işlemi yapılamadı!',
          type: 'danger',
          duration: 4501,
          icon: 'danger',
          position: 'top',
        });
      })
      return {...state, login: false};
      break;

    case 'LOGOUT':
      break;

    case 'SINGUP':
      auth()
        .createUserWithEmailAndPassword(
          'jane.doe@example.com',
          'SuperSecretPassword!',
        )
        .then(res => {
          payload.showErrorMessage({
            message: 'Kayıt işlemi başarılı bir şekilde gerçekleştirildi.',
            type: 'success',
            // duration: 4501,
            icon: 'success',
            position: 'top',
          });
          setTimeout(() => payload.navigation.navigate('LoginPage'), 3555);
        })
        .catch(error => {
          payload.showErrorMessage({
            message: 'Kayıt işlemi gerçekleştirilemedi!',
            type: 'danger',
            duration: 4501,
            icon: 'danger',
            position: 'top',
          });
        });
      break;

    default:
      return state;
      break;
  }
};

function UserProvider({children}) {
  const [store] = useState(createStore(reducers, initialValues));

  return <Provider store={store}>{children}</Provider>;
}

export default UserProvider;
