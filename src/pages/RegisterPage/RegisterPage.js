import React, {useState} from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

import Button from '../../components/Button';
import Input from '../../components/Input';

import styles from './RegisterPage.style';
import colors from '../../assets/js/colors';
import {useDispatch} from 'react-redux';

function RegisterPage({navigation}) {
  const [email, setEmail] = useState('gasdf');
  const [password, setPassword] = useState('1234567');
  const [repeatPassword, setRepeatPassword] = useState('1234567');

  const dispatch = useDispatch();

  const handleGoToLogin = () => navigation.navigate('LoginPage');

  const handleRegister = () => {
    if (
      email.length < 3 &&
      password.length < 5 &&
      repeatPassword.length < 5 &&
      password !== repeatPassword
    ) {
      showMessage({
        message:
          'Hatalı bilgi girildi. Lütfen denetleyin ve hataları düzeltin.',
        type: 'danger',
      });
      return;
    }
    dispatch({
      type: 'SINGUP',
      payload: {email, password, navigation, showErrorMessage},
      
    });
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };
  
  const showErrorMessage = (error) => showMessage(error);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/user.png')}
          tintColor={colors.primary}
        />
        <View style={styles.register_form}>
          <Input
            value={email}
            icon="email"
            placeholder="Eposta edresinizi giriniz."
            onChange={setEmail}
          />
          <Input
            value={password}
            icon="lock"
            placeholder="Şirenizi giriniz."
            onChange={setPassword}
          />
          <Input
            value={repeatPassword}
            icon="lock"
            placeholder="Şifre tekrarı."
            onChange={setRepeatPassword}
          />
          <Button title="Kayıt Ol" onPress={handleRegister} />
          <Button
            title="Üye Girişi"
            colors={{
              text: colors.secondary,
              background: colors.quaternary,
            }}
            onPress={handleGoToLogin}
          />
        </View>
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

export default RegisterPage;
