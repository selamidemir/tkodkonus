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
    borderColor: colors.tertiary,
    borderWidth: 1,

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
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
  button: {},
});
