import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@app/theme';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        backgroundColor: COLORS.white
    },
    message: {
        fontSize: 20,
        color: COLORS.black,
        marginTop: width * 0.04,
        marginBottom: width * 0.08,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonSubmit: {
        width: '100%',
        backgroundColor: COLORS.black,
        borderRadius: 4,
        height: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.white
    },
    ctnInput: {
        marginBottom: width * 0.04
    },
    buttonDisable: {
        backgroundColor: COLORS.gray
    }
})