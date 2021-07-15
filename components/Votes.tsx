import * as React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import Svg, { Circle, Path, G } from "react-native-svg";
import { MyTheme, styles } from "../style/appStyle";
import ProfilDescription from "./ProfilDescription";


function Votes({navigation}) {
let initialArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <ScrollView style={{height:"100%"}}>
        <View style={style.mainContainer}>
    {initialArr.map((prop, key) => {
         return (
            <View style={style.container}>
<ProfilDescription  name={prop} place="second" vote={true} navigation={navigation}></ProfilDescription>
            </View>
           
         );
      })}
      </View>
  </ScrollView>
  )
}


const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal:"5%"
    },
      container: {
        width:"50%",
        height:100,
        marginBottom:"2%"
        }

  });

export default Votes;
