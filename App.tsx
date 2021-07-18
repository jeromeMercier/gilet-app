import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./components/Navigation";
import HomeScreen from "./views/HomeScreen";
import Beers from "./views/Beers";
import Pictures from "./views/Pictures";
import Stats from "./views/Stats";
import { MyTheme } from "./style/appStyle";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import Signup from './views/Signup';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App({ navigation }: { navigation: any }) {
  let [fontsLoaded] = useFonts({
    "Euro-Bold": require("./assets/fonts/EurostileBold.ttf"),
    "Euro-Extended": require("./assets/fonts/EurostileExtended.ttf"),
    "Euro-Oblique": require("./assets/fonts/EurostileOblique.ttf"),
    "Euro-Normal": require("./assets/fonts/EuroStyleNormal.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            initialRouteName="Home"
          >
            <Tab.Screen name="Pictures" component={Pictures} key="Pictures"/>
            <Tab.Screen name="Beer" component={Beers} key="Beer"/>
            <Tab.Screen name="signup" component={Signup} key="signUp"/>
            <Tab.Screen name="Home" component={HomeScreen} key="Home"/>
            <Tab.Screen name="Stats" component={Stats} key="Stats"/>
          </Tab.Navigator>
        </NavigationContainer>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
