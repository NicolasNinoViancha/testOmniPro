import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@app/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.black,
        marginBottom: width * 0.03
    },
    button: {
        height: width * 0.1,
        flexDirection: 'row',
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingHorizontal: width * 0.04
    },
    labelButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.white,
        marginLeft: width * 0.02
    }
})