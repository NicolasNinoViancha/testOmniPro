import React from 'react';
import { View, TextInput, Text } from 'react-native';
//models
import { PropsContact } from '../models';
//styles
import { styles } from '../styles';
//components
const Contact = ({ navigation }: PropsContact) => {
    //main componente
    return (
        <View style={styles.container}>
            <Text>
                PANTALLA DE CONTACTO
            </Text>
        </View>
    );
}

export default Contact;