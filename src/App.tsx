import React from "react";
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import MainNavigator from '@app/routes/MainNavigator/container';


const App = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}

export default App;