import * as React from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import Svg, { Circle, Path, G } from "react-native-svg";
import { MyTheme, styles } from "../style/appStyle";
import ProfilDescription from "./ProfilDescription";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Icons from "./Icons";
import { useNavigation } from '@react-navigation/native';


function VoteSingle() {
    const navigation =  useNavigation();
    const goBack = () => {
        navigation.navigate('Votes');
        
}
  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Icons name="logoGDORbAw"></Icons>
      </View>
      <View style={style.profilVote}>
        <ProfilDescription place="first" name="Margue"></ProfilDescription>
      </View>
      <View style={style.buttonsContainer}>
          <View style={{marginTop:"7%", marginHorizontal:"10%"}}>
          <ButtonPrimary title="Voter" onPress={() => navigation.goBack()}></ButtonPrimary>
          </View>
          <View style={{marginTop:"7%", marginHorizontal:"10%"}}>
          <ButtonSecondary title="Annuler" onPress={() => navigation.goBack()}></ButtonSecondary>
          </View>
          
            
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    buttonsContainer: {
        height:"35%",
        width:"100%"
    },
    profilVote: {
        width:"100%",
        height:"35%",
        paddingHorizontal:"10%"
    },
  logoContainer: {
    paddingVertical: "10%",
    height: "30%",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default VoteSingle;
