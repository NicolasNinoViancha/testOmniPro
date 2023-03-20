import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@app/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    ctnImage: {
        backgroundColor: COLORS.grayLight,
        width: '100%',
        height: width * 0.8,
        padding: width * 0.08
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.black,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.black,
        marginBottom: width * 0.02
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.black,
    },
    ctnInfo: {
        width: '100%',
        paddingHorizontal: width * 0.04,
        paddingVertical: width * 0.08
    },
    description: {
        fontSize: 16,
        color: COLORS.grayMedium,
        marginBottom: width * 0.04
    },
    rating: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.yellow,
        marginRight: 8
    },
    ctnDetails: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ctnRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: width * 0.02
    }
})