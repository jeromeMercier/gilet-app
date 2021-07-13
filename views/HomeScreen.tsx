import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { styles, fonts } from '../style/appStyle';
import VoteButton from '../components/VoteButton';



function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={style.container}>
        <Text style={fonts.title}>Titre</Text>
      <VoteButton></VoteButton>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom:32
    },
  });

export default HomeScreen;