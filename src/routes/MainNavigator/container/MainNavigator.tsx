import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@app/screens';
//additional components
import { CustomTab } from '../components';
import HomeNavigator from '../../HomeNavigator/container';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
            <Tab.Screen
                name="Home"
                options={{
                    headerShown: false
                }}
                component={HomeNavigator} />
            <Tab.Screen
                name="Contact"
                component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default MainNavigator;