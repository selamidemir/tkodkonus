import {StyleSheet} from 'react-native';

import colors from '../../assets/js/colors';

export default StyleSheet.create({
  container: {},
  btn: {
    backgroundColor: colors.primary,
    margin: 3,
    padding: 5,
    borderRadius: 5,
  },
  btn_text: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.secondary,
  },
});
