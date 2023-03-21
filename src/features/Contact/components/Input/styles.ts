import { COLORS } from '@app/theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    ctnInput: {
        height: width * 0.1,
        width: '100%',
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        paddingHorizontal: width * 0.04,
    },
    input: {
        fontSize: 16
    },
    ctnError: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: width * 0.04
    },
    error: {
        fontSize: 14,
        color: COLORS.red,
        fontWeight: 'bold',
        marginLeft: 8
    }
})