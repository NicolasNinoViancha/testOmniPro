import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@app/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ctnLoading: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLoading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.black,
        marginLeft: width * 0.02
    }
})