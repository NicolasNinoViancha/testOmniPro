import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
//additional components
import { Image } from '@app/components';
//models
import { PropsCardProduct } from './models';
//styles
import { styles } from './styles';
//component
const CardProduct = ({
    image = '',
    name = 'Sin informacion',
    price = 0,
    category = 'Sin informacion',
    onPress
}: PropsCardProduct) => (
    <TouchableOpacity
        activeOpacity={0.9}
        style={styles.container}
        onPress={onPress}>
        <View style={styles.ctnImage}>
            <Image
                resizeMode={'contain'}
                source={image} />
        </View>
        <View style={styles.details}>
            <Text
                style={[styles.textBold, styles.title]}
                numberOfLines={2}>
                {`${name}`}
            </Text>
            <Text style={styles.category}>
                {`${category}`}
            </Text>
        </View>
        <Text style={styles.textBold}>
            {`$${price}`}
        </Text>
    </TouchableOpacity>
);

export default CardProduct;