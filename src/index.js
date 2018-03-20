import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import { AppRegistry, StyleSheet, Text, View } from "react-native-web";

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: "contain"
  }
});

const Menu = ({ menu, selected }) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Text style={[styles.text, { textAlign: "left" }]}>{"<"}</Text>
      </View>
      <Text style={styles.text}>Fitness & Nutrition Tracking</Text>
      <View style={styles.rightContainer}>
        <View style={styles.rightIcon}>
          <Text style={[styles.text, { textAlign: "right" }]}>{">"}</Text>
        </View>
      </View>
    </View>
  );
};

const App = () => (
  <div>
    <Menu />
  </div>
);

render(<App />, document.getElementById("root"));
