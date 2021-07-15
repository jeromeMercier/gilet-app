import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: "#ededed",
    flexWrap: "wrap",
  },
});

const fonts = StyleSheet.create({
  h1: {
    fontFamily: "Euro-Bold",
    fontSize: 26,
  },
  h2: {
    fontFamily: "Euro-Bold",
    fontSize: 16,
    color: "#BCBDBE",
  },
  subTitle: {
    fontFamily: "Euro-Normal",
    fontSize: 16,
    color: "black",
    letterSpacing: 0.5,
  },
  subSubTitle: {
    fontFamily: "Euro-Normal",
    fontSize: 12,
    color: "black",
    letterSpacing: 0.5,
  },
});

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});

const MyTheme = {
  dark: false,
  colors: {
    primary: "#FFC325",
    secondary: "#BCBDBE",
    black: "rgb(0, 0, 0)",
  },
};

export { styles, buttons, MyTheme, fonts };
