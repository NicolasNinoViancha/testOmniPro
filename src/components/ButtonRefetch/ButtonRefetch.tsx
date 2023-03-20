import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
//additional components
import Icon from '../Icon';
//models
import { PropsButtonRefetch } from './models';
//styles
import { styles } from './styles';
import { COLORS } from "@app/theme";
//component
const ButtonRefetch = ({
    onPress
}: PropsButtonRefetch) => (
    <View style={styles.container}>
        <Text style={styles.label}>
            {`Ocurrio un error`}
        </Text>
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.button}
            onPress={onPress}>
            <Icon
                name={'refresh'}
                color={COLORS.white}
                size={20} />
            <Text style={styles.labelButton}>
                {`Intentar de nuevo`}
            </Text>
        </TouchableOpacity>
    </View>
);
export default ButtonRefetch;