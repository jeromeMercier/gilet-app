import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { styles, fonts } from '../style/appStyle';
import VoteButton from '../components/VoteButton';
import Icons from "../components/Icons";
import Podium from "../components/Podium";
import { createStackNavigator } from "@react-navigation/stack";
import Votes from "../components/Votes";
import VoteSingle from "../components/VoteSingle";


const Stack = createStackNavigator();

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Page1"
  >
    <Stack.Screen name="Recap" component={recap} />
    <Stack.Screen name="Votes" component={votesScreen} />
    <Stack.Screen name="VoteSingle" component={VoteSingle} />
  </Stack.Navigator>
    
  );
}
function votesScreen({navigation}: {navigation: any}){
    return (
        <View style={style.container}>
        <View style={style.logoContainer}>
        <Icons name="logoGDORbAw"></Icons>
        </View>
            <Votes navigation={navigation}></Votes>
        </View>

    )
}
function recap({navigation}: {navigation: any}){
    return (
         // @ts-ignore
        <View style={style.container}>
        <View style={style.logoContainer}>
        <Icons name="logoGDORbAw"></Icons>
        </View>
        <View style={style.podiumContainer}>
        <Podium></Podium>
        </View>
       
        <View style={style.voteButtonContainer}>
      
        <VoteButton navigation={navigation}></VoteButton>
        </View>
      
    </View>
    )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
    },
    voteButtonContainer: {
        height:"30%",
        width:"100%",
        paddingVertical:"2%",
    },
    logoContainer: {
        paddingVertical:"10%",
        height:"30%",
        width:"100%"
    },
    podiumContainer: {
        height:"40%",
        width:"100%"
    }
  });

export default HomeScreen;