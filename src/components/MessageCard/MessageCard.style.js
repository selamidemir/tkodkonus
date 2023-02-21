import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../assets/js/colors'

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 10,
        // width: deviceSizes.width * 0.85,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    title: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceSizes.width * 0.90,
    },
    user: {
        fontWeight: 'bold',
    },
    date: {
        color: colors.primary,
        textAlign: 'right',
    },
    text: {
        color: 'black',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 17,
    }
});