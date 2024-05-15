/**
 *
 * @format
 */

// React modules
import React from "react";
import { View } from "react-native";

// Third party libraries
import { verticalScale } from "react-native-size-matters";

// Types
import type { PropsType } from "./types";

const Separator = (props: PropsType) => {
  const { space } = props;
  return <View style={[{ marginTop: space ? verticalScale(space) : 0 }]} />;
};

export default Separator;
