import React, { Fragment } from "react";
import { View, Text, ActivityIndicator } from 'react-native';
//models
import { PropsListFooterComponent } from './models';
//styles
import { styles } from './styles';
import { COLORS } from '@app/theme';
//component
const ListEmptyComponent = ({
    isLoadingMore
}: PropsListFooterComponent) => {
    return (
        <Fragment>
            {
                isLoadingMore &&
                <View style={styles.ctnLoading}>
                    <ActivityIndicator
                        size="large"
                        color={COLORS.black} />
                    <Text style={styles.textLoading}>
                        {`Cargando...`}
                    </Text>
                </View>
            }
        </Fragment>
    );
}
export default ListEmptyComponent;