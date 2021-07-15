import * as React from "react";
import { Text, View , StyleSheet} from "react-native";
import Svg, { Circle, Path, G } from "react-native-svg";
import { MyTheme, fonts } from "../style/appStyle";
import { useNavigation } from '@react-navigation/native';

function ProfilDescription(props ) {
    const navigation =  useNavigation();

  return (
    <View style={style.container}>
        <View style={style.profilePicContainer}>
        <Svg width="100%" height="100%" viewBox="0 0 152.578 174.233">
        <Path
          id="Icon_awesome-user"
          data-name="Icon awesome-user"
          d="M75.789,86.616A43.308,43.308,0,1,0,32.481,43.308,43.3,43.3,0,0,0,75.789,86.616ZM106.1,97.443h-5.65a58.9,58.9,0,0,1-49.331,0h-5.65A45.485,45.485,0,0,0,0,142.917v14.075a16.245,16.245,0,0,0,16.241,16.241h119.1a16.245,16.245,0,0,0,16.241-16.241V142.917A45.485,45.485,0,0,0,106.1,97.443Z"
          transform="translate(0.5 0.5)"
          fill="none"
          stroke="#bcbdbe"
          stroke-width="1"
          onPress={() => {
              if(props.vote){
                navigation.navigate('VoteSingle');
              }
          }}
        />
      </Svg>
        </View>
      
      <TextDescription isFirst={props.place} name={props.name}></TextDescription>
    </View>
  );
}
function TextDescription(props){
    if(props.isFirst=="first"){
        return (
            <View style={style.textDescription}>
      <Text style={fonts.h1} >{props.name.toUpperCase()}</Text>
      <Text style={fonts.subTitle}>{"\n"}2m50 120kg {"\n"}{"\n"}Gilet d’or pour la 1ere fois</Text>
      <Text style={fonts.subTitle}>{"\n"}13 Votes</Text>
          </View>
        )
    }
    else{
        return (
            <View style={style.textDescription}>
      <Text style={fonts.h2} >{props.name}</Text>
      <Text style={fonts.subSubTitle}>{"\n"}0x Gilet d'or{"\n"}2 Votes</Text>
          </View>
        )
   
    }
}
const style = StyleSheet.create({
    profilePicContainer:{
        height:"100%",
        width:"60%",
    },
    mainContainer: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start"
    },
    container: {
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "row",
        alignContent: "space-between",
        height:"100%"
      },
      textDescription:{
          flex:1,
          alignItems:"flex-start"
      }
  });

export default ProfilDescription;
