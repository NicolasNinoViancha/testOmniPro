import React, { Fragment } from "react";
import { View, TextInput, Text } from 'react-native';
//additional components
import { Icon } from '@app/components';
//models
import { PropsInput } from './models';
//styles
import { COLORS } from '@app/theme'
import { styles } from "./styles";
//constant
import { INITIAL_STATE_ERROR } from './constant';
//component
const Input = ({
    wrapper,
    placeholder,
    value,
    error = INITIAL_STATE_ERROR,
    onChange,
    onBlur
}: PropsInput) => (
    <View style={[{ width: '100%' }, wrapper && wrapper]}>
        <View style={styles.ctnInput}>
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black}
                value={value} />
        </View>
        {
            error.isError &&
            <View style={styles.ctnError}>
                <Icon
                    name={'close'}
                    size={25}
                    color={COLORS.red} />
                <Text style={styles.error}>
                    {error.error || 'esto es un error grande'}
                </Text>
            </View>
        }
    </View>
);
export default Input;