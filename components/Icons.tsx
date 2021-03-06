import * as React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Path, G, Ellipse} from "react-native-svg";
import { MyTheme } from "../style/appStyle";

function Icons(props) {
    if(props.name == "logoGDORbAw") {
        return <LogoGDORbAw></LogoGDORbAw>
    }
  if (props.name == "Beer") {
    return <Beer active={props.active}></Beer>;
  }
  if (props.name == "Home") {
    return <Home active={props.active}></Home>;
  }
  if (props.name == "Pictures") {
    return <Pictures active={props.active}></Pictures>;
  }
  if (props.name == "Stats") {
    return <Stats active={props.active}></Stats>;
  } else return <Beer></Beer>;
}
function Beer(props) {
    var color = MyTheme.colors.secondary
    if(props.active){
        color = MyTheme.colors.primary;
    }
  return (
    <View >
      <Svg width="60" height="40" viewBox="0 0 37.71 37.71">
        <Path
          id="Icon_awesome-beer"
          data-name="Icon awesome-beer"
          d="M30.155,7.494H26.222V4.217A1.967,1.967,0,0,0,24.255,2.25H1.967A1.967,1.967,0,0,0,0,4.217V36.994A1.967,1.967,0,0,0,1.967,38.96H24.255a1.967,1.967,0,0,0,1.967-1.967V33.543l6.605-2.948a6.563,6.563,0,0,0,3.884-5.986V14.05A6.563,6.563,0,0,0,30.155,7.494Zm1.311,17.114a1.313,1.313,0,0,1-.777,1.2L26.222,27.8V12.739h3.933a1.313,1.313,0,0,1,1.311,1.311ZM17.044,31.094a1.311,1.311,0,0,1-1.311-1.311V11.428a1.311,1.311,0,0,1,2.622,0V29.783A1.311,1.311,0,0,1,17.044,31.094Zm-7.866,0a1.311,1.311,0,0,1-1.311-1.311V11.428a1.311,1.311,0,0,1,2.622,0V29.783A1.311,1.311,0,0,1,9.178,31.094Z"
          transform="translate(0.5 -1.75)"
          fill="none"
          stroke={color}
          stroke-width="1"
        />
      </Svg>
    </View>
  );
}
function Stats(props) {
    var color = MyTheme.colors.secondary
    if(props.active){
        color = MyTheme.colors.primary;
    }
  return (
    <View>
      <Svg
        width="60"
        height="40"
        viewBox="0 0 41.842 37.71"
      >
        <G id="Stats" transform="translate(0.501 -2.5)">
          <Path
            id="Trac??_11"
            data-name="Trac?? 11"
            d="M40.108,39.71H0V3.68a.68.68,0,1,1,1.36,0V38.35H40.108a.68.68,0,0,1,0,1.36Z"
            transform="translate(0 0)"
            fill="none"
            stroke={color}
            stroke-width="1"
          />
          <Path
            id="Trac??_12"
            data-name="Trac?? 12"
            d="M6.626,36.71a.609.609,0,0,1-.307-.083.647.647,0,0,1-.239-.871L11.724,25.52a.62.62,0,0,1,.745-.293l5.109,1.738,6.664-14.833a.63.63,0,0,1,.446-.36.623.623,0,0,1,.548.155l6.938,6.488L38.687,6.333a.623.623,0,0,1,.852-.253.645.645,0,0,1,.247.868l-6.9,12.8a.625.625,0,0,1-.448.324.606.606,0,0,1-.526-.159l-6.891-6.444L18.484,28.02a.622.622,0,0,1-.769.34l-5.154-1.752L7.173,36.384A.623.623,0,0,1,6.626,36.71Z"
            transform="translate(0.925 0)"
            fill="none"
            stroke={color}
            stroke-width="1"
          />
        </G>
      </Svg>
    </View>
  );
}
function Home(props) {
    var color = MyTheme.colors.secondary
    if(props.active){
        color = MyTheme.colors.primary;
    }
  return (
    <View>
      <Svg width="60" height="40" viewBox="0 0 45.794 37.883">
        <Path
          id="Icon_material-home"
          data-name="Icon material-home"
          d="M20.275,41.21V28.254h8.638V41.21h10.8V23.935h6.478L24.594,4.5,3,23.935H9.478V41.21Z"
          transform="translate(-1.697 -3.827)"
          fill="none"
          stroke={color}
          stroke-width="1"
        />
      </Svg>
    </View>
  );
}
function LogoGDORbAw(){
    return( 
        
<Svg  width="100%" height="100%" viewBox="0 0 179.553 181.169">
  <G id="GDOR" transform="translate(-176.54 -312.071)">
    <G id="Composant_1_5" data-name="Composant 1 ??? 5" transform="translate(302.897 416.69) rotate(-7)">
      <Path id="Trac??_2" data-name="Trac?? 2" d="M145.666,104.625a23.773,23.773,0,0,0,11.285,3.762,37.452,37.452,0,0,0,12.732-1.156,27.564,27.564,0,0,0,10.127-6.367,16.921,16.921,0,0,0,4.34-10.418,24.642,24.642,0,0,0-1.445-11,25.449,25.449,0,0,0-5.5-9.839,19.376,19.376,0,0,0-8.1-5.208,26.686,26.686,0,0,0-15.047.29,25.443,25.443,0,0,0-10.707,6.077,30.341,30.341,0,0,0-5.5,10.417A26.834,26.834,0,0,0,138.72,94.5a17.924,17.924,0,0,0,6.946,10.127Z" transform="translate(-136.492 -60.972)" fill="#ffc325" fill-rule="evenodd"/>
      <G id="Ellipse_1" data-name="Ellipse 1" transform="translate(1.244 15)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_2" data-name="Ellipse 2" transform="translate(1.244 11)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_3" data-name="Ellipse 3" transform="translate(6.244 12)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_4" data-name="Ellipse 4" transform="translate(5.244 5)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_5" data-name="Ellipse 5" transform="translate(10.244 7)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_6" data-name="Ellipse 6" transform="translate(13.244 2)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_7" data-name="Ellipse 7" transform="translate(18.244 4)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_8" data-name="Ellipse 8" transform="translate(21.244)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_9" data-name="Ellipse 9" transform="translate(15.244 1)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_10" data-name="Ellipse 10" transform="translate(10.244 11)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_11" data-name="Ellipse 11" transform="translate(13.244 8)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_12" data-name="Ellipse 12" transform="translate(0.244 20)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <Circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </G>
      <G id="Ellipse_13" data-name="Ellipse 13" transform="translate(26.244)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Ellipse cx="4" cy="4.5" rx="4" ry="4.5" stroke="none"/>
        <Ellipse cx="4" cy="4.5" rx="3.5" ry="4" fill="none"/>
      </G>
      <G id="Ellipse_14" data-name="Ellipse 14" transform="translate(9.244 3)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_15" data-name="Ellipse 15" transform="translate(17.244 1)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_16" data-name="Ellipse 16" transform="translate(16.244 6)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
      <G id="Ellipse_17" data-name="Ellipse 17" transform="translate(22.244 5)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Ellipse cx="4.5" cy="5" rx="4.5" ry="5" stroke="none"/>
        <Ellipse cx="4.5" cy="5" rx="4" ry="4.5" fill="none"/>
      </G>
      <G id="Ellipse_19" data-name="Ellipse 19" transform="translate(27.244 3)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Ellipse cx="4.5" cy="4" rx="4.5" ry="4" stroke="none"/>
        <Ellipse cx="4.5" cy="4" rx="4" ry="3.5" fill="none"/>
      </G>
      <G id="Ellipse_20" data-name="Ellipse 20" transform="translate(30.244 2)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="3.5" cy="3.5" r="3.5" stroke="none"/>
        <Circle cx="3.5" cy="3.5" r="3" fill="none"/>
      </G>
      <G id="Ellipse_21" data-name="Ellipse 21" transform="translate(0 16.985)" fill="#f0ecec" stroke="#f0ecec" stroke-width="1">
        <Circle cx="5" cy="5" r="5" stroke="none"/>
        <Circle cx="5" cy="5" r="4.5" fill="none"/>
      </G>
    </G>
    <Path id="O" fill="black" d="M92.934,74.784l-7.41,1.764a40.259,40.259,0,0,0-6.705,3.175,25.439,25.439,0,0,0-7.41,8.821A25.106,25.106,0,0,0,68.94,99.836a21.556,21.556,0,0,0,2.823,10.586,17.315,17.315,0,0,0,8.115,7.761,18.956,18.956,0,0,0,12.35,2.117,17.881,17.881,0,0,0,11.644-5.292,20.167,20.167,0,0,0,1.764-26.817A13.881,13.881,0,0,0,98.576,82.9a15.75,15.75,0,0,0-8.116,0A14.2,14.2,0,0,0,83.4,86.073a17.226,17.226,0,0,0-2.47,2.822l-.7-.352a11.163,11.163,0,0,1,5.292-8.116,23.3,23.3,0,0,1,10.233-3.175c4.587-.354,8.468,1.058,12.351,3.881a29.478,29.478,0,0,1,7.761,10.586,31.262,31.262,0,0,1,2.117,13.76,27.592,27.592,0,0,1-4.587,13.056,31.116,31.116,0,0,1-12.7,10.586c-7.41,3.175-15.172,2.822-22.936-1.06-8.115-3.88-13.054-9.526-15.524-17.64A31.659,31.659,0,0,1,63.292,90.66c2.822-6.7,7.056-11.644,13.054-14.82a19.2,19.2,0,0,1,9.527-2.469,24.264,24.264,0,0,1,7.061,1.413ZM87.993,102.66c1.529,1.145,2.857,1.651,4.174,1.232.816-1.089,2.457-4.314.06-5.112a2.645,2.645,0,0,0-3.175,0,3.765,3.765,0,0,0-1.058,3.88Z" transform="translate(159.87 349.039)" fill-rule="evenodd"/>
    <Path id="e" fill="black" d="M157.529,109.545a15.546,15.546,0,0,0-4.631,8.391c-.1.387-.191.771-.289,1.158l.58,1.158.289-.291a26.709,26.709,0,0,0,3.762-5.5,22.05,22.05,0,0,0,1.736-5.787c-.226.226-1.074.551-1.447.869Zm5.209,2.893a29.126,29.126,0,0,1-4.92,7.234q-1.014.867-2.025,1.736c-1.158.869-2.025,1.158-2.9.869l-.578-.58-.289,3.473q0,4.776,1.736,6.945a2.187,2.187,0,0,0,2.025,1.158A8.975,8.975,0,0,0,161,132.4q4.629-2.895,9.26-5.787l5.787-4.051.58.289c-4.631,5.787-8.393,10.127-11.576,12.732q-2.028,1.156-4.051,2.314a13.931,13.931,0,0,1-7.234,1.158,8.95,8.95,0,0,1-5.787-3.762,17.25,17.25,0,0,1-2.314-5.5,25.417,25.417,0,0,1-.58-9.26,23.165,23.165,0,0,1,2.9-8.971,19.362,19.362,0,0,1,4.918-5.787,12.449,12.449,0,0,1,6.656-2.895,8.585,8.585,0,0,1,2.9.578,5.924,5.924,0,0,1,1.447,2.605,10.4,10.4,0,0,1-1.159,6.369Z" transform="translate(107.838 269)" fill-rule="evenodd"/>
    <Path id="R" fill="black" d="M158.4,47.908a4.3,4.3,0,0,0,2.314,4.051c1.447.579,2.9.579,3.762-.289,2.314-2.026,2.314-4.051.289-6.366-1.72-1.721-6.986.124-6.365,2.6Zm-8.681-2.893c3.762,1.736,5.5,3.761,5.787,5.787,0,1.736-1.158,3.473-3.184,5.5l-6.365,4.63-2.314,2.026,12.73,10.417c-.1.29-.191.579-.289.868q-5.933-2.75-11.863-5.5-4.776-2.169-6.078-4.34c-.578-1.446-.578-2.6.291-3.472q3.906-4.052,7.812-8.1l.867-.868-1.734-.289q-2.6-.144-5.209-.29l-7.523,1.447-2.6.868c-.193.193-.387.386-.578.579q-.289,4.485-.578,8.97a293.211,293.211,0,0,1-5.5,39.354q-1.011,1.881-2.023,3.762V62.954L121.07,53.4a8.623,8.623,0,0,1,1.447-4.341,7.4,7.4,0,0,1,3.762-2.894,21.734,21.734,0,0,1,8.682-2.6l9.838.29a24.557,24.557,0,0,1,4.918,1.159Z" transform="translate(153.718 375.564) rotate(-7)" fill-rule="evenodd"/>
    <Path id="d" fill="black" d="M26.913,110.073q-3.37,1.121-4.489,6.733l-1.5,8.98v1.494l.747.747h.75c1.544-.605,2.671-2.464,3.739-4.489A41.673,41.673,0,0,0,29.9,112.317v-1.494Q28.407,110.439,26.913,110.073Zm3.739-17.215c0-2.244.75-2.991,2.244-2.991a1.984,1.984,0,0,1,2.244,2.244,83.135,83.135,0,0,1,1.5,12.716l-.747,7.485.747,4.489q1.125,4.483,2.244,8.98h-.747L35.14,118.3l-1.494,3.741a40.817,40.817,0,0,1-5.986,8.232c-2.994,3.736-5.986,3.736-8.98,1.494a7.982,7.982,0,0,1-2.244-3.741c-.747-3.741.747-8.232,2.992-12.721q3.366-8.975,8.98-6.733l1.5.747.75-4.491,0-11.966Z" transform="matrix(1, -0.017, 0.017, 1, 168.979, 360.251)" fill-rule="evenodd"/>
    <Path id="Le" fill="black" d="M99.061,47.841c-.816,3.669-.816,6.524.407,8.563a2.869,2.869,0,0,0,1.632,2.037,7.738,7.738,0,0,0,5.706-1.223,36.78,36.78,0,0,0,7.747-5.708h.41c-2.446,6.929-6.525,10.6-12.64,11.416-3.669.407-6.117-1.223-8.155-5.3-2.039-4.486-2.039-8.971-.407-14.27q3.058-9.173,11.009-11.007a4.141,4.141,0,0,1,4.076.816q2.447,1.835,1.224,6.116a15.252,15.252,0,0,1-4.893,8.154,6.487,6.487,0,0,1-4.078,2.039,2.118,2.118,0,0,1-1.632-.816q-.2-.41-.406-.817Zm6.932-10.6c-.471-.3-1.322-.063-2.039.816-1.63,1.632-2.853,4.078-4.078,7.747v.407l.407,1.632.407-.409c1.632-.814,2.855-2.446,4.079-4.485a13.033,13.033,0,0,0,1.223-5.708ZM75.821,22.155c2.039,3.669,3.669,6.931,4.078,9.786A98.594,98.594,0,0,1,81.531,51.1v9.378l.407,3.669.407,1.223h.409L92.946,61.7l.407.816-5.3,4.893a12.368,12.368,0,0,1-6.522,3.26l-2.039-.407c-1.63-1.223-2.853-3.262-4.078-6.117L74.191,56.4,74.6,40.5l.816-13.455.407-4.892Z" transform="translate(136.423 289.916)" fill-rule="evenodd"/>
    <Path id="Trac??_5" fill="black" data-name="Trac?? 5" d="M43.822,106.343a39.209,39.209,0,0,0-9.756,6.134c-3.346,3.065-7.806-1.117-2.789-3.905,4.462-2.507,8.643-3.344,12.545-2.228Z" transform="translate(326.18 449.071) rotate(114)" fill-rule="evenodd"/>
    <Path id="L"fill="black" d="M75.821,22.155c2.039,3.669,3.669,6.931,4.078,9.786A98.594,98.594,0,0,1,81.531,51.1v9.378l.407,3.669.407,1.223h.409L92.946,61.7l.407.816-5.3,4.893a12.368,12.368,0,0,1-6.522,3.26l-2.039-.407c-1.63-1.223-2.853-3.262-4.078-6.117L74.191,56.4,74.6,40.5l.816-13.455.407-4.892Z" transform="translate(155.398 337.916)" fill-rule="evenodd"/>
    <G id="le-tour-de-france-1" fill="black"transform="translate(250.153 283.406)">
      <Path id="T"fill="black" d="M45.316,63.667l8.768-2.447.2.407a35.9,35.9,0,0,1-7.34,5.71,26.11,26.11,0,0,1-4.485,1.835L44.3,81.406l.612,8.768a52.733,52.733,0,0,1-.612,8.563l-1.631,4.486-.408-.2L40.219,93.64,38.384,76.1a46.5,46.5,0,0,1,.408-6.321l-.816.2-3.231-.172-4.124-.22-7.937-.424L34.05,65.923l2.907-.831Z" fill-rule="evenodd"/>
    </G>
    <G id="Groupe_1" fill="black"data-name="Groupe 1" transform="matrix(1, -0.017, 0.017, 1, 21.264, -441.067)">
      <Path id="L-2"fill="black" data-name="L" d="M75.386,22.155c1.495,2.69,2.69,5.081,2.989,7.173a72.274,72.274,0,0,1,1.2,14.047V50.25l.3,2.69c.633,3.748-1.793,4.484-1.793,4.484a10.659,10.659,0,0,1-2.989-4.484l-.9-5.679.3-11.657.6-9.863.3-3.586Z" transform="translate(104.418 803.419)" fill-rule="evenodd"/>
      <Path id="O-2" fill="black"data-name="O" d="M88.026,103.753c1.908,1.429,3.565,2.06,5.209,1.537,1.018-1.359,3.066-5.384.075-6.379a3.3,3.3,0,0,0-3.963,0,4.7,4.7,0,0,0-1.321,4.842Z" transform="translate(88.057 714.974)" fill-rule="evenodd"/>
    </G>
    <Path id="Trac??_8"fill="black" data-name="Trac?? 8" d="M163.576,109.022c2,2.074,2.9,7.418,3.757,11.935.095.465.189.926.285,1.39h-1.143c-3.181.142-4.972-2.275-5.829-4.36-.856-2.431-1.33-7.41.737-8.167,1.153-.628,1.825-1.18,2.194-.8Zm-7.378,8.472c1.143,3.128,1.637,3.115,3.635,5.894a12.736,12.736,0,0,0,4.209,2.781,5.03,5.03,0,0,0,3.291,0l.571-.7.285,4.17q0,5.734-1.714,8.339a2.113,2.113,0,0,1-2,1.39c-1.428.347-3.815,1.642-6.863-.676L153.73,136.3l-.189,2.422c4.571,6.948,4.461,5.278,5.794,6.2a11.575,11.575,0,0,0,7.14,1.39,8.914,8.914,0,0,0,5.712-4.517,23.362,23.362,0,0,0,2.284-6.6,36.955,36.955,0,0,0,.572-11.118,32.231,32.231,0,0,0-2.858-10.771c-1.428-2.778-4.421-10.69-5.773-11.912-2.069-.509-3.279,1.007-5.652,1.488a25.061,25.061,0,0,1-2.736,1.288,6.1,6.1,0,0,0-1.549,2.534c-.285,2.436-1.421,8.007-.278,10.786Z" transform="translate(82.345 239.871) rotate(20)" fill-rule="evenodd"/>
  
  </G>
</Svg>

    );
}
function Pictures(props) {
    var color = MyTheme.colors.secondary
    if(props.active){
        color = MyTheme.colors.primary;
    }
  return (
    <View>
      <Svg width="60" height="40" viewBox="0 0 46.858 38.072">
        <G
          id="Icon_material-photo-camera"
          data-name="Icon material-photo-camera"
          transform="translate(-2.5 -2.5)"
        >
          <Path
            id="Trac??_9"
            data-name="Trac?? 9"
            d="M17.489,15.345A2.145,2.145,0,1,1,15.345,13.2,2.145,2.145,0,0,1,17.489,15.345Z"
            transform="translate(10.584 9.017)"
            fill="none"
            stroke={color}
            stroke-width="2"
          />
          <Path
            id="Trac??_10"
            data-name="Trac?? 10"
            d="M19.05,3l-4.2,4.119H7.586A4.384,4.384,0,0,0,3,11.238V35.953a4.384,4.384,0,0,0,4.586,4.119H44.272a4.384,4.384,0,0,0,4.586-4.119V11.238a4.384,4.384,0,0,0-4.586-4.119H37L32.807,3Zm6.879,30.893c-6.328,0-11.464-4.613-11.464-10.3S19.6,13.3,25.929,13.3s11.464,4.613,11.464,10.3S32.257,33.893,25.929,33.893Z"
            fill="none"
            stroke={color}
            stroke-width="1"
          />
        </G>
      </Svg>
    </View>
  );
}
export default Icons;
