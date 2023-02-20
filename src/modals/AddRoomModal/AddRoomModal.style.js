import {StyleSheet} from 'react-native';

import colors from '../../assets/js/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.tertiary,  
    justifyContent: 'center',
    // opacity: 0.7,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    opacity: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
