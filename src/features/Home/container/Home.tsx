import React from "react";
import { View, Text } from 'react-native';
//models
import { PropsHome } from '../models';
//styles
import { styles } from '../styles';
//component
const Home = ({ navigation }: PropsHome) => {
    //main component
    return (
        <View style={styles.container}>
            <Text>
                {`hola esta es una pantalla de inicio`}
            </Text>
        </View>
    );
}

export default Home;