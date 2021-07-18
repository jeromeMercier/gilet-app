import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { styles, fonts } from '../style/appStyle';
import VoteButton from '../components/VoteButton';
import Icons from "../components/Icons";
import Podium from "../components/Podium";
import { createStackNavigator } from "@react-navigation/stack";
import Votes from "../components/Votes";
import VoteSingle from "../components/VoteSingle";

import {useSelector, useDispatch} from 'react-redux';
import {getUsers, addVote, removeVote} from '../store/actions';
import usersReducer from '../store/reducers';


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
  //@ts-ignore
  const {users} = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();
  const fetchUsers = () => dispatch(getUsers());
  const addAVote = user => dispatch(addVote(user));
const removeAVote = user => dispatch(removeVote(user));
const handleAddVote = user => {
  addAVote(user);
};
const handleRemoveVote = user => {
  removeAVote(user);
};
  useEffect(() => {
    fetchUsers();
  }, []);
  if(users.length <1){
    return(
      <Text>Loading</Text>
    )
  }
  else{
    return (
         // @ts-ignore
        <View style={style.container}>
        <View style={style.logoContainer}>
        <Icons name="logoGDORbAw"></Icons>
        </View>
        <Text>{users[0].name} {users[0].votes}</Text>
        <Text>{users[1].name} {users[1].votes}</Text>
        <Button title="ADD vote" onPress={() =>
    handleAddVote('jerome')
  }></Button>
        <View style={style.podiumContainer}>
        <Podium></Podium>
        </View>
       
        <View style={style.voteButtonContainer}>
      
        <VoteButton navigation={navigation}></VoteButton>
        </View>
      
    </View>
    )}
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