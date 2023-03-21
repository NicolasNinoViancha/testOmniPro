import { createStackNavigator } from '@react-navigation/stack';
import { DetailProductScreen } from '@app/screens';
//additional components
import { HeaderBackImage } from '../components';
import HomeNavigator from '../../HomeNavigator/container';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeApp"
                options={{
                    headerShown: false
                }}
                component={HomeNavigator} />
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

export default MainNavigator;