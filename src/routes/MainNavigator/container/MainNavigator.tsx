import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@app/screens';
//additional components
import { CustomTab } from '../components';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
            <Tab.Screen
                name="Home"
                component={HomeScreen} />
            <Tab.Screen
                name="Contact"
                component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default MainNavigator;