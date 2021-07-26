import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Circle, Path, G } from "react-native-svg";
import { MyTheme } from "../style/appStyle";
import ProfilDescription from "./ProfilDescription"

function VoteButton() {
  return (
    <View style={style.mainContainer}>
        <View style={style.firstContainer}><ProfilDescription place="first" name="A définir"></ProfilDescription></View>
        
        <View style={style.secondContainer}>
            <ProfilDescription place="second" name="A définir"></ProfilDescription>
            <ProfilDescription place="third" name="A définir"></ProfilDescription>
        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginHorizontal:"5%"
    },
      firstContainer: {
        height:"67%",
        width:"100%",
        marginBottom:"3%",
    },
    secondContainer: {
        height:"30%",
        width:"100%",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        alignContent: "space-between"
    },
  });

export default VoteButton;
