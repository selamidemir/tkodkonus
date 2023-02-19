import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/js/colors';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: colors.secondary,
  },
  image: {
    width: deviceSizes.width / 2,
    height: deviceSizes.height / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});