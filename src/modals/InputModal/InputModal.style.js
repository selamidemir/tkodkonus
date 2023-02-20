import {StyleSheet} from 'react-native';

import colors from '../../assets/js/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    opacity: 1,
  },
  input: {
    // height: 201,
  },
  close: {
    textAlign: 'right',

  },
  name: {
    fontSize: 21,
    color: colors.primary,
    fontWeight: 'bold',
  },
  body: {},
  button: {
    
  },
});
