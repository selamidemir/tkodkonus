import { StyleSheet } from 'react-native'
import colors from '../../assets/js/colors'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.quaternary,
    },
    name: {
        fontSize: 25,
        color: colors.primary,
        // fontWeight: 'bold',
    },
    icon: {

    }
})