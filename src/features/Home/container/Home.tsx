import React, { Fragment, useState } from "react";
import { FlatList, SafeAreaView, View } from 'react-native';
//additional components
import { CardProduct, ListEmptyComponent, ListFooterComponent } from '../components';
//custom hooks
import { useFecth } from '../hooks';
//models
import { PropsHome } from '../models';
import { StoreItem } from '@app/models';
//styles
import { styles } from '../styles';
//component
const Home = ({ navigation }: PropsHome) => {
    //custom hooks
    const {
        data,
        loading,
        isLoadingMore,
        error,
        fetchMore,
        refetch
    } = useFecth();
    //const {
    //    data: dataAllItems,
    //    loading: loadingAllItems
    //} = useFecth('?limit=100');
    //states
    const [input, setInput] = useState<string>();
    //functions
    const handleFetchMore = async () => await fetchMore();
    console.log({ longuitud: data.length });
    //main component
    return (
        <SafeAreaView style={styles.container}>
            {/*<InputSearch
                data={ }
                value={ }
                onChange={ }
    onSelect={ } />*/}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={(loading || error)
                    ? []
                    : data}
                onEndReachedThreshold={0.9}
                onEndReached={handleFetchMore}
                keyExtractor={(item, index) => `item_${item.id}`}
                renderItem={({ item, index }) => (
                    <CardProduct
                        image={item.image}
                        name={item.title}
                        price={item.price}
                        category={item.category}
                        onPress={() => navigation.navigate('DetailProduct', { idProduct: item.id })} />
                )}
                ListEmptyComponent={
                    <ListEmptyComponent
                        loading={loading}
                        error={error}
                        onRefetch={() => refetch()} />
                }
                ListFooterComponent={
                    <ListFooterComponent
                        isLoadingMore={isLoadingMore} />
                }
            />
        </SafeAreaView>
    );
}

export default Home;