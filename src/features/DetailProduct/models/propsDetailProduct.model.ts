import { RouteProp, NavigationProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type DataParameters = {
    idProduct: number;
}

export type StackParamList = {
    DetailProduct: DataParameters;
};

export type Props = {
    route: RouteProp<StackParamList, 'DetailProduct'>;
    navigation: NavigationProp<any>;
}

export type PropsDetailProduct = NativeStackScreenProps<StackParamList, 'DetailProduct'>;
