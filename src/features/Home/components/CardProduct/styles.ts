import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@app/theme';

const { width, height } = Dimensions.get('window');

const SIZE_IMAGE = width * 0.15;

export const styles = StyleSheet.create({
    container: {
        width,
        paddingVertical: width * 0.03,
        paddingHorizontal: width * 0.04,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.grayLight,
        borderTopWidth: 1.5
    },
    ctnImage: {
        width: SIZE_IMAGE,
        height: SIZE_IMAGE,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    details: {
        flex: 1,
        marginHorizontal: width * 0.05,
        height: '100%'
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.black
    },
    category: {
        fontWeight: 'bold',
        fontSize: 14,
        color: COLORS.grayMedium
    },
    title: {
        marginBottom: width * 0.02
    }
})