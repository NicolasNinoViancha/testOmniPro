import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ContactScreen } from '@app/screens';
//additional components
import { CustomTab } from '../components';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
            <Tab.Screen
                name="Home"
                options={{
                    headerShown: false
                }}
                component={HomeScreen} />
            <Tab.Screen
                name="Contact"
                options={{
                    headerTitle: 'Contacto'
                }}
                component={ContactScreen} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;