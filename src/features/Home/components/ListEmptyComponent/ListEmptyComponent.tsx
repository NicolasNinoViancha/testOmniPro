import React from "react";
import { View, Text, ActivityIndicator } from 'react-native';
//additional components
import { ButtonRefetch } from '@app/components';
//models
import { PropsListEmptyComponent } from './models';
//styles
import { styles } from './styles';
import { COLORS } from '@app/theme';
//component
const ListEmptyComponent = ({
    loading = false,
    error = false,
    onRefetch
}: PropsListEmptyComponent) => {
    if (loading)
        return (
            <View style={styles.container}>
                <View style={styles.ctnLoading}>
                    <ActivityIndicator
                        size="large"
                        color={COLORS.black} />
                    <Text style={styles.textLoading}>
                        {`Cargando...`}
                    </Text>
                </View>
            </View>
        );
    if (error)
        return (
            <View style={styles.container}>
                <ButtonRefetch
                    testID='componentButtonRefetch'
                    onPress={onRefetch} />
            </View>
        );
    return (
        <View style={styles.container}>
            <Text style={[styles.textLoading, { textAlign: 'center' }]}>
                {`No existen elementos para esta busquedad`}
            </Text>
        </View>
    );
}
export default ListEmptyComponent;