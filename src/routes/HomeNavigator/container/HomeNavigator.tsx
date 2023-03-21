import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@app/screens';
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
                component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default HomeNavigator;