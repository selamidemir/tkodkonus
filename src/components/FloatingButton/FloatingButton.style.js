import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/js/colors';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    // bottom: 200,
    top: deviceSizes.height - 150,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
