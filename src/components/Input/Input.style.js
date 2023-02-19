import {StyleSheet} from 'react-native';
import colors from '../../assets/js/colors';

export default StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
  },
  text_input: {
    padding: 5,
    fontSize: 15,
    flex: 1,
  },
  icon: {
    marginLeft: 5,
    color: colors.primary,
  },
});
