import React from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
//additional components
import { SectionContent } from '../components';
import { ButtonRefetch } from '@app/components';
//custom hooks
import { useFecth } from '@app/features/DetailProduct/hooks';
//models
import { PropsDetailProduct } from '../models';
//styles
import { styles } from '../styles';
import { COLORS } from '@app/theme';
//component
const DetailProduct = ({
    navigation,
    route
}: PropsDetailProduct) => {
    //recep params
    const { idProduct } = route.params;
    //custom hooks
    const {
        data,
        loading,
        error,
        refetch
    } = useFecth(idProduct);
    //main component
    if (loading)
        return (
            <View style={styles.container}>
                <View style={styles.ctnLoading}>
                    <ActivityIndicator
                        size="large"
                        color={COLORS.black} />
                    <Text style={styles.textLoading}>
                        {`Cargando...`}
                    </Text>
                </View>
            </View>
        );
    if (error)
        return (
            <View style={styles.container}>
                <ButtonRefetch
                    testID='componentButtonRefetch'
                    onPress={() => refetch(idProduct)} />
            </View>
        );
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <SectionContent
                    testID='componentSectionContent'
                    image={data?.image || ''}
                    title={data?.title}
                    description={data?.description}
                    rating={data?.rating.rate}
                    price={data?.price} />
            </ScrollView>
        </View>
    )
};

export default DetailProduct;