import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';1

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './LoginPage.style';
import colors from '../../assets/js/colors';
import auth from '@react-native-firebase/auth';

function LoginPage({navigation}) {
  const [email, setEmail] = useState('jane.doe@example.com');
  const [password, setPassword] = useState('SuperSecretPassword!');
  const [currentUser, setCurrentUser] = useState(auth().currentUser)

  const handleSingIn = () => {
    if (email.length < 3 && password.length < 5) {
      // Uyarı ver
      showMessage({
        message: 'Girilen bilgiler eksik!',
        type: 'danger',
        duration: 3501,
        icon: 'danger',
        position: 'top',
      });
      return;
    }

    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => navigation.navigate('RoomsPage'))
      .catch(err => {
        showMessage({
          message: 'Üye giriş işlemi yapılamadı!',
          type: 'danger',
          duration: 4501,
          icon: 'danger',
          position: 'top',
        });
        console.log(err);
      });

    setEmail('');
    setPassword('');
  };

  const handleGoToSingUp = () => {
    navigation.navigate('RegisterPage');
  };

  
  useEffect(() => {
    setCurrentUser(auth().currentUser);
    navigation.navigate('ChatPage')
  }, [auth().currentUser]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/user.png')}
          tintColor={colors.primary}
        />
        <View style={styles.login_form}>
          <Input
            value={email}
            onChange={setEmail}
            icon="email"
            placeholder="Eposta adresini giriniz."
          />
          <Input
            value={password}
            onChange={setPassword}
            icon="lock"
            password={true}
            placeholder="Şifreyi adresini giriniz."
          />
          <Button title="Giriş Yap" onPress={handleSingIn} />
          <Button
            title="Kayıt Ol"
            colors={{
              text: colors.secondary,
              background: colors.quaternary,
            }}
            onPress={handleGoToSingUp}
          />
        </View>
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

export default LoginPage;
