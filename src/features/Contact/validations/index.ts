import * as yup from 'yup';

export const schemeValidation = yup.object().shape({
    name: yup
        .string()
        .required('El nombre es requerido'),
    comment: yup
        .string()
        .required('El comentario es requerido')
});
