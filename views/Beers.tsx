import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "../style/appStyle";

const Stack = createStackNavigator();

function Beers({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = makeStyles(colors);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Page1"
    >
      <Stack.Screen name="Page1" component={templatePageOne} initialParams={styles} />
      <Stack.Screen name="Page2" component={templatePageTwo} initialParams={styles} />
    </Stack.Navigator>
  );
}

function templatePageOne({ route, navigation }: { route:any ,navigation: any }) {
  const styles = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beers Page 1 template</Text>
      <Button
        title="Go to Page 2"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Page2', {
          });
        }}
      />
    </View>
  );
}
function templatePageTwo({ route, navigation }: { route:any ,navigation: any }) {
  const styles = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beers Page 2 template</Text>
      <Button
        title="Go to Page 1"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Page1', {
          });
        }}
      />
    </View>
  );
}

const makeStyles = (colors: any) =>
  StyleSheet.create({
    text: {
      color: colors.primary,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Beers;
