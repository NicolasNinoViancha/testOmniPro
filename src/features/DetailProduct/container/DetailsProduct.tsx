import React from 'react';
import { View, Text } from 'react-native';
//additional components
import { Image } from '@app/components';
import { Rating } from '../components';
//models
import { PropsDetailProduct } from '../models';
import { StoreItem } from 'src/models';
//styles
import { styles } from '../styles';
//mock data
const data: StoreItem = {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
        "rate": 3.6,
        "count": 145
    }
}
//component
const DetailProduct = ({
    navigation,
    route
}: PropsDetailProduct) => {
    //recep params
    const { idProduct } = route.params;
    //main component
    return (
        <View style={styles.container}>
            <View style={styles.ctnImage}>
                <Image
                    resizeMode={'contain'}
                    source={data.image} />
            </View>
            <View style={styles.ctnInfo}>
                <Text style={[styles.title]}>
                    {data.title}
                </Text>
                <Text style={styles.description}>
                    {data.description}
                </Text>
                <View style={styles.ctnRating}>
                    <Text style={styles.rating}>
                        {`${data.rating.rate}`}
                    </Text>
                    <Rating
                        rating={Math.floor(data.rating.rate)} />
                </View>
                <Text style={styles.price}>
                    {`$ ${data.price}`}
                </Text>
            </View>
        </View>
    )
};

export default DetailProduct;