import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
//additional libraries
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//additional libraries
import { Input } from '../components';
//scheme validations
import { schemeValidation } from '../validations';
//models
import { PropsContact } from '../models';
//styles
import { styles } from '../styles';
//constant
import { MSM } from '../constant';
//components
const Contact = ({ navigation }: PropsContact) => {
    //state
    //custom hooks
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors, isValid } } = useForm({
            resolver: yupResolver(schemeValidation),
            mode: 'onChange',
            defaultValues: {
                name: '',
                comment: ''
            }
        });
    //Functions
    const onSubmit = (values: any) => {
        console.log({ msm: 'comentario enviado' });
        setValue('comment', '');
        setValue('name', '');
        Alert.alert('Accion', 'comentario enviado');
    }
    //main componente
    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                {MSM}
            </Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        wrapper={styles.ctnInput}
                        placeholder={'Nombre'}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        {...(errors.name?.message && {
                            error: {
                                isError: true,
                                error: errors.name?.message
                            }
                        })} />
                )}
                name="name"
                rules={{ required: true }} />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        wrapper={styles.ctnInput}
                        placeholder={'Comentario'}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        {...(errors.comment?.message && {
                            error: {
                                isError: true,
                                error: errors.comment?.message
                            }
                        })} />
                )}
                name="comment"
                rules={{ required: true }} />
            <TouchableOpacity
                activeOpacity={0.9}
                style={[
                    styles.buttonSubmit,
                    !isValid && styles.buttonDisable]}
                disabled={!isValid}
                onPress={handleSubmit(onSubmit)}>
                <Text style={styles.textButton}>
                    {`Enviar comentario`}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Contact;