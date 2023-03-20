import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailProductScreen } from '@app/screens';

import { HeaderBackImage } from '../components';

type RootStackParamList = {
    HomeApp: undefined;
    DetailProduct: { idProduct: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeApp"
                options={{
                    headerShown: false
                }}
                component={HomeScreen} />
            <Stack.Screen
                name="DetailProduct"
                options={{
                    headerShown: true,
                    headerTitle: 'Detalles de producto',
                    headerBackTitle: ' ',
                    headerBackImage: () => <HeaderBackImage />
                }}
                //@ts-ignore
                component={DetailProductScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;