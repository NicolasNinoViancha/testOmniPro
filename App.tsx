import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

export type PropsScreen = {
  navigation: NavigationProp<any>;
};




const HomeScreen = ({ navigation }: PropsScreen) => {
  const MyIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Icon
        name="rocket"
        size={30}
        color="#900" />
      <Button
        title='Go Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const DetailsScreen = ({ navigation }: PropsScreen) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Icon
        name="close"
        size={30}
        color="#000" />
      <Button
        title='Go Home'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;