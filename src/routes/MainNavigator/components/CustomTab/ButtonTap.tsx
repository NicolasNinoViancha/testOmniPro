import React from "react";
import { View, TouchableOpacity } from 'react-native';
//additional components
import { Icon } from '@app/components';
//models
import { PropsButtonTap } from './models';
//styles
import { stylesButtonTap as styles } from './styles';
import { COLORS } from '@app/theme';
//component
const ButtonTap = ({
    isFocused = false,
    options,
    icon,
    onPress
}: PropsButtonTap) => (
    <TouchableOpacity
        activeOpacity={0.9}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        style={styles.container}
        onPress={onPress}>
        <Icon
            name={icon}
            size={30}
            color={
                isFocused
                    ? COLORS.black
                    : COLORS.gray
            } />
    </TouchableOpacity>
);

export default ButtonTap;