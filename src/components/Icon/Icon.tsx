import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//models
import { PropsIcon } from './models';
//styles
import { COLORS } from '@app/theme';
//component
const CustomIcon = ({
    name,
    color = COLORS.black,
    size = 30
}: PropsIcon) => (
    <Icon
        name={name}
        size={size}
        color={color} />
);

export default CustomIcon;