import React from 'react';
import { View, Text } from 'react-native';
//additional components
import { Image } from '@app/components';
import Rating from '../Rating';
//models
import { PropsSectionContent } from './models';
//styles
import { styles } from './styles';
//component
const SectionContent = ({
    image = '',
    title = '',
    description = '',
    rating = 0,
    price = 0
}: PropsSectionContent) => (
    <View style={styles.container}>
        <View style={styles.ctnImage}>
            <Image
                resizeMode={'contain'}
                source={image} />
        </View>
        <View style={styles.ctnInfo}>
            <Text style={[styles.title]}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>
            <View style={styles.ctnRating}>
                <Text style={styles.rating}>
                    {`${rating}`}
                </Text>
                <Rating
                    rating={Math.floor(rating)} />
            </View>
            <Text style={styles.price}>
                {`$ ${price}`}
            </Text>
        </View>
    </View>
);

export default SectionContent;