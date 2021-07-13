import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './components/Navigation'
import HomeScreen from './views/HomeScreen';
import TemplateScreen from './views/TemplateScreen';
import Beers from './views/Beers';
import Pictures from './views/Pictures';
import Stats from './views/Stats';
import { MyTheme } from './style/appStyle';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App({navigation}: {navigation: any}) {
  return (
    // @ts-ignore On ignoire l'erreur pcq on utilise pas un format de Theme classique
    // <Tab.Screen name="Template Screen" component={TemplateScreen} />
    <NavigationContainer theme={MyTheme}>
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} >
        <Tab.Screen name="Pictures" component={Pictures}/>
        <Tab.Screen name="Beer" component={Beers}/>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Stats" component={Stats}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

