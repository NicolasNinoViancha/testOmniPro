import React from "react";
import { View } from 'react-native';
//additional components
import { Icon } from '@app/components';
//styles
import { COLORS } from "@app/theme";
//component
const HeaderBackImage = () => (
    <View style={{ marginLeft: 10 }}>
        <Icon
            name='chevron-left'
            size={30}
            color={COLORS.black} />
    </View>
);
export default HeaderBackImage;