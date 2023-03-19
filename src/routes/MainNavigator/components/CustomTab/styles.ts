import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SIZE_TAP = width * 0.12;

export const styles = StyleSheet.create({
    container: {
        width,
        height: height * 0.1,
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
        flexDirection: 'row',
        borderColor: '#FAFAFA',
        borderTopWidth: 2,
    }
})

export const stylesButtonTap = StyleSheet.create({
    container: {
        height: SIZE_TAP,
        width: SIZE_TAP,
        justifyContent: 'center',
        alignItems: 'center'
    }
})