import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemSeparator: {
        width: width * 0.01
    }
})