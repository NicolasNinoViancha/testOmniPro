import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@app/screens';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default MainNavigator;