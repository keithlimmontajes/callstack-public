// React modules
import React from "react";
import { View } from "react-native";

// Components
import Text from "../Text";

// Style
import { styles } from "./styles";

const UnderConstruction = () => {
  return (
    <View style={styles.container}>
      <Text size={15}>This page is under construction</Text>
    </View>
  );
};

export default UnderConstruction;
