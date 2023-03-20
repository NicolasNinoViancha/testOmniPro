import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '@app/theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 0.4,
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