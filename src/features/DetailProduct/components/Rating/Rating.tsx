import React, { Fragment } from "react";
import { View } from 'react-native';
//additional components
import { Icon } from '@app/components';
//models
import { PropsRating } from './models';
//styles
import { styles } from './styles';
import { COLORS } from "@app/theme";
//component
const Rating = ({
    rating = 0
}: PropsRating) => (
    <View style={styles.container}>
        {
            [...Array(5)].map((e, i) => {
                const verify = rating > i,
                    icon = verify
                        ? 'star'
                        : 'star-outline';
                return (
                    <Fragment key={`${i}`} >
                        <Icon
                            name={icon}
                            color={COLORS.yellow}
                            size={20} />
                        {i !== 4 && <View style={styles.itemSeparator} />}
                    </Fragment>
                )
            })

        }
    </View>
);
export default Rating;