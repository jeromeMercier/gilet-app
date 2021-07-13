import * as React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Path, G } from "react-native-svg";

function Icons(props) {
  if (props.name == "Beer") {
    return <Beer></Beer>;
  }
  if (props.name == "Home") {
    return <Home></Home>;
  }
  if (props.name == "Pictures") {
    return <Pictures></Pictures>;
  }
  if (props.name == "Stats") {
    return <Stats></Stats>;
  } else return <Beer></Beer>;
}
function Beer() {
  return (
    <View>
      <Svg width="37.71" height="37.71" viewBox="0 0 37.71 37.71">
        <Path
          id="Icon_awesome-beer"
          data-name="Icon awesome-beer"
          d="M30.155,7.494H26.222V4.217A1.967,1.967,0,0,0,24.255,2.25H1.967A1.967,1.967,0,0,0,0,4.217V36.994A1.967,1.967,0,0,0,1.967,38.96H24.255a1.967,1.967,0,0,0,1.967-1.967V33.543l6.605-2.948a6.563,6.563,0,0,0,3.884-5.986V14.05A6.563,6.563,0,0,0,30.155,7.494Zm1.311,17.114a1.313,1.313,0,0,1-.777,1.2L26.222,27.8V12.739h3.933a1.313,1.313,0,0,1,1.311,1.311ZM17.044,31.094a1.311,1.311,0,0,1-1.311-1.311V11.428a1.311,1.311,0,0,1,2.622,0V29.783A1.311,1.311,0,0,1,17.044,31.094Zm-7.866,0a1.311,1.311,0,0,1-1.311-1.311V11.428a1.311,1.311,0,0,1,2.622,0V29.783A1.311,1.311,0,0,1,9.178,31.094Z"
          transform="translate(0.5 -1.75)"
          fill="none"
          stroke="#bcbdbe"
          stroke-width="1"
        />
      </Svg>
    </View>
  );
}
function Stats() {
  return (
    <View>
      <Svg
        width="41.842"
        height="37.71"
        viewBox="0 0 41.842 37.71"
      >
        <G id="Stats" transform="translate(0.501 -2.5)">
          <Path
            id="Tracé_11"
            data-name="Tracé 11"
            d="M40.108,39.71H0V3.68a.68.68,0,1,1,1.36,0V38.35H40.108a.68.68,0,0,1,0,1.36Z"
            transform="translate(0 0)"
            fill="none"
            stroke="#bcbdbe"
            stroke-width="1"
          />
          <Path
            id="Tracé_12"
            data-name="Tracé 12"
            d="M6.626,36.71a.609.609,0,0,1-.307-.083.647.647,0,0,1-.239-.871L11.724,25.52a.62.62,0,0,1,.745-.293l5.109,1.738,6.664-14.833a.63.63,0,0,1,.446-.36.623.623,0,0,1,.548.155l6.938,6.488L38.687,6.333a.623.623,0,0,1,.852-.253.645.645,0,0,1,.247.868l-6.9,12.8a.625.625,0,0,1-.448.324.606.606,0,0,1-.526-.159l-6.891-6.444L18.484,28.02a.622.622,0,0,1-.769.34l-5.154-1.752L7.173,36.384A.623.623,0,0,1,6.626,36.71Z"
            transform="translate(0.925 0)"
            fill="none"
            stroke="#bcbdbe"
            stroke-width="1"
          />
        </G>
      </Svg>
    </View>
  );
}
function Home() {
  return (
    <View>
      <Svg width="45.794" height="37.883" viewBox="0 0 45.794 37.883">
        <Path
          id="Icon_material-home"
          data-name="Icon material-home"
          d="M20.275,41.21V28.254h8.638V41.21h10.8V23.935h6.478L24.594,4.5,3,23.935H9.478V41.21Z"
          transform="translate(-1.697 -3.827)"
          fill="none"
          stroke="#bcbdbe"
          stroke-width="1"
        />
      </Svg>
    </View>
  );
}
function Pictures() {
  return (
    <View>
      <Svg width="46.858" height="38.072" viewBox="0 0 46.858 38.072">
        <G
          id="Icon_material-photo-camera"
          data-name="Icon material-photo-camera"
          transform="translate(-2.5 -2.5)"
        >
          <Path
            id="Tracé_9"
            data-name="Tracé 9"
            d="M17.489,15.345A2.145,2.145,0,1,1,15.345,13.2,2.145,2.145,0,0,1,17.489,15.345Z"
            transform="translate(10.584 9.017)"
            fill="none"
            stroke="#bcbdbe"
            stroke-width="2"
          />
          <Path
            id="Tracé_10"
            data-name="Tracé 10"
            d="M19.05,3l-4.2,4.119H7.586A4.384,4.384,0,0,0,3,11.238V35.953a4.384,4.384,0,0,0,4.586,4.119H44.272a4.384,4.384,0,0,0,4.586-4.119V11.238a4.384,4.384,0,0,0-4.586-4.119H37L32.807,3Zm6.879,30.893c-6.328,0-11.464-4.613-11.464-10.3S19.6,13.3,25.929,13.3s11.464,4.613,11.464,10.3S32.257,33.893,25.929,33.893Z"
            fill="none"
            stroke="#bcbdbe"
            stroke-width="1"
          />
        </G>
      </Svg>
    </View>
  );
}
export default Icons;
